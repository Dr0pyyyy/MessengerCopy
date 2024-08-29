import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JsonPipe, NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {AppSectionsTypes} from "../../enum/app-sections-types";
import {UserModel} from "../../models/user.model";
import {ApplicationDataService} from "../../services/application-data.service";

@Component({
  selector: 'app-controls-panel',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    NgIf,
    JsonPipe
  ],
  templateUrl: './controls-panel.component.html',
  styleUrl: './controls-panel.component.scss'
})
export class ControlsPanelComponent implements OnInit {

  @Output() controlsExtended: EventEmitter<boolean> = new EventEmitter<boolean>();

  public user: UserModel;
  public sectionType: AppSectionsTypes;
  public areControlsExtended: boolean = false;

  protected readonly AppSectionsTypes = AppSectionsTypes;

  constructor(private _applicationDataService: ApplicationDataService) {
  }

  ngOnInit() {
    this.sectionType = AppSectionsTypes.chats;
    this.user = this._applicationDataService.getUser();
  }

  changeSection(sectionsType: AppSectionsTypes) {
    this.sectionType = sectionsType;
  }

  resizeControls() {
    this.areControlsExtended = !this.areControlsExtended;
    this.controlsExtended.emit(this.areControlsExtended);
  }
}
