import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  buttonIsClicked: boolean = false;
  searchImageUrl: string = 'assets/images/nojo.jpg';
  randomNumber: number = 0;
  playerMessage: string = '';
  baseMessage: string = 'Oh, a Pale é do ';
  goncaloPaleCounter: number = 0;
  diogoPaleCounter: number = 0;
  danielPaleCounter: number = 0;
  damasPaleCounter: number = 0;
  totalPaleCounter: string = '';

  ngOnInit(): void {
  }

  handleButtonClick() {
    this.buttonIsClicked = true;
    this.changeUrl();
    this.printTotalPale();
  }

  changeUrl() {
    this.paleHolder();
    //this.searchImageUrl = 'assets/images/' + this.randomNumber + '.jpg';
    this.searchImageUrl = 'https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg';
    
    this.buildMessage(this.randomNumber);
    this.individualPaleCounter(this.randomNumber);
  }
  
  individualPaleCounter(number: number) {
    switch (number) {
      case 1:
        this.goncaloPaleCounter++;
        return;
      case 2:
        this.diogoPaleCounter++;
        return;
      case 3:
        this.danielPaleCounter++;
        return;
      case 4:
        this.damasPaleCounter++;
        return;
      default:
        console.log('Something went error: Server Error!');
        return
    }
  }

  paleHolder() {
    this.randomNumber = this.codeResolver(Math.floor(Math.random() * 6) + 1);
  }

  codeResolver(number: number): number{
    if ( number % 2 == 0 ) {
      return 1;
    } else if ( number == 1 ) {
      return 2;
    } else if ( number == 3 ) {
      return 3;
    } else if ( number == 5 ) {
      return 4;
    } else {
      return 1;
    }
  }

  buildMessage(number: number) {
    switch (number) {
      case 1:
        this.playerMessage = this.baseMessage + 'Gonpale!';
        return;
      case 2:
        this.playerMessage = this.baseMessage + 'Diag!';
        return;
      case 3:
        this.playerMessage = this.baseMessage + 'Cygan!';
        return;
      case 4:
        this.playerMessage = this.baseMessage + 'Checkers!';
        return;
      default:
        this.playerMessage = 'Something went error: Server Error!';
        return
    }
  }

  printTotalPale() {
    this.totalPaleCounter = 'Pale King Gonçale pale counter: ' + this.goncaloPaleCounter +
                            ' ||| Diag pale counter: ' + this.diogoPaleCounter +
                            ' ||| Cygan pale counter: ' + this.danielPaleCounter +
                            ' ||| Checkers pale counter: ' + this.damasPaleCounter;
  }
}
