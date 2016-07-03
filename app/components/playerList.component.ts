import { Component } from '@angular/core';
import GBGameModels from "gb-game-models";
import { PlayerService } from "../services/player.service";

@Component({
    selector: 'player-list',
    template: '<div *ngFor="let player of players">{{player.title}}</div>'
})
export class PlayerListComponent {
    players: any = [];
    constructor(playerService: PlayerService) {
        playerService.getList().then(players => this.players = players);
    }

}
