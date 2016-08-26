import { Component } from '@angular/core';
import GBGameModels from "gb-game-models";
import { TeamList } from "./teamList.component";
import { TeamService } from "../services/team.service";
import { PlayerService } from "../services/player.service";

@Component({
    selector: 'player-filter',
    template: `
        <team-list [teamList]="teams" [full]="true"></team-list>
    `,
    directives: [TeamList]
})
export class PlayerFilterComponent {
    teams: Array<GBGameModels.Team> = [];
    errorMessage: string = "";

    constructor(private teamService: TeamService, private playerService: PlayerService) { }

    ngOnInit(){
        this.teamService
            .getList()
            .subscribe(
                teams => this.teams = teams,
                error => this.errorMessage = <any>error
            );
    }
}
