import { Component } from '@angular/core';
import { DashboardApiService } from 'src/app/services/dashboard-api.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss']
})
export class TopCardsComponent {

  constructor(private dashboardService: DashboardApiService) {
    this.topCardsData();
  }

  logos: any = [
    'music', 'chart-pie', 'download', 'rotate'
  ]
  topCards: any = [];
  topCardsData() {
    this.dashboardService.getDashboardData().subscribe(
      (result: any) => {
        console.log(result)
        this.topCards = result.top_cards;
      }
    )
  }

}
