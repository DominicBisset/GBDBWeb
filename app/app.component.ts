import { Component } from '@angular/core';
import GBGameModels from 'gb-game-models';
import { PlayerListComponent } from "./components/playerList.component";
import { PlayerDetailComponent } from "./components/playerDetail.component";
import { PlayerService } from "./services/player.service";

@Component({
    selector: 'my-app',
    template: `
        <h1>Guild Ball Database</h1>
        <player-list style="float:left">
        </player-list>
        <player-detail style="float:left">
        </player-detail>`,
    directives: [PlayerListComponent, PlayerDetailComponent],
    providers: [PlayerService]
})
export class AppComponent {}
