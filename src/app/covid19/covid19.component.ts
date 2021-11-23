import { Component, OnInit, ViewChild } from '@angular/core';
import { JavatechCovid19Service } from '../javatech-covid19.service';
import { CountryReports } from 'src/countryReports';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  displayedColumns: string[] = ["country", "cases", "todayCases", "deaths", "todayDeaths", "recovered", "todayRecovered"];
  dataSource = new MatTableDataSource<CountryReports>([]);

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(private service: JavatechCovid19Service) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllReports();
  }

  public getAllReports() {
    this.service.getCovidReports()
      .subscribe( data => {
        this.dataSource.data = data as CountryReports[]
      });
  }

}
