import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "../model/Company";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private http: HttpClient) { }

  getAllCompany() {
    return this.http.get<Company[]>(environment.backendURL + "/companies", {
      headers: {

      }});
  }

  update(prevId: number, company: Company) {
    const body = JSON.stringify(company);
    return this.http.put<Company>(environment.backendURL + "/companies/" + prevId, body, {
      headers: {
        "Content-Type": "application/json"
      }});
  }

  save(company: Company) {
    const body = JSON.stringify(company);
    return this.http.post<Company>(environment.backendURL + "/companies", body, {
      headers: {
        "Content-Type": "application/json"
      }});
  }

  deleteById(id: number) {
    return this.http.delete<void>(environment.backendURL + "/companies/" + id, {
      headers: {

      }});
  }

  getById(id: number) {
    return this.http.get<Company>(environment.backendURL + "/companies/" + id, {
      headers: {

      }});
  }
}
