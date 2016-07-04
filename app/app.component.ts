import { Component } from '@angular/core';
import GBGameModels from 'gb-game-models';
import { PlayerListComponent } from "./components/playerList.component";
import { PlayerDetailComponent } from "./components/playerDetail.component";
import { PlayerService } from "./services/player.service";

@Component({
    selector: 'my-app',
    template: `
        <h1>Guild Ball Database</h1>
        <player-list (playerSelected) = "onPlayerSelected($event)" style="float:left">
        </player-list>
        <player-detail [player]="selectedPlayer" style="float:left">
        </player-detail>`,
    directives: [PlayerListComponent, PlayerDetailComponent],
    providers: [PlayerService]
})
export class AppComponent {
    selectedPlayer: GBGameModels.Player;

    onPlayerSelected(player: GBGameModels.Player) {
        console.log("App detected player selected:", player.id);
        this.selectedPlayer = player;
    }

}
