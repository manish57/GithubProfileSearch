import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../../services/github-service.service'

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {

  user: any;
    repos: any;
    username: string;

    constructor(private _githubservice: GithubServiceService) {
        this.user = false;
    }

    searchUser() {
        this._githubservice.updateUser(this.username);

        this._githubservice.getUser().subscribe(user => {
            this.user = user;
        });

        this._githubservice.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }

    ngOnInit() {
    }
}

