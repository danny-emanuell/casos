import { Component, OnInit } from '@angular/core';
import { ICase } from '../../../services/datacases.interfaces';

@Component({
  selector: 'app-addcase',
  templateUrl: './addcase.component.html',
  styleUrls: ['./addcase.component.css']
})
export class AddcaseComponent implements OnInit {

  _case: ICase;

  constructor() { }

  ngOnInit() {
  }

  addCase(Case: ICase) {
    console.log( Case );
  }

}
