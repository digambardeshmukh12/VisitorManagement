import { Component } from '@angular/core';
import * as Highmaps from 'highcharts/highmaps';
import * as Highcharts from 'highcharts/highcharts';
import { MatDialog } from '@angular/material/dialog';
import { ViewVisiterListComponent } from '../others/dialog/view-visiter-list/view-visiter-list.component';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  activeVisitors = [
    { name: 'John Doe', checkInTime: '09:00 AM', checkOutTime: '05:00 PM' },
    { name: 'Jane Smith', checkInTime: '10:30 AM', checkOutTime: '06:00 PM' },
    // Add more visitors as needed
  ];

  constructor(private dialog: MatDialog){

  }

  addNewUser(): void {
    // Logic to add a new user to the system
    console.log('Add new user functionality to be implemented.');
  }
  ngOnInit(): void {
    this.createPieChart();
    this.createBarGraph();
  }

  createPieChart(): void {
    Highcharts.chart('pieChartContainer', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Sample Pie Chart'
      },
      series: [{
        type: 'pie',
        name: 'Categories',
        data: [
          ['Category A', 30],
          ['Category B', 50],
          ['Category C', 20]
        ]
      }]
    });
  }
  
  createLineChart(): void {
    Highcharts.chart('lineChartContainer', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Sample Line Chart'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
      },
      yAxis: {
        title: {
          text: 'Values'
        }
      },
      series: [{
        type: 'line',
        name: 'Data Series',
        data: [10, 20, 15, 30, 25]
      }]
    });
  }
  
  createBarGraph(): void {
    Highcharts.chart('barGraphContainer', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Sample Bar Graph'
      },
      xAxis: {
        categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
      },
      yAxis: {
        title: {
          text: 'Values'
        }
      },
      series: [{
        type: 'bar', // Ensure type is specified as 'bar'
        name: 'Data Series',
        data: [50, 70, 60, 80, 75]  // Sample data values for the bar graph
      } ,{
        type: 'bar', // Ensure type is specified as 'bar'
        name: 'Data Series',
        data: [50, 70, 60, 80, 75]  // Sample data values for the bar graph
      },
      {
        type: 'bar', // Ensure type is specified as 'bar'
        name: 'Data Series',
        data: [50, 70, 60, 80, 75]  // Sample data values for the bar graph
      }
    ]
    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ViewVisiterListComponent , {
      width: '700px',
      height: '500px',
      data: {
        title: 'Show Visiters',
        message: 'This is a sample message.',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
       console.log('Dialog closed with result:', result);
    });
  }

}