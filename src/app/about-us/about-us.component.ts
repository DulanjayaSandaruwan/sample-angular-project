import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show(){
    alert('Hello Dulan , welcome to Angular')
    console.log('DulanS')
  }

  show1(){
    alert('Work hard and win')
  }
}
