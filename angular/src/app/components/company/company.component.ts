import { Component } from '@angular/core';
import {CompanyServiceService} from "../../services/company-service.service";
import {Company} from "../../model/Company";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  companies: Company[] = [];
  company: Company = new Company();

  constructor(private companyService: CompanyServiceService) {
  }

  getAllCompanies() {
    this.companyService.getAllCompany().subscribe({
      next: (companies) => {
        this.companies = companies;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  update(company: Company) {
    this.companyService.update(company.id, company).subscribe({
      next: (updatedTask) => {
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  save() {
    this.companyService.save(this.company).subscribe({
      next: (company) => {
        this.companies.push(company);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
