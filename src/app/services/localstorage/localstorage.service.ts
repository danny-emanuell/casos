import { Injectable } from '@angular/core';
import * as localStorageDB from 'localstoragedb';

@Injectable()
export class LocalstorageService {

  private tables = {
    cases: {
      nameTable: 'cases',
      nameColumns:[
        '_user',
        '_noOrder',
        '_customerName',
        '_customerID',
        '_caseDate',
        '_caseStatus',
        '_caseDescription',
        '_tracking'
      ]
    }
  }

  statusCases = ['INICIALIZADO', 'EN PROCESO', 'FINALIZADO'];

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

  public insertData( ncase ) {
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

  public updateDataTrack( idcase, dataToUpdate ) {
    const statusCase = this.statusCases;
    return new Promise( (resolve, reject) => {
      this.cases.update( this.tables.cases.nameTable , { _caseDate: idcase }, function( row ) {
       try {
          if ( row._caseStatus !== statusCase[0]  ) {
            row._tracking.push( dataToUpdate );
          } else if ( row._caseStatus === statusCase[0] ) {
            row._caseStatus = statusCase[1];
            row._tracking.push( dataToUpdate );
          } else if ( row._caseStatus === statusCase[2] ) {
            resolve({
              code: 404,
              message: 'Ya no puedes ingresar mas información ya que el caso esta cerrado.'
            });
          }

          resolve({
            code: 200,
            message: 'alright'
          });
          return row;
       } catch ( error ) {
         reject({
           code: 501,
           message: error
         })
       }

      } );
      this.cases.commit();
    } );
  }

  public getData() {
    return new Promise( (resolve, reject) => {
      try {
        resolve({
          code: 200,
          message: this.cases.queryAll( this.tables.cases.nameTable, 
            { sort: [['ID', 'DESC']]} )
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
