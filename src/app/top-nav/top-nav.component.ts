import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from '../service/search-bar.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  public isSearchVissible : boolean = false;

  constructor(private router : Router , private sb : SearchBarService) { }
  ngOnInit(): void {
    this.sb.isSearchVissible.subscribe((status) => {
      this.isSearchVissible = status;
    })
  }

  navigateToLogin(){
    this.router.navigate(['/login'])
  }

}
