import { Component, OnInit } from '@angular/core';

@Component({
	// selector: '[app-servers]',
	// selector: '.app-servers',
	selector: 'app-servers',
	// template: ` <app-server></app-server>
	// 	<app-server></app-server>`,
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer: boolean = false;
	serverCreationStatus = 'No server was created!';
	serverName: string = 'testing';
	serverCreated: boolean = false;
	servers: string[] = ['Tesetserver', 'Testserver 2'];

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000);
	}

	ngOnInit(): void {}

	onCreateServer() {
		this.serverCreated = true;
		this.servers.push(this.serverName);
		this.serverCreationStatus = 'Server was created!  Name is ' + this.serverName;
	}

	// NOTE: Used by commented out code
	onUpdateServerName(event: any) {
		this.serverName = (<HTMLInputElement>event.target).value;
	}
}
