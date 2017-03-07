import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit, ViewChild } from '@angular/core';

import { AF } from '../../providers/af';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

	public newMessage: string;
	messages: any[];
	@ViewChild('message') domMessage: any;

	constructor(public afService: AF) { }

	ngOnInit() {
		this.afService.messages.subscribe(m => {
			m.sort((i1, i2) => {
				return i1.timestamp > i2.timestamp ? -1 : 1;
			});
			this.messages = m;
			this.domMessage.nativeElement.focus();
		});
	}

	sendMessage() {
		this.afService.sendMessage(this.newMessage);
		this.newMessage = '';
		this.domMessage.nativeElement.focus();
	}

	isYou(email) {
		const emailLogado = this.afService.user.auth.providerData.email || this.afService.user.auth.email;
		return email !== emailLogado;
	}

	isMe(email) {
		return !this.isYou(email);
	}

}
