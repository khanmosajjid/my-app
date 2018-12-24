import { Component, OnInit } from '@angular/core';
import {InvidzServices} from '../services/invidz.services';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  Videos: any[];
  constructor(private invidzServices: InvidzServices) { }

  ngOnInit() {
    this.invidzServices.getVideos().subscribe(responseBody => {

      return this.Videos = (responseBody as any).data;
    });


  }

}
