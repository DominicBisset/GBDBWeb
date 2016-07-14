import { Component, Input } from '@angular/core';
import GBGameModels from "gb-game-models";
import {PlaybookResult} from "./playbookResult.component";

@Component({
    selector: 'playbook',
    template: `
        <svg [style.width]="width" viewBox="0 0 800 200">
            <g playbookResult *ngFor="let result of playbook" [result]="result" [attr.transform]="'translate(' + (result.col - 1) * 100 + ',' + (result.row -1) * 100 + ')'"></g>
        </svg>
        `,
    directives: [PlaybookResult]
})
export class PlaybookComponent {
    @Input() width: Number;
    @Input() playbook: Array<GBGameModels.PlaybookResult>;
    
}
