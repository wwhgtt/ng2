import { Component } from '@angular/core';
import { helloWorld } from './directives/hello_world';
@Component({
  selector: 'my-app',
  directives: [helloWorld],
  templateUrl: './app/template/hello.html'
})
export class AppComponent {
	constructor(){
		
	}
}
