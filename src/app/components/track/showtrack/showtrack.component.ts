import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatacasesService } from './../../../services/datacases/datacases.service';

@Component({
  selector: 'app-showtrack',
  templateUrl: './showtrack.component.html',
  styleUrls: ['./showtrack.component.css']
})
export class ShowtrackComponent implements OnInit , OnDestroy {

  private observerRef: any;
  public IDselected: string;
  public caseSelected: any;
  public track: string;

  constructor( private route: ActivatedRoute , private datacases: DatacasesService ) { }

  ngOnInit() {
    this.observerRef = this.route.params.subscribe( params => {
      this.IDselected = params[ 'id' ];
    } );

    this.getData();

  }

  ngOnDestroy(){
    this.observerRef.unsubscribe();
  }

  getData() {
    this.caseSelected = this.datacases.getTrack( Number( this.IDselected ));
  }
}
