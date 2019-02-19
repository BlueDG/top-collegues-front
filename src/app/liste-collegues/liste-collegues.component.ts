import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models'
import { CollegueComponent } from '../collegue/collegue.component';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.css']
})
export class ListeColleguesComponent implements OnInit {

  @Input() collegue: Collegue[];

  constructor() { 

    this.collegue = [
      {pseudo:"Simone", score: 9, photoURL: "../../"},
      {pseudo:"Gretta", score: 5, photoURL: "../../"},
      {pseudo:"Olive", score: 4, photoURL: "../../"}
    ];

  }

  ngOnInit() {
  }

}
