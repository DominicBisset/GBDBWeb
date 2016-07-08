import { Component} from '@angular/core';
import GBGameModels from "gb-game-models";
import { PlayerPreviewComponent } from "./playerPreview.component";
import { PlayerService } from "../services/player.service";

@Component({
    selector: 'player-list',
    template: `
        <player-preview
            *ngFor="let player of players"
            [player]="player"
            (playerSelected)="onPlayerSelected($event)"
            >
        </player-preview>
        <div>{{errorMessage}}</div>
    `,
    directives: [PlayerPreviewComponent]
})
export class PlayerListComponent {

    players: Array<GBGameModels.Player> = [];
    errorMessage: string = "";

    constructor(private playerService: PlayerService) { }

    ngOnInit(){
        this.playerService
            .getList()
            .subscribe(
                players => this.players = players,
                error => this.errorMessage = <any>error
            );
    }

    onPlayerSelected(player: GBGameModels.Player) {
        console.log("List detected player selected:", player.id);
        this.playerService.activate(player.id);
    }

}
