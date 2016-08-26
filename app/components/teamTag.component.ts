import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import GBGameModels from "gb-game-models";

@Component({
    selector: 'team-tag',
    template: `
        <div  (click)="onClick($event)" [ngClass]="{selected: isSelected}">
            <img [src]="team.logoImageUri" /><div *ngIf="full">{{team.name}}</div> 
        </div>
        `,
    styles:[`
        img, div{
            width: 30px;
            height: 30px;
            display: inline;
        }
        div{
            padding-bottom: 7px;
        }
        .selected{
            border: 1px solid red;
        }
        `],

    directives: [NgClass]
})
export class TeamTag {

    @Input() team: GBGameModels.Team;
    @Input() full: boolean;
    @Input() clickable: boolean;
    @Input() toggleable: boolean;

    @Output() teamClicked = new EventEmitter();

    isSelected: boolean;

    onClick(event: Event) {
        this.isSelected = !this.isSelected;
        console.log("Team clicked:", this.team.id);
        this.teamClicked.emit({ team: this.team, selected: this.isSelected });
    };

    

}
                