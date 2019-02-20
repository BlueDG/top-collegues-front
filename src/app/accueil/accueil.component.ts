import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  @Input() collegue: Collegue[];
  page = 1;
  pageSize = 3;

  constructor() { 

    this.collegue = [
      {pseudo:"Simone", score: 9, photoURL: "https://i.pinimg.com/originals/b4/1b/9a/b41b9a2a5eed598dbf36aaea9e1cdf98.jpg"},
      {pseudo:"Gretta", score: 5, photoURL: "https://i.pinimg.com/originals/06/83/f9/0683f931563b3d2e1ea8e0b389849c54.jpg"},
      {pseudo:"Olive", score: 4, photoURL: "https://thumbs.dreamstime.com/b/punk-rock-woman-2314557.jpg"},
      {pseudo:"Geraldine", score: -8, photoURL: "https://image1.masterfile.com/getImage/NjEwMi0wODgwMDE5OGVuLjAwMDAwMDAw=ALBU-5/6102-08800198en_Masterfile.jpg"},
      {pseudo:"Céline", score: 6, photoURL: "https://photos.travelblog.org/Photos/103181/523077/f/5360237-Pretty_punk_girl-0.jpg"},
      {pseudo:"Huguette", score: -4, photoURL: "https://media.npr.org/assets/img/2015/11/17/111315_annebernays_32_sq-1f03be97a66e01d88060887ebad37b4fe7502b99-s800-c85.jpg"}
    ];

  }

  ngOnInit() {
  }

}
