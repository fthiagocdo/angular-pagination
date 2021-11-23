import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryReports } from 'src/countryReports';

@Injectable({
  providedIn: 'root'
})
export class JavatechCovid19Service {

  constructor(private _httpClient: HttpClient) { }

  public getCovidReports() {
    return this._httpClient.get("https://corona.lmao.ninja/v3/covid-19/countries");
  }
}
