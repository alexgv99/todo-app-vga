import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProviders } from 'angularfire2/auth';

import { AF } from '../../providers/af';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

	private _provider: AuthProviders;

	constructor(private afService: AF, private router: Router) { }

	ngOnInit() {
	}

	private _login() {
		this.afService.loginWith(this._provider).then((data) => {
			this.router.navigate(['']);
		});
	}

	public loginWithGoogle() {
		this._provider = AuthProviders.Google;
		this._login();
	}

	public loginWithFacebook() {
		this._provider = AuthProviders.Facebook;
		this._login();
	}

	public loginWithTwitter() {
		this._provider = AuthProviders.Twitter;
		this._login();
	}

}
