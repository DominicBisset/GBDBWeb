import GBGameModels from 'gb-game-models';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import '../rxjs-operators';

@Injectable()
export class PlayerService {

    constructor(private http: Http) { }

    private playersUri: string = "http://localhost:3002/player";

    getList(): Promise<Array<GBGameModels.Player>> {

        return this.http.get(this.playersUri)
            .toPromise()
            .then(function (response:any) {
                console.log("Got data:", JSON.stringify(response.json()));
                return response.json();
            })
            .catch(this.handleError);
    }

    get(id:Number): Promise<GBGameModels.Player> {

        return this.http.get(this.playersUri + "/" + id.toString())
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
