import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PHOTODATA } from '../shared/photo-data';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  photoData: Array<object> = PHOTODATA;
  category: string;
  photoSubset: Array<object>;
  spotLight: object;

  constructor(private route: ActivatedRoute) {
    console.log("on constructor")

    this.route.params.subscribe(params => this.category = params.category);
    console.log(this.category);
  }
  ngOnChanges() {
    console.log("on change")
    this.route.params.subscribe(params => this.category = params.category);
  }
  ngOnInit() {
    console.log("on init")
    this.updateCategory(this.category)
    // this.photoSubset = this.photoData.filter(photo => photo['category'] === this.category);

    console.log(this.category)
  }

  updateCategory(cat) {
    this.category = cat
    console.log('cat is', cat)
    this.photoSubset = this.photoData.filter(photo => photo['category'] === this.category);
    this.spotLight = this.photoSubset[0];
    console.log('updated category', this.category)
  }
  scrollRight() {
    const carousel = document.getElementById('cat-carousel')
    carousel.scrollLeft += carousel.offsetWidth / 4
  }
  scrollLeft() {
    const carousel = document.getElementById('cat-carousel')
    carousel.scrollLeft -= carousel.offsetWidth / 4;

  }
  changePlaces(event){
    const photoId = parseInt(event.target.id.split("-")[1])
    console.log("id is", photoId)
    this.spotLight = this.photoSubset.find( imgData => imgData["order"] === photoId )
    console.log('spotligt', this.spotLight)
    // this.spotLight= event.target.src;
  }
}
