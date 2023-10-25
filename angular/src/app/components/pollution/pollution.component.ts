import {Component, OnInit} from '@angular/core';
import {PollutionService} from "../../services/pollution.service";
import {Pollution} from "../../model/Pollution";
import {PollutionForShow} from "../../model/PollutionForShow";
import {CompanyServiceService} from "../../services/company-service.service";
import {Company} from "../../model/Company";
import {Pollutant} from "../../model/Pollutant";
import {PollutantService} from "../../services/pollutant.service";

@Component({
  selector: 'app-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.css']
})
export class PollutionComponent implements OnInit{
  pollutions: Pollution[] = [];
  pollutionsForShow: PollutionForShow[] = [];
  pollutionForSave: PollutionForShow = new PollutionForShow();
  companies: Company[] = [];
  pollutants: Pollutant[] = [];

  constructor(private pollutionService: PollutionService,
              private companiesService: CompanyServiceService,
              private pollutantService: PollutantService) {
  }

  ngOnInit(): void {
    this.getAllCompanies();
    this.getAllPollutants();
  }

  getAllPollutionForShow() {
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

  getAllCompanies() {
    this.companiesService.getAllCompany().subscribe({
      next: (companies) => {
        this.companies = companies;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  getAllPollutants() {
    this.pollutantService.getAllPollutant().subscribe({
      next: (poll) => {
        this.pollutants = poll;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
