import { Component, Input, Output, EventEmitter } from '@angular/core';
import GBGameModels from "gb-game-models";

@Component({
    selector: 'player-detail',
    template: '<div *ngIf="player">{{player.title}} - {{player.id}}</div>',
    styles: [
        `div {
            width:300px;
            height: 600px;
            cursor: pointer;
            background-color: red;
            color: darkgrey;
            padding: 25px;
            margin: 30px;
        }`]
})
export class PlayerDetailComponent {
    @Input() player: GBGameModels.Player;
}
