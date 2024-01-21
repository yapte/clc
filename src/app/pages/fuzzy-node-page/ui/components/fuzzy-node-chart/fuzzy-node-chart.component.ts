import { Component } from '@angular/core';

@Component({
  selector: 'app-fuzzy-node-chart',
  templateUrl: './fuzzy-node-chart.component.html',
  styleUrls: ['./fuzzy-node-chart.component.scss'],
})
export class FuzzyNodeChartComponent {
  documentStyle = getComputedStyle(document.documentElement);
  textColor = 'black';
  textColorSecondary = 'grey';
  surfaceBorder = 'darkgreen';

  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First Dataset',
        data: [0, 0, 80, 80, 0, 0, 40],
        fill: false,
        borderColor: 'blue',
        tension: 0,
      },
      {
        label: 'Second Dataset',
        data: [80, 0, 40, 0, 80, 0, 90],
        fill: false,
        borderColor: 'pink',
        tension: 0,
      },
    ],
  };

  options = {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: this.textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: this.textColorSecondary,
        },
        grid: {
          color: this.surfaceBorder,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: this.textColorSecondary,
        },
        grid: {
          color: this.surfaceBorder,
          drawBorder: false,
        },
      },
    },
  };
}
