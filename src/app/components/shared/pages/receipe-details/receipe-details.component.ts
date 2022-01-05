import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from 'src/app/services/api-requests.service';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.scss']
})
export class ReceipeDetailsComponent implements OnInit {

  constructor(private api: ApiRequestsService) { }

  ngOnInit(): void {
  }

}
