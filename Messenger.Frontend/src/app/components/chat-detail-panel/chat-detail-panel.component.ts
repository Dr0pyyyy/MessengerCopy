import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ChatModel} from "../../models/chat-model";
import {ChatDetailTopbarComponent} from "./chat-detail-topbar/chat-detail-topbar.component";
import {ChatDetailThreadComponent} from "./chat-detail-thread/chat-detail-thread.component";
import {ChatDetailComposerComponent} from "./chat-detail-composer/chat-detail-composer.component";

@Component({
  selector: 'app-chat-detail-panel',
  standalone: true,
  imports: [
    ChatDetailTopbarComponent,
    ChatDetailThreadComponent,
    ChatDetailComposerComponent
  ],
  templateUrl: './chat-detail-panel.component.html',
  styleUrl: './chat-detail-panel.component.scss'
})
export class ChatDetailPanelComponent implements OnInit, OnChanges {

  @Output() chatControlsPanelSizeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() chat: ChatModel;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chat'] && this.chat) {
      //TODO: Jakmile se nastaví chat, tak tady můžu pokračovat
    }
  }

  toggleControlsPanelSize($event: boolean) {
    this.chatControlsPanelSizeChanged.emit($event);
  }
}
