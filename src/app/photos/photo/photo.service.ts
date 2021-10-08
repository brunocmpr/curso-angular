import { HttpClient } from "@angular/common/http";
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
}