import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { 
    this.massive = [];
    for (let i = 0; i < 1000; i++) {
      this.massive = [...this.massive, 'hit']
    }
  }
  ngOnInit() {
    console.log(this.massive)
  }
  ngOnDestroy() {
    console.log('leave 404')
  }
}
