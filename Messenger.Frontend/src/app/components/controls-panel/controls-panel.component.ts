import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JsonPipe, NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {AppSectionsTypes} from "../../enum/app-sections-types";
import {UserModel} from "../../models/user.model";

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

  @Input() user: UserModel | null;

  @Output() controlsExtended: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected readonly AppSectionsTypes = AppSectionsTypes;

  public  sectionType: AppSectionsTypes;
  public areControlsExtended: boolean = false;

  ngOnInit() {
    this.sectionType = AppSectionsTypes.chats;
  }

  changeSection(sectionsType: AppSectionsTypes) {
    this.sectionType = sectionsType;
  }

  resizeControls() {
    this.areControlsExtended = !this.areControlsExtended;
    this.controlsExtended.emit(this.areControlsExtended);
  }
}
