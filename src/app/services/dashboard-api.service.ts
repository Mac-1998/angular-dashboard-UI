import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {


  url: string = "https://1.api.fy23ey05.careers.ifelsecloud.com/"
  constructor(private http: HttpClient) { }

  getDashboardData() {
   return this.http.get(this.url);
  }
}
