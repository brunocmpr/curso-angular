import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000'
@Injectable({providedIn: 'root'})
export class PhotoService {

    constructor(private http: HttpClient){}

    listFromUser(username: string){
        const observable = this.http.get<Photo[]>(API + '/' + username + '/photos');
        return observable;
    }

    listFromUserPaginated(username: string, page: number){
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<Photo[]>(API + '/' + username + '/photos', { params });
    }
}
//Interessante: em JS você pode substituir { nome: nome } (criacao de objeto contendo um atributo nome recebendo valor a partir de uma variavel nome )
//pela forma simples { nome }