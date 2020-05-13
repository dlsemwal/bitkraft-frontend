import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient,) { }
  matchServiceData(){
    const url = "http://localhost:3000/api/match"
    const httpHeaders = {
      headers: new HttpHeaders({
        "Authorization": "token"
      })
    }
    return this.http.get(url, httpHeaders)
   
  }

  resultServiceData(resultId){
    console.log("id--------" + resultId)
    const url = "http://localhost:3000/api/result/"+resultId
    const httpHeaders = {
      headers: new HttpHeaders({
        "Authorization": "token"
      })
    }
    return this.http.get(url, httpHeaders)
   
  }

  teamServiceData(){
    const url = "http://localhost:3000/api/team"
    const httpHeaders = {
      headers: new HttpHeaders({
        "Authorization": "token"
      })
    }
    return this.http.get(url, httpHeaders)
   
  }

  teamServiceDataDetails(playerId){
    const url = "http://localhost:3000/api/team/"+playerId
    const httpHeaders = {
      headers: new HttpHeaders({
        "Authorization": "token"
      })
    }
    return this.http.get(url, httpHeaders)
   
  }
}
