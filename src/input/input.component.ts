import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  public inputName: string = name;
  @Input() public placeholder: string;
  @Input() public name: string;
  @Input() public type: string;
  @Output() private titleChanged = new EventEmitter<string>();

  constructor() {
  }s

  ngOnInit() {
  }

  sendDataToParent() {
    this.titleChanged.emit(this.inputName);
  }
}
