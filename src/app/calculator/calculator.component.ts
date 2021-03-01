import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  screenValue = '0';
  firstValue = '';
  history = '';

  calculate(){
    if (!this.history.includes('=')) {
      this.history = this.history + this.screenValue + '=';
      this.screenValue = eval(this.firstValue + this.screenValue) + '';
      this.firstValue = '';
    }
    else {
      this.history = ''
    }
  }

  clearScreen(value: string){
    if ( value == 'ce' ) {
      this.screenValue = '0'
      this.history = ''
    }
    if (value =='c' && this.history.includes('=')) {
      this.screenValue = '0'
      this.history = ''
    }
    if (value =='c' && !this.history.includes('=')) {
      this.screenValue = '0'
    }
  }

  togglePlusMinus(){
    if ( this.screenValue[0] !== '-') {
      this.screenValue = '-' + this.screenValue
    }
    else {
      this.screenValue = this.screenValue.substring(1)
    }
  }

  deleteLastDigit(){
    if ( this.history.includes('=')) this.history =''
    else {
      this.screenValue = this.screenValue.substring(0, this.screenValue.length-1)
      if (this.screenValue.length === 0) this.screenValue = '0'
    }
  }
  
  setNumber(value: string) {

    if (this.history.includes('=')) {
      this.screenValue = ''
      this.history = ''
      this.firstValue = ''
      return this.screenValue = this.screenValue + value
    }

    this.screenValue == '0' || this.screenValue =='-0' ? this.screenValue = value : this.screenValue = this.screenValue + value
  }

  setMathSymbol(value: string) {

    if ( this.firstValue === '') {
      this.firstValue = this.screenValue + value;
      this.history = this.firstValue
      this.screenValue = '0'
    }


  }

  setDot(value: string){
    if ( !this.screenValue.includes('.')) {
      if ( this.screenValue[0] === '0') {
        this.screenValue = '0'
        this.screenValue = this.screenValue + value
      }
      else this.screenValue = this.screenValue + value
    }
  }



}
