import { Component } from '@angular/core';
import { AppService } from './app.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]
})
export class AppComponent {

  ngServe() {}
  title = 'fizzBuzz';
  fizzInput:number;
  buzzInput:number;
  loopInput:number;
  fizzBuzzNumber:any;  
  fbResult = [];
  operationComplete = ``
  three:any = 3;

  fizzCount:number = 0;
  buzzCount:number = 0;
  fizzBuzzcount:number = 0;
  luckyCount:number = 0;
  integerCount:number = 0;

  // fizzBuzzInput: any;


  result() {
    if (!this.fizzInput) {
      alert('Fizz input is empty. Please input a number.');
    } else if (!this.buzzInput) {
      alert('Buzz input is empty. Please input a number.'); 
    } else if (!this.loopInput ) {
      alert('Loop input is empty. Please input a number.');
    }

    for (this.fizzBuzzNumber=1; this.fizzBuzzNumber <= this.loopInput; this.fizzBuzzNumber++) {

      if (this.fizzBuzzNumber.toString().match(/3/) != null ) {
        this.fbResult.push('Lucky');
        this.luckyCount++;
      }
        else if (this.fizzBuzzNumber % this.fizzInput == 0 && this.fizzBuzzNumber % this.buzzInput == 0) {
          this.fbResult.push('FizzBuzz');
          this.fizzBuzzcount++;
        }  
        
        else if (this.fizzBuzzNumber % this.fizzInput == 0 ) {
          this.fbResult.push('Fizz');
          this.fizzCount++;
        } 
        
        else if (this.fizzBuzzNumber % this.buzzInput == 0) {
          this.fbResult.push('Buzz');
          this.buzzCount++;
        } 
        
        else {
          this.fbResult.push(this.fizzBuzzNumber);
          this.integerCount++;
      } 
      this.operationComplete = `Operation is complete! \n` +
      `Lucky appeared ${this.luckyCount} times! \n` +
      `Fizz appeared ${this.fizzCount} times! \n` +
      `Buzz appeared ${this.buzzCount} times! \n` +
      `FizzBuzz appeared ${this.fizzBuzzcount} times! \n` +
      `Integer appeared ${this.integerCount} times!`
      ;
    }


  }


  clear() {
    this.fbResult = [];
    this.operationComplete = ``;
    this.loopInput = 0;
    this.fizzInput = 0;
    this.buzzInput = 0;
  }
 }