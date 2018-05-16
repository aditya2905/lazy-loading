import { Component, OnInit,NgModule } from '@angular/core';
import{ FilterPipe} from '../../filter.pipe';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
@NgModule({  
  imports: [FilterPipe]
}) 
export class DashboardHomeComponent implements OnInit {

  ninjas = [
  	{name: "yoshi",area: 'Chennai'},
  	{name: "Ryu", area : 'Hyderabad'},
  	{name: "Crystal", area : 'Banglore'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
