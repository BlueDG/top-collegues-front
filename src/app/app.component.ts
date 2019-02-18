import {Component} from '@angular/core';
import {Collegue} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'top-collegues-front';
  public isCollapsed = false;
  
  trampSample: Collegue = {
    photoURL: "https://i.pinimg.com/originals/b4/1b/9a/b41b9a2a5eed598dbf36aaea9e1cdf98.jpg",
    score: 0,
    pseudo: "Simone"
  };
}


