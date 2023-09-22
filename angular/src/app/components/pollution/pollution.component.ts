import { Component } from '@angular/core';
import {PollutionService} from "../../services/pollution.service";
import {Pollution} from "../../model/Pollution";

@Component({
  selector: 'app-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.css']
})
export class PollutionComponent {
  pollutions: Pollution[] = [];

  constructor(private pollutionService: PollutionService) {
  }

  getAllPollution() {
    this.pollutionService.getAllPollution().subscribe({
      next: (pollutions) => {
        this.pollutions = pollutions;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
