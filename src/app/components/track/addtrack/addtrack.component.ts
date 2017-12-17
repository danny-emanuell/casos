import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatacasesService } from 'app/services/datacases/datacases.service';

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

  constructor( private route: ActivatedRoute, private dataCase: DatacasesService) { }

  ngOnInit() {
    this.observerRef = this.route.params.subscribe( params => {
      this.IDselected = params[ 'id' ];
    } );
  }

  ngOnDestroy(){
    this.observerRef.unsubscribe();
  }

  addTrack(){

    const data = {
      track: this.track,
      dateTrack: Date.now()
    }

    this.dataCase.insertTrack( this.IDselected , data);
    this.track = '';
  }

}
