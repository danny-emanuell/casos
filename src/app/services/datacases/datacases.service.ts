import { Injectable } from '@angular/core';
import { ICase } from './../datacases.interfaces';
import * as localStorage from 'localstoragedb';

@Injectable()
export class DatacasesService {

  Cases: ICase[] = [];

  private tables = {
    cases: {
      nameTable: 'cases',
      nameColumns: [
        '_caseDate',
        '_caseDescription',
        '_caseStatus',
        '_customerID',
        '_customerName',
        '_noOrder',
        '_tracking'
      ]
    }
  }

  public nameDatabase = 'caseDB';

  private casesDB = new localStorage( this.nameDatabase , localStorage );

  constructor() {
    this.createTable();
    this.getCases();
   }

  private createTable (){
    const cases = this.casesDB;
    if( cases.isNew() ) {
      cases.createTable( this.tables.cases.nameTable , this.tables.cases.nameColumns );
      cases.commit();
    }
  }

  addCase( ncase: ICase ){

    const cases = this.casesDB;

    return new Promise(( resolve , reject ) => {

      try {
        cases.insert( this.tables.cases.nameTable , ncase );
        cases.commit();
        this.Cases.unshift( ncase );
        resolve({
          code: 200,
          message: 'Se guardo correctamente'
        });
      } catch( error ) {
        reject( {
          code: 501,
          message: 'Error al guardar la información'
        });
      }
  });

  }

  getCases() {
    const cases = this.casesDB;
    return this.Cases = cases.queryAll( this.tables.cases.nameTable );
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
