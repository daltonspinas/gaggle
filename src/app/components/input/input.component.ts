import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string = ""
  @Input() val: string = ""
  @Input() errorMessage: string = ""
  @Input() valid: boolean = true
  @Input() hideable: boolean = false;


  hideInput: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(){
    this.hideInput = !this.hideInput
  }

  resetVal() {
    this.val = ""
  }

}
