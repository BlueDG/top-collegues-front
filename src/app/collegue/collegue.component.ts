import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models'

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;

  constructor() { 

    
  }

  ngOnInit() {
    
  }

  onVoted(avis: Avis) {
    if (avis == Avis.Aimer) {
      this.collegue.score++;
    } else if (avis == Avis.Détester) {
      this.collegue.score--;
    }
  }

}   
