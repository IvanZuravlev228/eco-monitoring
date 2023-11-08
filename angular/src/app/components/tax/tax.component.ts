import {Component, OnInit} from '@angular/core';
import {CompanyServiceService} from "../../services/company-service.service";
import {PollutionService} from "../../services/pollution.service";
import {PollutantService} from "../../services/pollutant.service";
import {TaxResult} from "../../model/TaxResult";
import {Pollution} from "../../model/Pollution";

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit{
  taxResults: TaxResult[] = [];
  private minSalary: number = 6700;
  private populationSizeCoefficient: number = 1.55;
  private typeOfSettlementCoefficient: number = 1.25;
  private Kt: number = this.populationSizeCoefficient * this.typeOfSettlementCoefficient;
  private Kzi: number = 1;

  constructor(private companyService: CompanyServiceService,
              private pollutionService: PollutionService,
              private pollutantService: PollutantService) {
  }

  ngOnInit(): void {
    this.getAllPollution();
  }

  getAllPollution() {
    this.pollutionService.getAllPollution().subscribe({
      next: (pollutions) => {
        this.calcTax(pollutions);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  calcTax(mainPollutions: Pollution[]) {
    mainPollutions.forEach(pollution => {
      this.companyService.getById(pollution.companyId).subscribe({
        next: (company) => {
          this.pollutantService.getById(pollution.pollutantId).subscribe({
            next: (pollutant) => {
              let avgPoll = pollution.valuePollution / 12;
              let timeH = Math.floor(Math.random() * 365) + 1; // 3 month * 30 days * 60 h
              let taxCof = 3.6 * Math.pow(10, -3) * (avgPoll - pollutant.gdk) * timeH;
              const taxResult: TaxResult = {
                companyName: company.name,
                valuePollution: pollution.valuePollution,
                pollutantName: pollutant.name,
                avgPollution: avgPoll,
                normPollution: pollutant.gdk,
                timeH:timeH,
                taxCoefficient: taxCof,
                tax: taxCof * 1.1 * this.minSalary * (pollutant.gdk > 1 ? 10 / pollutant.gdk : 1 / pollutant.gdk) * this.Kt * this.Kzi
              }
              this.taxResults.push(taxResult);
            },
            error: (error) => {
              console.log("get pollutant by id error");
              console.log(error);
            }
          })
        },
        error: (error) => {
          console.log("get company by id error");
          console.log(error);
        }
      })
    });
  }

  sortTaxResultsByCompanyName() {
    this.taxResults = this.taxResults.sort((a, b) => a.companyName.localeCompare(b.companyName));
  }

  sortTaxResultsByTax() {
    this.taxResults = this.taxResults.sort((a, b) => b.tax - a.tax);
  }

  sortTaxResultsByValuePollution() {
    this.taxResults = this.taxResults.sort((a, b) => b.valuePollution - a.valuePollution);
  }

  sortTaxResultsByTaxPollutant() {
    this.taxResults = this.taxResults.sort((a, b) => a.pollutantName.localeCompare(b.pollutantName));
  }

  sortTaxResultsByAvgPollution() {
    this.taxResults = this.taxResults.sort((a, b) => b.avgPollution - a.avgPollution);
  }

  sortTaxResultsByNormPollution() {
    this.taxResults = this.taxResults.sort((a, b) => b.normPollution - a.normPollution);
  }

  sortTaxResultsByTimeH() {
    this.taxResults = this.taxResults.sort((a, b) => b.timeH - a.timeH);
  }

  sortTaxResultsByTaxCoefficient() {
    this.taxResults = this.taxResults.sort((a, b) => b.taxCoefficient - a.taxCoefficient);
  }
}
