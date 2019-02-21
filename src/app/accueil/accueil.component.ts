import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models'
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  collegue: Collegue[]= [];
  page = 1;
  pageSize = 3;

  constructor(public _data:DataService) { // je crée une instance de classe data à partir de ce que j'ai fait dans le data service

    _data.lister().subscribe(
      tableauCols => this.collegue = tableauCols
    );  

  }  

  ngOnInit() {
  }



  
}
