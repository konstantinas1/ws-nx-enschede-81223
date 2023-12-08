import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FastSvgComponent } from '@push-based/ngx-fast-svg';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { MovieModel } from '@ws-nx-enschede-81223/shared/models';
import { StarRatingComponent } from '@ws-nx-enschede-81223/shared/ui-star-rating';
import {
  MovieImagePipe,
  TiltDirective,
} from '@ws-nx-enschede-81223/shared/utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  standalone: true,
  imports: [
    TiltDirective,
    StarRatingComponent,
    NgFor,
    UpperCasePipe,
    MovieImagePipe,
    NgIf,
    FastSvgComponent,
  ],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: MovieModel;

  @Input() loading = false;
  @Input() favorite = false;

  @Output() selected = new EventEmitter<MovieModel>();
  @Output() toggleFavorite = new EventEmitter<MovieModel>();

  ngOnInit() {
    if (!this.movie) {
      throw new Error(
        `MovieCardComponent expects movie to be set, ${this.movie} given`
      );
    }
  }

  movieClicked() {
    this.selected.emit(this.movie);
  }

  divs = new Array(100).fill(null).map((v, i) => i);
}
