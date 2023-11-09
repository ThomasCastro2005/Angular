import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  usuario = JSON.parse(localStorage.getItem("usuario") || "[]")
  constructor(private router:Router){
  }

  
  ngOnInit(): void{

  }

}
