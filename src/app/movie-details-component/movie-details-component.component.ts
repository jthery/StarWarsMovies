import { Component, OnInit, Input} from '@angular/core';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-movie-details-component',
  templateUrl: './movie-details-component.component.html',
  styleUrls: ['./movie-details-component.component.css']
})
export class MovieDetailsComponentComponent implements OnInit {

  @Input() film: Film;

  constructor() { }

  ngOnInit() {
  }

}
