import { Injectable } from '@angular/core';
import { ICase } from './../datacases.interfaces';

@Injectable()
export class DatacasesService {

  Cases: ICase[] = [];

  constructor() { }

  addCase( ncase: ICase ){
    console.log(ncase);
    return new Promise(( resolve , reject ) => {
      if( this.Cases.unshift(ncase) ) {
        resolve({
          code: 200,
          message: 'Se guardo correctamente'
        });
      } else {
        reject( {
          code: 501,
          message: 'Error al guardar la información'
        });
      }
    })
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
