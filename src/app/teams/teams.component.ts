import { Component, OnInit } from '@angular/core';
import{MatchService}  from '../service/match.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
public teamDataFirst;
public teamDataSec
public matchData
public showDetails =false;
public teamDetails
  constructor(private matchService:MatchService) { }

  ngOnInit() {
    
    this.matchService.teamServiceData().subscribe(
      (data)=>{
          this.teamDataFirst =data
          // this.teamDataSec = data[1]
      }
    )

    this.matchService.matchServiceData().subscribe(
      (data)=>{
        this.matchData = data[1]

       
        },
     (error) => { alert("server error")} )
  }

  detailsList(id){
    this.showDetails = true
    this.matchService.teamServiceDataDetails(id).subscribe(
      (data)=>{
          this.teamDetails = data
      }
    )
  }

}
