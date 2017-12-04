import { Injectable } from '@angular/core';
import * as localStorage from 'localstoragedb';

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

  private casesDB = new localStorage( 'caseDB', localStorage );

  constructor() { }

  private createTable() {
    const cases = this.casesDB;
    if( cases.isNew() ) {
      cases.createTable( this.tables.cases.nameTable , this.tables.cases.nameColumns );
      cases.commit();
    }
  }

  insertData( data ) {
    const cases = this.casesDB;
    cases.insert( this.tables.cases.nameTable , data );
    cases.commit();
  }

  getData(){
    const cases = this.casesDB;
    return cases.queryAll( this.tables.cases.nameTable );
  }

}
