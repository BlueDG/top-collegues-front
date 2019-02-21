import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collegue } from '../models';
import {environment} from '../../environments/environment'



@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private _http:HttpClient) { // on a ici toutes les données prêtes à être transmises en http

  }

  lister(): Observable<Collegue[]> { // ici on récupère la liste de collègues postée sur le serveur local par Spring, on récupère ces données sous forme de liste
    return this._http.get<Collegue[]>(`${environment.backendUrl}/collegues`); // tu récupères les données de cette adresse http sous forme de liste intitulée <Collegue[]> à partir de la variable d'environnement nommée backendUrl / collegues
  } // sauf qu'on n'a que localhost8080 dans la variable de environment, on doit donc concatener avec /collegues fait dans Spring
  // on va ensuite dans accueil component ts pour récupérer cette liste 



}
   