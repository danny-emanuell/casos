import { Injectable } from '@angular/core';
import { ICase } from './../datacases.interfaces';


@Injectable()
export class DatacasesService {

  Cases: ICase[] = [];

  constructor() {}

  /*

  deleteCase( caseToDelete: ICase ) {
    for ( let i = 0; i < this.Cases.length; i++) {
      if( caseToDelete == this.Cases[i] ) {
        this.Cases.splice(i, 1);
      }
    }
  }

*/
};
