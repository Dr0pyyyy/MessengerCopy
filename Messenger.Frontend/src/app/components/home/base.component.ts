import {Component, OnInit} from '@angular/core';
import {ControlsPanelComponent} from "../controls-panel/controls-panel.component";
import {ChatsPanelComponent} from "../chats-panel/chats-panel.component";
import {ChatDetailPanelComponent} from "../chat-detail-panel/chat-detail-panel.component";
import {NgClass} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ControlsPanelComponent,
    ChatsPanelComponent,
    ChatDetailPanelComponent,
    NgClass
  ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent implements OnInit {

  public areControlsExtended: boolean = false;
  public user: UserModel;

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

  resizeTabs($event: boolean) {
    this.areControlsExtended = $event;
  }
}
