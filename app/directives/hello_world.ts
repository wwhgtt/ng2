import { Component } from '@angular/core';
@Component({
  selector: 'hello-world',
  template: '<h1>hello {{name}} </h1>\
  			<button class="btn btn-success" (click)="changeName()">name</button>\
  			<h1>是{{work}}</h1>'
})
export class helloWorld {
	constructor(){
		this.names = ['武文海','高添桃','高文生','诸葛亮','刘备','潘金莲','西门庆'];
		this.works = ['诗人','作家','商人','军师','皇帝','妇女','官人'];
		this.changeName(); 
	}
	changeName(){
		var id = parseInt(Math.random()*this.names.length);
		var idx = parseInt(Math.random()*this.works.length);
		this.name = this.names[id];
		this.work = this.works[idx];
	}
}