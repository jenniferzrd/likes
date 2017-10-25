import { Component, OnInit } from '@angular/core';

interface iconClass {

}
@Component({
	selector: 'app-parent',
	templateUrl: './parent.component.html',
	styleUrls: ['./parent.component.css']
})


export class ParentComponent implements OnInit {

	iconClass : string;

	constructor() { 

}

	ngOnInit() {
	}

	iconClicked() : void {
		
		this.iconClass = "active";	

/*	if () {
	this.iconClass = "active"
	} else {
			this.iconClass = "inactive";
		};*/
	};

}
