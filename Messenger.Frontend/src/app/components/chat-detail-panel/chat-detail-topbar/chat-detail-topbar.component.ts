import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-chat-detail-topbar',
  standalone: true,
  imports: [],
  templateUrl: './chat-detail-topbar.component.html',
  styleUrl: './chat-detail-topbar.component.scss'
})
export class ChatDetailTopbarComponent {

  @Output() chatControlsPanelSizeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  public chatControlsPanelExtended: boolean = false;

  toggleChatControlsPanel() {
    this.chatControlsPanelExtended = !this.chatControlsPanelExtended;
    this.chatControlsPanelSizeChanged.emit(this.chatControlsPanelExtended);
  }
}
