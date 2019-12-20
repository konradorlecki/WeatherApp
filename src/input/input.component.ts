import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  public data1: string = name;
  @Input() placeholder: string;
  @Input() name: string;
  @Input() type: string;
  @Output() titleChanged = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  sendDataToParent() {
    this.titleChanged.emit(this.data1);
  }
}
