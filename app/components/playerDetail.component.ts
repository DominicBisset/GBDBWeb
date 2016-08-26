import { Component, Input, Output } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import '../rxjs-operators';
import GBGameModels from "gb-game-models";
import { PlayerService } from "../services/player.service";
import { PlaybookComponent } from "./playbook.component";
import { TeamList } from "./teamList.component";

@Component({
    selector: 'player-detail',
    template:`
        <div *ngIf="player">
            <header><h1>{{player.character.name}}</h1><p>{{player.title}}</p></header>
            Plays for:
            <team-list [teamList]="player.playsFor" [full]="false"></team-list>
            <playbook [playbook]="player.playbook"></playbook>
        </div>
        <p>{{errorMessage}}</p>
        `,
    styles: [`
        div {
            width:300px;
            height: 600px;
            background-color: lightgrey;
            color: darkgrey;
            padding: 25px;
            margin: 30px;
        }
        header>*{
            margin: 0px;
        }
    `],
    directives: [TeamList, PlaybookComponent]
})
export class PlayerDetailComponent {
    
    player: GBGameModels.Player = null;
    errorMessage: string;

    constructor(private playerService: PlayerService) { };

    ngOnInit() {
        this.playerService.activePlayer.subscribe(
            p => {
                this.player = p;
            },
            error => this.errorMessage = <any>error
        );
    }

    titles(p: GBGameModels.Player): Array<string> {
        return p.title.split("|");
    }
}
