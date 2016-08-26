import { Component, Input, EventEmitter } from '@angular/core';
import GBGameModels from "gb-game-models";
import { TeamTag } from "./teamTag.component"

@Component({
    selector: 'team-list',
    template: `
            <team-tag *ngFor="let team of teamList" [full]="full" [team]="team" (teamClicked)="onTeamClicked($event)"></team-tag>
        `,
    styles: [`
        team-tag{
            display: inline-block;
        }
        `],
    directives: [TeamTag]
})
export class TeamList {
    @Input() teamList: Array<GBGameModels.Team>;
    @Input() full: boolean;

    onTeamClicked(options: any) {
        console.log("Team selected", options);
    }
}

