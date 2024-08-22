import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router'; 
import { JsonPipe } from '@angular/common'; 
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Flight } from './Flight';
import { BooflightService } from './booflight.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JsonPipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FlightBooking';
  agree:boolean =false;
  loadFlightData:boolean = false;
  flights!:Flight[];
  errorMessage!: string;
  responseData$:Observable<any>|undefined;
  constructor(private router: Router,private bookFlight:BooflightService, private http:HttpClient) { }
  myData:any;
  getData(){
    this.loadFlightData=true;
    this.responseData$ = this.bookFlight.getFlights();
    
    console.log(this.responseData$);
    
    
  }
  postData(){
    this.bookFlight.postData();
  }
  agreed(val:any){
    if (val==1){
    this.agree=true;
    this.router.navigate(['/book']);}
    else if(val==2){
    this.agree=true;
    this.router.navigate(['/view']);}
  }
}
