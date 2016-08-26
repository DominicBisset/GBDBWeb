import { Component, Input, Output, EventEmitter } from '@angular/core';
import GBGameModels from "gb-game-models";

@Component({
    selector: 'player-preview',
    template: `
            <div *ngIf="player" (click)="loadDetails($event)" [style.background-image]="'url(../img/' + player.id + '.png)'">
                {{player.character.name}} <small>{{player.title}}</small>
            </div>
`,
    styles: [
        `div {
            width:300px;
            cursor: pointer;
            background-color: lightgray;
            background-size: contain;
            background-position: right center;
            background-repeat: no-repeat;
            color: darkgrey;
            padding: 25px;
            margin: 30px;
        }`]
})
export class PlayerPreviewComponent {
    @Input() player: GBGameModels.Player;
    @Output() playerSelected = new EventEmitter();
    loadDetails(event: Event) {
        console.log("Player clicked:", this.player.id);
        this.playerSelected.emit(this.player);
    };
}
