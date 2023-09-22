import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pollution} from "../model/Pollution";
import {Company} from "../model/Company";
import {environment} from "../../environment/environment";

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
}
