import { Component, OnInit } from '@angular/core';
import { PostCollegue} from '../models'

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})

export class NouveauCollegueTemplateFormComponent implements OnInit {

  postCollegue : PostCollegue = {} ;

  constructor() { }


  
  ngOnInit() {
  }

  submit(){

  }

}
