import { Injectable } from '@angular/core';
import { ICase } from './../datacases.interfaces';

@Injectable()
export class DatacasesService {

  Cases: ICase[];

  constructor() { }

  addCase( ncase: ICase ){
    this.Cases.unshift( ncase );
  }

  getCases(){
    return this.Cases;
  }

  deleteCase( caseToDelete: ICase ) {
    for ( let i = 0; i < this.Cases.length; i++) {
      if( caseToDelete == this.Cases[i] ) {
        this.Cases.splice(i, 1);
      }
    }
  }


};
