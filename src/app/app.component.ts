import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  latitude: any;
  longitude: any;
  radius: any;

  iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

 

 
  isHidden = false;

  ngOnInit() {

  }

  ngAfterContentInit() {
    let mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143,500),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)
  }

  setCenter() {
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude, this.radius));

    let location = new google.maps.LatLng(this.latitude, this.longitude,this.radius);

    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      
    });

  
    marker.addListener('click', () => {
      this.markerHandler(marker);
    });
  }

  

  showCustomMarker() {


    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude,this.radius));

    let location = new google.maps.LatLng(this.latitude, this.longitude, this.radius);

    

    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: this.iconBase + this.selectedMarkerType,
      
    });
  }

  toggleMap() {
    this.isHidden = !this.isHidden;

    this.gmapElement.nativeElement.hidden = this.isHidden;
  }
}
