import { Component } from '@angular/core';
import {Pollutant} from "../../model/Pollutant";
import {PollutantService} from "../../services/pollutant.service";

@Component({
  selector: 'app-pollutant',
  templateUrl: './pollutant.component.html',
  styleUrls: ['./pollutant.component.css']
})
export class PollutantComponent {
  pollutants: Pollutant[] = [];

  constructor(private pollutantService: PollutantService) {
  }

  getAllPollutant() {
    this.pollutantService.getAllPollutant().subscribe({
      next: (pollutants) => {
        this.pollutants = pollutants;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
