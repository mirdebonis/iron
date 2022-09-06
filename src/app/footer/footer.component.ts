import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear: number;
  version: string = environment.version;
  constructor() { }

  ngOnInit() {
    var dt = new Date();
    this.currentYear = dt.getFullYear();
  }
}
