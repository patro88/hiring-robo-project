import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoboAssistantService } from "../service/roboAssistant.service";
import { RoboAssistant } from "../model/roboAssistant";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  constructor(private router: Router,
              private roboAssistantService: RoboAssistantService) { }

  searchResults: RoboAssistant[]; 

  searchText: string = ""; 

  selectedRobo : any;

  sendSearch() {
    this.roboAssistantService.getAllRoboAssistants(this.searchText).then((result) => {this.searchResults = result;});
  }

  onRoboClick(robo: RoboAssistant) {
    this.selectedRobo = robo;
    this.router.navigate(['/detail', this.selectedRobo.robo_id]);
  }

}
