import { Component, OnInit, Input, Output} from '@angular/core';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-movie-details-component',
  templateUrl: './movie-details-component.component.html',
  styleUrls: ['./movie-details-component.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() filmDetails: Film;

  constructor() { }

  ngOnInit() { }
  
}
