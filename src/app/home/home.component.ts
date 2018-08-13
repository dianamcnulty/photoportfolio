import { Component, OnInit } from '@angular/core';
import { PHOTODATA } from '../shared/photo-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photoData: Array <object> = PHOTODATA;
  currentImage = 0
  constructor() { }

  ngOnInit() {
  }


  scrollRight(){
    const imageHouse = document.getElementById('image-house')
    const pixels = imageHouse.offsetWidth
    if (this.currentImage >= 24) {
      console.log('beginning', this.currentImage)
      imageHouse.scrollLeft = 0;
      this.currentImage = 0;
    } else {
      let photoId = this.photoData[this.currentImage]["category"] + '-' + this.photoData[this.currentImage]["order"];
      let imageWidth = document.getElementById(photoId).offsetWidth
      
      console.log('scrolling right', imageWidth);
      imageHouse.scrollLeft += imageWidth;
      this.currentImage++
    }
  }
  scrollLeft() {
    const imageHouse = document.getElementById('image-house')
    const pixels = imageHouse.offsetWidth
    if (imageHouse.scrollLeft !== 0) {
      console.log('to end')
      let photoId = this.photoData[this.currentImage]["category"] + '-' + this.photoData[this.currentImage]["order"];
      let imageWidth = document.getElementById(photoId).offsetWidth
      console.log('scrolling right', imageWidth);
      imageHouse.scrollLeft -= imageWidth;
      this.currentImage--
    }
  }

}
