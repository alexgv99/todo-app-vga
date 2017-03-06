import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AlertModule } from 'ng2-bootstrap';

import { AF } from '../providers/af';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const firebaseConfig = {
	apiKey: 'AIzaSyCDTUwaYn6bwnyIJcOv4oBYXTpM6GJydFA',
	authDomain: 'todoapp-6e02d.firebaseapp.com',
	databaseURL: 'https://todoapp-6e02d.firebaseio.com',
	storageBucket: 'todoapp-6e02d.appspot.com',
	messagingSenderId: '951310883289'
};

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomePageComponent },
	{ path: 'login', component: LoginPageComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		LoginPageComponent,
		HomePageComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(routes),
		AngularFireModule.initializeApp(firebaseConfig),
		AlertModule.forRoot()
	],
	providers: [AF],
	bootstrap: [AppComponent]
})
export class AppModule { }
