import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ControlsPanelComponent} from "../controls-panel/controls-panel.component";
import {ChatsPanelComponent} from "../chats-panel/chats-panel.component";
import {ChatDetailPanelComponent} from "../chat-detail-panel/chat-detail-panel.component";
import {NgClass, NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {UserModel} from "../../models/user.model";
import {ChatModel} from "../../models/chat-model";
import {ChatDetailControlsPanelComponent} from "../chat-detail-controls-panel/chat-detail-controls-panel.component";

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [
    ControlsPanelComponent,
    ChatsPanelComponent,
    ChatDetailPanelComponent,
    NgClass,
    NgIf,
    ChatDetailControlsPanelComponent
  ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent implements OnInit {

  public messengerControlsExtended: boolean = false;
  public chatDetailControlsExtended: boolean = true;

  public user: UserModel;
  public chatToDisplay: ChatModel;

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
  ) {
  }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      let userId = params.get('userId')!;
      this._userService.getById(userId).subscribe({
        next: (response) => {
          this.user = response;
        },
        error: (error) => {
          console.log("User retrieval failed")
        }
      });
    });
  }

  resizeChatsTabs($event: boolean) {
    this.messengerControlsExtended = $event;
  }

  setChatToDisplay($event: ChatModel) {
    this.chatToDisplay = $event;
  }

  toggleChatDetailControlsPanel($event: boolean) {
    this.chatDetailControlsExtended = $event;
  }
}
