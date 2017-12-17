import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { ICase } from './../datacases.interfaces';
import { LocalstorageService } from 'app/services/localstorage/localstorage.service';
import { forEach } from '@angular/router/src/utils/collection';


@Injectable()
export class DatacasesService {

  Cases: ICase[] = [];

  constructor( private localStorage: LocalstorageService ) {
    this.getCases();
  }

  public insertCase( ncase ){
    this.localStorage.insertData( ncase )
      .then( rs => {
          this.Cases.unshift( ncase );
      } )
      .catch( error => {
        console.log( error );
      });
  }

  public getCases() {
    this.localStorage.getData()
      .then( cases => {
        this.Cases = cases['message'];
      })
      .catch( error => {
        console.log( error );
      })
  }

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
