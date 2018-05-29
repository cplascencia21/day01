import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  str: string;
  anotherStr = 'This is another string';
  yetAnotherStr;

  ngOnInit() {
    this.str = 'This is a string';


    // this.anotherStr = 'This is another string';
    // this.anotherStr = 4;

    this.yetAnotherStr = 'Another string';

    this.test();

    this.numberArrayInput([]);
    this.numberArrayInput([5]);
    this.numberArrayInput([5, 10, 15]);
    this.numberArrayInput(['string', 5]);

  }

  test() {
    let name: string = 'Test User';
    let age: number = 30;
    let text: string = `My name is ${name} and I am ${age} years old`;
    console.log(text);
  }

  numberArrayInput(x: number[]) {
    console.log(x);
  }

  anyArrayInput(x: Array<any>) {
    console.log(x);
  }
}
