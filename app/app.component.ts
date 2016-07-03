import { Component } from '@angular/core';
import { PlayerListComponent } from "./components/playerList.component";
import { PlayerService } from "./services/player.service";

@Component({
    selector: 'my-app',
    template: '<h1>Guild Ball Database</h1><player-list></player-list>',
    directives: [PlayerListComponent],
    providers: [PlayerService]
})
export class AppComponent { }
