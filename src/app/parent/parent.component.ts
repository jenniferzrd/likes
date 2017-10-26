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
	like : boolean;

	click = this.iconClass;

	constructor() { 

}

	ngOnInit() {
	}

iconClicked2(event) {
	event.target.classList.add('active'); // To ADD
  event.target.classList.toggle('inactive'); // To toggle
}

}