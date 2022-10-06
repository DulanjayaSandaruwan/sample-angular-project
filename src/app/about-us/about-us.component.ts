import { Component, OnInit } from '@angular/core';

export interface Employee {
  id: string;
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  //create an array
  employees: Employee[] = [
    { id: '1', name: 'Dulan', email: 'dulan@gmail.com', password: '1234' },
    { id: '2', name: 'Sanda', email: 'sanda@gmail.com', password: '5678' },
    { id: '3', name: 'Deegalla', email: 'deegalla@gmail.com', password: '9012' },
  ];

  constructor() {}

  ngOnInit(): void {}

}
