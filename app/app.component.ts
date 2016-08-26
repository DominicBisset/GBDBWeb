import { Component } from '@angular/core';
import GBGameModels from 'gb-game-models';
import { PlayerListComponent } from "./components/playerList.component";
import { PlayerDetailComponent } from "./components/playerDetail.component";
import { PlayerFilterComponent } from "./components/playerFilter.component";
import { PlayerService } from "./services/player.service";
import { TeamService } from "./services/team.service";

@Component({
    selector: 'my-app',
    template: `
        <h1>Guild Ball Database</h1>
        <player-filter></player-filter>
        <player-list>
        </player-list>
        <player-detail style="float:left">
        </player-detail>`,
    directives: [PlayerListComponent, PlayerDetailComponent, PlayerFilterComponent],
    providers: [PlayerService, TeamService]
})
export class AppComponent {}
