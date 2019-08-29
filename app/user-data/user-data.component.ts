import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  public allData = [] as any;

  constructor(private dataService: UserDataService) { }

  ngOnInit() {
  	this.dataService.getData().subscribe(data => this.allData = data);
  }

}
