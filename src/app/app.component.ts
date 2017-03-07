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
	user: string;

	constructor(public afService: AF, private router: Router) {
		this.afService.af.auth.subscribe(
			auth => {
				if (auth == null) {
					this.router.navigate(['login']);
					this.isLoggedIn = false;
				}
				else {
					this.isLoggedIn = true;
					this.afService.user = auth;
					this.user = auth.auth.displayName;
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
