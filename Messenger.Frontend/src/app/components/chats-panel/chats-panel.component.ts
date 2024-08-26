import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {ChatComponent} from "./chat/chat.component";
import {UserModel} from "../../models/user.model";
import {ChatService} from "../../services/chat.service";
import {Subscription} from "rxjs";
import {ChatModel} from "../../models/chat-model";

@Component({
  selector: 'app-chats-panel',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ChatComponent,
    NgForOf
  ],
  templateUrl: './chats-panel.component.html',
  styleUrl: './chats-panel.component.scss'
})
export class ChatsPanelComponent implements OnInit, OnDestroy, OnChanges {

  @Input() user: UserModel;

  public chats: ChatModel[];

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
      this.openNewMessageTemplate();
    }
  }

  openNewMessageTemplate() {
    this.chatServiceGetAllSubscription$ = this._chatService.getAll(this.user.userId)
      .subscribe({
        next: (response) => {
          this.chats = response;
        },
        error: (error) => {

        }
      })
  }


}
