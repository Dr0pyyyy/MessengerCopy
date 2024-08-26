import {Component, Input} from '@angular/core';
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {UserModel} from "../../../models/user.model";
import {ChatModel} from "../../../models/chat-model";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DatePipe
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  @Input() chat: ChatModel;

  displayChat(chatId: number) {

  }
}
