import { Component, OnInit } from '@angular/core';
import { DatacasesService } from '../../services/datacases/datacases.service';

@Component({
  selector: 'app-showcases',
  templateUrl: './showcases.component.html',
  styleUrls: ['./showcases.component.css']
})
export class ShowcasesComponent implements OnInit {

  public cases;

  constructor( private dataCase: DatacasesService) {}

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this.cases = this.dataCase.Cases;
  }


}
