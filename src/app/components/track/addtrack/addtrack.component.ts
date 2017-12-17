import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addtrack',
  templateUrl: './addtrack.component.html',
  styleUrls: ['./addtrack.component.css']
})
export class AddtrackComponent implements OnInit , OnDestroy {

  private observerRef: any;
  public IDselected: string;
  public caseSelected: any;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.observerRef = this.route.params.subscribe( params => {
      this.IDselected = params[ 'id' ];
    } );

    this.getCase();
  }

  ngOnDestroy(){
    this.observerRef.unsubscribe();
  }

  addTrack(){
    
  }

  getCase(){
    const id = this.IDselected;
    //return this.caseSelected = this.datacases.getCases().find( buscador );

    function buscador( cases ) {
      return cases._caseDate == Number(id);
    }
  }




}
