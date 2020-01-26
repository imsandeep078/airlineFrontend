import { Component, OnInit } from '@angular/core';
import { Occupany } from '../occupany';
import { ArsServicesService } from '../ars-services.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-occupany-details',
  templateUrl: './occupany-details.component.html',
  styleUrls: ['./occupany-details.component.css']
})
export class OccupanyDetailsComponent implements OnInit {

  OccupancyInformation;

  occupanyInfo: Occupany[];

  flightNumber: number;
  selectedOccupany: Occupany = {
    flightNumber: null,
    totalSeats: null,
    totalBussinessClassSeats: null,
    totalFirstClassSeats: null,
    availableBussinessClassSeats: null,
    bookedBussinessClassSeats: null,
    availableFirstClassSeats: null,
    bookedFirstClassSeats: null
  };

  constructor(private service: ArsServicesService, private router: Router, private http : HttpClient) {

  }



  ngOnInit() {

  }

  selectOccupany(occdetails: Occupany) {
    this.selectedOccupany = occdetails;
  }

  searchFlightByExecutive() {
    console.log('working');
    this.service.getOccupanyInfo({flightNumber: this.flightNumber}).subscribe(data => {
      console.log('hi');
      this.OccupancyInformation= data.executive;
      console.log(data);
    }, err => {
      console.log(err);
    });
  }


  getOccupancy(occupancyForm: NgForm) {
    this.service.searchLocation(occupancyForm.value).subscribe(data => {
      console.log('hi');
      this.occupanyInfo = data.searchFlight;
      console.log(this.occupanyInfo)
    }, err => {
      console.log(err);

    });
  }

}
