import { Component, OnInit } from '@angular/core';
import { SearchBarService } from '../service/search-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private sb : SearchBarService , private router : Router) { }

  ngOnInit(): void {
  }

  navigateToSearch(){
    // this.router.navigate(['/search'])
    this.sb.isSearchVissible.next(true);
  }

}
