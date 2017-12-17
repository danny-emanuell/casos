import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICase } from '../../../services/datacases.interfaces';
import { DatacasesService } from './../../../services/datacases/datacases.service';

@Component({
  selector: 'app-addcase',
  templateUrl: './addcase.component.html',
  styleUrls: ['./addcase.component.css']
})

export class AddcaseComponent implements OnInit {

  public customerid: string;
  public customername: string;
  public noOrder: string;
  public casedescription: string;

  constructor( public datacase: DatacasesService ) { }

  ngOnInit() {}

  addCase() {
    const ncase: ICase = {
      _noOrder: ( this.noOrder === undefined ) ? '------------' : this.noOrder ,
      _customerName: this.customername,
      _customerID: this.customerid,
      _caseDate: Date.now(),
      _caseStatus: this.datacase.statusCases[0],
      _caseDescription: this.casedescription,
      _tracking: []
    }

    this.datacase.insertCase( ncase );

      this.noOrder = '';
      this.customername = '';
      this.customerid = '';
      this.casedescription = '';
  }

}
