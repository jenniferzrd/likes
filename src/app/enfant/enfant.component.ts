import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


export class Characters {
  name: string;
}


@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {


private apiUrl = 'http://hp-api.herokuapp.com/api/characters';

  datas: any =[];

  constructor(private http: Http) {
  	console.log('Test fonctionnement API');
  	this.getData();
  	this.getCharacters();
  }

  getData() {
  	return this.http.get(this.apiUrl).map((res: Response) => res.json())
  }

  getCharacters() {
  	this.getData().subscribe(datas => {
  		console.log(datas);
  		this.datas = datas;
  	})
  }

  
  ngOnInit() {
  }

}
