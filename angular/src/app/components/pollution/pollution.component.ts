import { Component } from '@angular/core';
import {PollutionService} from "../../services/pollution.service";
import {Pollution} from "../../model/Pollution";
import {PollutionForShow} from "../../model/PollutionForShow";

@Component({
  selector: 'app-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.css']
})
export class PollutionComponent {
  pollutions: Pollution[] = [];
  pollutionsForShow: PollutionForShow[] = [];
  pollutionForSave: PollutionForShow = new PollutionForShow();

  constructor(private pollutionService: PollutionService) {
  }

  getAllPollution() {
    this.pollutionService.getAllPollutionForShow().subscribe({
      next: (pollutions) => {
        this.pollutionsForShow = pollutions;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  save() {
    this.pollutionService.savePollution(this.pollutionForSave).subscribe({
      next: () => {

      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
