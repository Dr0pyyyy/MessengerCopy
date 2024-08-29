import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {ChatComponent} from "./chat/chat.component";
import {UserModel} from "../../models/user.model";
import {ChatService} from "../../services/chat.service";
import {Subscription} from "rxjs";
import {ChatModel} from "../../models/chat-model";
import {ChatPickerComponent} from "../core/pickers/chat-picker/chat-picker.component";

@Component({
  selector: 'app-chats-panel',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ChatComponent,
    NgForOf,
    ChatPickerComponent
  ],
  templateUrl: './chats-panel.component.html',
  styleUrl: './chats-panel.component.scss'
})
export class ChatsPanelComponent implements OnInit, OnDestroy, OnChanges {

  @Input() user: UserModel;

  @Output() chatToDisplay: EventEmitter<ChatModel> = new EventEmitter<ChatModel>();

  public chats: ChatModel[];
  public selectedChat: ChatModel;

  //Subscriptions
  private chatServiceGetAllSubscription$: Subscription;

  constructor(
    private _chatService: ChatService
  ) {
  }

  ngOnInit() {
    this.chats = [];
  }

  ngOnDestroy() {
    this.chatServiceGetAllSubscription$?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && this.user) {
      this.getAllChats();
    }
  }

  getAllChats() {
    this.chatServiceGetAllSubscription$ = this._chatService.getAll(this.user.userId)
      .subscribe({
        next: (response) => {
          this.chats = response;
          if(this.chats && this.chats.length > 0)
            this.selectedChat = this.chats[0];
            this.chatToDisplay.emit(this.selectedChat);
        },
        error: (error) => {
          console.log("Error while retrieving chats data");
        }
      })
  }

}
