import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {


  constructor(private http:HttpClient) {

  }

  getData() {
    return [
      {
        name: 'Mehul',
        online: true
      },
      {
        name: 'gfh',
        online: true
      },
      {
        name: 'Mefhfhfhfhul',
        online: true
      },
      {
        name: 'Mehfhfhhul',
        online: true
      },
      {
        name: 'Meddfeehul',
        online: false
      }
    ];
  }

  getDataPlaceholder(){
    return this.http.get<any>('http://jsonplaceholder.typicode.com/users')
  }

}
