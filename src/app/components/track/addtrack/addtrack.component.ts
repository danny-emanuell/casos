import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatacasesService } from './../../../services/datacases/datacases.service';
import { ICase } from '../../../services/datacases.interfaces';
import * as localStorage from 'localstoragedb';

@Component({
  selector: 'app-addtrack',
  templateUrl: './addtrack.component.html',
  styleUrls: ['./addtrack.component.css']
})
export class AddtrackComponent implements OnInit , OnDestroy {

  private observerRef: any;
  public IDselected: string;
  public caseSelected: any;
  public track: string;

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

  constructor( private route: ActivatedRoute , private datacases: DatacasesService  ) { }

  ngOnInit() {
    this.observerRef = this.route.params.subscribe( params => {
      this.IDselected = params[ 'id' ];
    } );

    this.getCase();
  }

  ngOnDestroy(){
    this.observerRef.unsubscribe();
  }

  getCase(){
    const id = this.IDselected;
    //return this.caseSelected = this.datacases.getCases().find( buscador );

    function buscador( cases ) {
      return cases._caseDate == Number(id);
    }
  }

  addTrack(){
    const cases = this.casesDB;
    this.caseSelected._tracking.unshift(
      {
        date:Date.now(),
        track: this.track
      }
    );

    this.track = '';
  }



}
