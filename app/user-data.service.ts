import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './user-data/user-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private _url: string = '/assets/data/data.json';
  constructor(private http: HttpClient) { }

  getData(): Observable<UserData[]>{
  	return this.http.get<UserData[]>(this._url);
  }

}
