import { Component } from '@angular/core';
import { DashboardApiService } from 'src/app/services/dashboard-api.service';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent {

  constructor(private dashboardService: DashboardApiService) {
    this.topCardsData();
  }

  recentOrders: any = [];
  topCardsData() {
    this.dashboardService.getDashboardData().subscribe(
      (result: any) => {
        console.log(result)
        this.recentOrders = result.recent_orders;
      }
    )
  }
}
