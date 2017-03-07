import { FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AF {

	public messages: FirebaseListObservable<any>;
	public users: FirebaseListObservable<any>;

	public user: any;

	constructor(public af: AngularFire) {
		this.messages = this.af.database.list('messages');
	}

	loginWith(provider: AuthProviders): firebase.Promise<FirebaseAuthState> {
		return this.af.auth.login({
			provider: provider,
			method: AuthMethods.Redirect
		});
	}

	logout(): Promise<void> {
		this.user = undefined;
		return this.af.auth.logout();
	}

	sendMessage(text) {
		const obj = {
			message: text,
			displayName: this.user.auth.displayName,
			email: this.user.auth.providerData.email || this.user.auth.email,
			timestamp: Date.now()
		};
		this.messages.push(obj);
	}

}
