import { Component } from '@angular/core';
import { DashboardApiService } from 'src/app/services/dashboard-api.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent {

  constructor(private dashboardService: DashboardApiService) {
    this.topCardsData();
  }

  newUsers: any = [];
  topCardsData() {
    this.dashboardService.getDashboardData().subscribe(
      (result: any) => {
        console.log(result)
        this.newUsers = result.new_users;
      }
    )
  }
}
