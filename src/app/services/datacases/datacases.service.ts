import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { ICase } from './../datacases.interfaces';
import { LocalstorageService } from 'app/services/localstorage/localstorage.service';


@Injectable()
export class DatacasesService {

  Cases: ICase[] = [];
  statusCases = ['INICIALIZADO', 'EN PROCESSO', 'FINALIZADO'];

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

  public insertTrack( idcase, tracking) {
    this.localStorage.updateDataTrack(idcase, tracking)
      .then( rs => {
        //respuesta al momento de grabar el tracking
      })
      .catch( error => {
      })
  }

  public getTrack( idcase ) {
    let caseSelected = this.Cases.find(findCase);
    return caseSelected;

    function findCase( cases ) {
      return cases._caseDate === Number(idcase);
    }

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
