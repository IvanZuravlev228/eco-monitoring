import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pollution} from "../model/Pollution";
import {Company} from "../model/Company";
import {environment} from "../../environment/environment";
import {PollutionForShow} from "../model/PollutionForShow";

@Injectable({
  providedIn: 'root'
})
export class PollutionService {

  constructor(private http: HttpClient) { }

  getAllPollution() {
    return this.http.get<Pollution[]>(environment.backendURL + "/pollution", {
      headers: {

      }});
  }

  getAllPollutionForShow() {
    return this.http.get<PollutionForShow[]>(environment.backendURL + "/pollution/show", {
      headers: {

      }});
  }

  savePollution(poll: PollutionForShow) {
    const body = JSON.stringify(poll);
    return this.http.post<Company>(environment.backendURL + "/pollution", body, {
      headers: {
        "Content-Type": "application/json"
      }});
  }
}
