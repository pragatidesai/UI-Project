import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-book-flight',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent  implements OnInit{
  flightBookingForm!: FormGroup;
  submitted!:boolean;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.flightBookingForm = this.formBuilder.group(
      {
        passengerName:['', Validators.required],
        noOfTickets:['',Validators.required],
        flightId:['',Validators.required]
      }
    );
  }
}
