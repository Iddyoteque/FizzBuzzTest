import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  title = 'fizzBuzz';
  fizzInput:number;
  buzzInput:number;
  loopInput:number;
  fizzBuzzNumber:any;  
  fbResult = [];
  operationComplete = ``
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
        if (this.fizzBuzzNumber % this.fizzInput == 0 && this.fizzBuzzNumber % this.buzzInput == 0) {
          this.fbResult.push('FizzBuzz');
        }  
        
        else if (this.fizzBuzzNumber % this.fizzInput == 0 ) {
          this.fbResult.push('Fizz');
        } 
        
        else if (this.fizzBuzzNumber % this.buzzInput == 0) {
          this.fbResult.push('Buzz');
        } 
        
        else {
          this.fbResult.push(this.fizzBuzzNumber);
      } 
      this.operationComplete = `Operation is complete!`;
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

  
