import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserOptions } from '../interfaces/user-options';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }

  public saveUser(user: UserOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('https://covid-testprocess.azurewebsites.net/api/AddUserInformation?code=hM41ZqXlPp8kVnGgujM0daabAH0BQ46uDCX8y51XRPztfqn6CSMLAA==',
      {
        "FirstName": user.Name,
        "LastName": user.Name,
        "Email": user.Email,
        "Location": user.Street + ' ' + user.Area
      })
      .subscribe(response => {
          resolve(response);
        });
    });
  }
}
