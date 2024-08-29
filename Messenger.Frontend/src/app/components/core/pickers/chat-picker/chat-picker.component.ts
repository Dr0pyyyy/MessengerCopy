import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatService} from "../../../../services/chat.service";
import {ChatModel} from "../../../../models/chat-model";
import {Subscription} from "rxjs";
import {UserModel} from "../../../../models/user.model";
import {ApplicationDataService} from "../../../../services/application-data.service";

@Component({
  selector: 'app-chat-picker',
  standalone: true,
  imports: [],
  templateUrl: './chat-picker.component.html',
  styleUrl: './chat-picker.component.scss'
})
export class ChatPickerComponent implements OnInit, OnDestroy {

  public chats: ChatModel[];
  public user: UserModel | null = null;

  private chatServiceGetAllSubscription$: Subscription;

  constructor(
    private _chatService: ChatService,
    private _applicationDataService: ApplicationDataService) {
  }

  ngOnInit() {
    this.user = this._applicationDataService.getUser();
    this.getAllChats();
  }

  ngOnDestroy() {
    this.chatServiceGetAllSubscription$?.unsubscribe();
  }

  getAllChats() {
    this.chatServiceGetAllSubscription$ = this._chatService.getAll(this.user!.userId)
      .subscribe({
        next: (response) => {
          this.chats = response;
        },
        error: (error) => {
          console.log("Error while retrieving chats data");
        }
      });
  }

}
