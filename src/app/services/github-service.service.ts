import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubServiceService {
    private username: string;
    private client_id = 'd3a6210eb1d5175ada9b';
    private client_secret = '64023b5b8a06163af476967ca38c89bc3231e518';

    constructor(private _http: HttpClient) {
        console.log('Github Service Ready....');
        this.username = 'manish57';
    }

    getUser() {
        return this._http.get('https://api.github.com/users/'+
        this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret);
    }

    getRepos() {
        return this._http.get('https://api.github.com/users/'+
        this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret);
    }

    updateUser(username:string) {
        this.username = username;
    }
}

