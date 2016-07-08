import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import '../rxjs-operators';
import GBGameModels from "gb-game-models";
import { PlayerService } from "../services/player.service";
import { PlaybookComponent } from "./playbook.Component";

@Component({
    selector: 'player-detail',
    template:`
        <div *ngIf="player">
            <h1>{{player.id}}</h1>
            Plays for:
            <ul><li *ngFor="let team of player.playsFor">{{team.name}}</li></ul>
            <playbook [playbook]="player.playbook" [width]="300"></playbook>
        </div>
        <p>{{errorMessage}}</p>
        `,
    styles: [`
        div {
            width:300px;
            height: 600px;
            background-color: red;
            color: darkgrey;
            padding: 25px;
            margin: 30px;
        }
        li{
            display:block;
            background-color:white;
            float:left;
            
        }
    `],
    directives: [PlaybookComponent]
})
export class PlayerDetailComponent {
    
    player: GBGameModels.Player = null;
    errorMessage: string;

    constructor(private playerService: PlayerService) { };

    ngOnInit() {
        this.playerService.activePlayer.subscribe(
            p => this.player = p,
            error => this.errorMessage = <any>error
        );
    }
}
