import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { EmployeeService } from '../services/employee.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  public data: any;

  constructor(private _empService: EmployeeService){}

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }
  
  createChart(){
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        console.log(res);
        this.data = res;
    console.log(this.data)
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
          labels: this.data.map((row: { firstName: any; }) => row.firstName),
          datasets: [
            {
              label: 'Employee Package in LPA',
              data: this.data.map((row: { package: any; }) => row.package)
            }
          ]
        }
    });
  }
});
  }

}
