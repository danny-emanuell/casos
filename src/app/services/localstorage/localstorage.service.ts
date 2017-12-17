import { Injectable } from '@angular/core';
import * as localStorageDB from 'localstoragedb';

@Injectable()
export class LocalstorageService {

  private tables = {
    cases: {
      nameTable: 'cases',
      nameColumns: [
        '_idcase', 
        'date',
        '_user',
        '_idCaese',
        'number',
        '_noOrder',
        '_customerName',
        '_customerID',
        '_caseDate',
        'number',
        '_caseStatus',
        '_caseDescription',
        '_tracking'
      ]
    }
  }

  private cases = new localStorageDB( 'caseLib' , localStorage );

  constructor() {
    this.createTable();
   }

  private createTable() {
    //Esta función crea la tabla en el localStorage si no existe.
    if( this.cases.isNew() ) {
      this.cases.createTable( this.tables.cases.nameTable , this.tables.cases.nameColumns );
      this.cases.commit();
    }
  }

  insertData( ncase ) {
    return new Promise((resolve, reject) => {
      try {
        this.cases.insert( this.tables.cases.nameTable , ncase )
        this.cases.commit();
        resolve({
          code: 200,
          message: 'successfully'
        })
      } catch(error) {
        reject({
          code: 501,
          message: error
        })
      }
    });
  };

  getData() {
    return new Promise( (resolve, reject) => {
      try {
        resolve({
          code: 200,
          message: this.cases.queryAll( this.tables.cases.nameTable )
        })
      } catch( error ) {
        reject({
          code: 501,
          message: error
        })
      }
    })
  }


}
