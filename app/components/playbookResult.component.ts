import { Component, Input } from '@angular/core';
import GBGameModels from "gb-game-models";

@Component({
    selector: '[playbookResult]',
    template: `
        <svg:circle [attr.cx]="(result.col - 0.5) * 100" [attr.cy]="(result.row - 0.5) * 100" [attr.r]="45" stroke="green" stroke-width="1" [attr.fill]="isMomentous ? 'yellow' : 'green'" />
        <svg:text *ngFor="let effect of result.effects; let i = index" [attr.x]="(result.col - 0.75) * 100" [attr.y]="(result.row - (i * 0.25) -0.125) * 100">{{effect.resultType}} {{effect.magnitude}}</text>
        `,
})
export class PlaybookResult {
    @Input() result: GBGameModels.PlaybookResult;
    isMomentous: boolean;
    ngOnInit() {
        this.isMomentous = this.result.effects.find(re => re.resultType === GBGameModels.ResultType.Momentous) !== undefined;
    }
}
