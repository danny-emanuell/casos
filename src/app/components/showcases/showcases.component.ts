import { Component, OnInit } from '@angular/core';
import { DatacasesService } from './../../services/datacases/datacases.service';
import { ICase } from '../../services/datacases.interfaces';
import * as moment from 'moment';

@Component({
  selector: 'app-showcases',
  templateUrl: './showcases.component.html',
  styleUrls: ['./showcases.component.css']
})
export class ShowcasesComponent implements OnInit {

  public cases;

  constructor(private datacase: DatacasesService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.cases =  this.datacase.getCases();
    return this.cases;
  }

}
