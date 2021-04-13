import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

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

  @Output() valChange = new EventEmitter();


  hideInput: boolean = false;
  showError: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  toggleShow() {
    this.hideInput = !this.hideInput
  }

  resetVal() {
    this.val = ""
    this.valChange.emit(this.val)
  }
  
  updateVal(){
    this.valChange.emit(this.val)
  }

  resetError(show: boolean){
    this.showError = show;
  }
}
