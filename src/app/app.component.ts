import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parking-car';
  carArray: any[] = [];
  carObj: any = {
    "license_plate": "",
    "mobileNo": "",
    "vehicle_type": "",
    "entry_date": new Date(),
    "ticket_amount": "",
    "out_time": new Date(),
  }
  constructor(private http: HttpClient) {
    this.getAllCars();
  }

  assignVehicalType(vehicaltype: string) {
    this.carObj.vehicle_type = vehicaltype;
  }
  setAmount(rate: number) {
    this.carObj.ticket_amount = rate;
  }
  getAllCars() {
    this.http.get("http://onlinetestapi.gerasim.in/api/ParkingTicket/GetAllParkings").subscribe((res: any) => {
      this.carArray = res.data;
    })
  }
  saveCar() {
    this.http.post("http://onlinetestapi.gerasim.in/api/ParkingTicket/AppParking", this.carObj).subscribe((res: any) => {
      if (res.result) {
        this.getAllCars();
        alert('Parking Done')
      } else {
        alert(res.message)
      }
      this.onReset();
    })
  }
  onReset() {
    this.carObj = {
      "license_plate": "",
      "mobileNo": "",
      "vehicle_type": "",
      "entry_date": new Date(),
      "ticket_amount": "",
      "out_time": "",
    }
  }
  markOut(license_plate: string) {
    this.http.get("http://onlinetestapi.gerasim.in/api/ParkingTicket/MarkOut?license_plate=" + license_plate).subscribe((res: any) => {
      if (res.result) {
        this.getAllCars();
        alert('Marked Out')
      } else {
        alert(res.message)
      }
      this.onReset();

    })
  }

}


