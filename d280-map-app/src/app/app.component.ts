import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd280-map-app';
  selectedCountry: any = null;
  displayCountryInfo(countryData: any): void {
    this.selectedCountry = countryData;
  }
}