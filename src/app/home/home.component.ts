import { Component, OnInit,ElementRef } from '@angular/core';
import{MatchService} from '../service/match.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public matchData;
public resultData;
public resultIdName
  constructor(private matchService:MatchService) { }
  async ngOnInit() {
    this.matchService.matchServiceData().subscribe(
      (data)=>{
        this.matchData = data[1]
        this.resultIdName = this.matchData.result._id

        console.log("resultid" + this.resultIdName)
        },
     (error) => { alert("server error")} )

  
  }
  resultClick(){
    this.matchService.resultServiceData(this.resultIdName).subscribe(
      (data)=>{
     this.resultData = data
     },
  (error) => { alert("server error")})
  }

}
