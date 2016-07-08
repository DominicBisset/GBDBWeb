import { Component, Input } from '@angular/core';
import GBGameModels from "gb-game-models";

@Component({
    selector: 'playbook',
    template: `
        <svg [style.width]="width" [style.height]="width / 4">
            <circle *ngFor="let result of playbook" [attr.cx]="(result.col - 0.5) * (width / 8)" [attr.cy]="(result.row - 0.5) * (width / 8)" [attr.r]="width/16" stroke="green" stroke-width="1" [attr.fill]="yellow" />
            <text *ngFor="let result of playbook" [attr.x]="(result.col - 0.75) * (width / 8)" [attr.y]="(result.row - 0.25) * (width / 8)">{{result.resultType}} {{result.magnitude}}</text>
        </svg>
        `,
})
export class PlaybookComponent {
    @Input() width: Number;
    @Input() playbook: Array<GBGameModels.PlaybookResult>;
    
}
