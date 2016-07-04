import GBGameModels from 'gb-game-models';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import '../rxjs-operators';

@Injectable()
export class PlayerService {

    constructor(private http: Http) { }

    private playersUri: string = "http://localhost:3002/player";

    getList(): Observable<Array<GBGameModels.Player>> {

        return this.http.get(this.playersUri)
            .map(this.extractData)
            .catch(this.handleError);
    }

    get(id:Number): Observable<GBGameModels.Player> {
        return this.http.get(this.playersUri + "/" + id.toString())
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
