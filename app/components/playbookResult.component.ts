import { Component, Input } from '@angular/core';
import GBGameModels from "gb-game-models";

@Component({
    selector: '[playbookResult]',
    template: `
        <svg:circle cx="50" cy="50" r="45" stroke="darkgrey" stroke-width="1" [attr.fill]="isMomentous ? 'yellow' : 'white'" />
        <svg:text *ngFor="let effect of result.effects; let i = index" text-anchor="middle" [attr.x]="textX(i)" [attr.y]="textY(i)" font-size="35">{{effectText(effect)}}</text>
        `,
})
export class PlaybookResult {
    @Input() result: GBGameModels.PlaybookResult;
    isMomentous: boolean;
    ngOnInit() {
        this.isMomentous = this.result.effects.find(re => re.resultType === GBGameModels.ResultType.Momentous) !== undefined;
    }

    textX(index: number): number{
        let trueCount: number = this.result.effects.length;
        let trueIndex: number = index;
        if (this.isMomentous) {
            trueCount -= 1;
            trueIndex -= 1;
        }
        if (trueCount < 3) {
            return 50;
        }
        else {
            return ((trueIndex % 2) * 25) + 12.5;
        }
    }

    textY(index: number): number {
        let trueCount: number = this.result.effects.length;
        let trueIndex: number = index;
        if (this.isMomentous) {
            trueCount -= 1;
            trueIndex -= 1;
        }
        if (trueCount === 1) {
            return 62;
        }
        else {
            return (Math.floor((trueIndex + 1) / 2)  * 35) + 42;
        }
    }

    effectText(effect: GBGameModels.ResultEffect): string {
        switch (effect.resultType) {
            case GBGameModels.ResultType.Momentous:
                return null;
            case GBGameModels.ResultType.Damage:
                return effect.magnitude.toString();
            case GBGameModels.ResultType.KnockDown:
                return "KD";
            case GBGameModels.ResultType.Tackle:
                return "T";
            case GBGameModels.ResultType.Push:
                return ">".repeat(effect.magnitude as number);
            case GBGameModels.ResultType.Dodge:
                return "<".repeat(effect.magnitude as number);
            case GBGameModels.ResultType.GuildBall:
                return "GB".repeat(effect.magnitude as number);
            default:
                return null;
        }
    }
    
}
