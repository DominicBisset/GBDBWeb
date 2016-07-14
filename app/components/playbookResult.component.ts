import { Component, Input } from '@angular/core';
import GBGameModels from "gb-game-models";

@Component({
    selector: '[playbookResult]',
    template: `
        <svg:circle cx="50" cy="50" r="45" stroke="green" stroke-width="1" [attr.fill]="isMomentous ? 'green' : 'yellow'" />
        <svg:text *ngFor="let effect of result.effects; let i = index" [attr.x]="25" [attr.y]="((i + 1) * 25) + 10" font-size="35">{{effectText(effect)}}</text>
        `,
})
export class PlaybookResult {
    @Input() result: GBGameModels.PlaybookResult;
    isMomentous: boolean;
    ngOnInit() {
        this.isMomentous = this.result.effects.find(re => re.resultType === GBGameModels.ResultType.Momentous) !== undefined;
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
