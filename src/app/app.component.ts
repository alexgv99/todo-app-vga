import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { AF } from '../providers/af';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public isLoggedIn: boolean;

	constructor(public afService: AF, private router: Router) {
		this.afService.af.auth.subscribe(
			auth => {
				if (auth == null) {
					console.log('Not Logged in.');
					this.router.navigate(['login']);
					this.isLoggedIn = false;
				}
				else {
					console.log('Successfully Logged in.');
					this.isLoggedIn = true;
					this.afService.user = auth;
					console.log('user', JSON.stringify(auth, null, '  '));
					// UPDATE: I forgot this at first. Without it when a user is logged in and goes directly to /login
					// the user did not get redirected to the home page.
					this.router.navigate(['']);
				}
			}
		);
	}

	logout() {
		this.isLoggedIn = false;
		this.afService.logout().then(() => {
			this.router.navigate(['login']);
		});
	}

}
