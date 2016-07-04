import { Component, Input, Output, EventEmitter } from '@angular/core';
import GBGameModels from "gb-game-models";

@Component({
    selector: 'player-preview',
    template: '<div *ngIf="player" (click)="loadDetails($event)">{{player.title}} - {{player.id}}</div>',
    styles: [
        `div {
            width:300px;
            cursor: pointer;
            background-color: lightgrey;
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
