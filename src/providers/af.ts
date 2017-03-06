import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AF {

	user: any;

	constructor(public af: AngularFire) { }

	loginWith(provider: AuthProviders): firebase.Promise<FirebaseAuthState> {
		return this.af.auth.login({
			provider: provider,
			method: AuthMethods.Redirect,
		});
	}

	logout(): Promise<void> {
		this.user = undefined;
		return this.af.auth.logout();
	}

}
