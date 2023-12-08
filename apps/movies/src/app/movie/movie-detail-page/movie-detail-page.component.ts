import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TMDBMovieCreditsModel } from '../../shared/model/movie-credits.model';
import { TMDBMovieDetailsModel } from '../../shared/model/movie-details.model';
import { MovieModel } from '@ws-nx-enschede-81223/shared/models';
import { MovieService } from '../movie.service';
import { MovieImagePipe } from '@ws-nx-enschede-81223/shared/utils';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { FastSvgComponent } from '@push-based/ngx-fast-svg';
import { StarRatingComponent } from '@ws-nx-enschede-81223/shared/ui-star-rating';
import { DetailGridComponent } from '../../ui/component/detail-grid/detail-grid.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DetailGridComponent,
    StarRatingComponent,
    FastSvgComponent,
    MovieListComponent,
    MovieImagePipe,
  ],
})
export class MovieDetailPageComponent implements OnInit {
  recommendations$!: Observable<{ results: MovieModel[] }>;
  credits$!: Observable<TMDBMovieCreditsModel>;
  movie$!: Observable<TMDBMovieDetailsModel>;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movie$ = this.movieService.getMovieById(params['id']);
      this.credits$ = this.movieService.getMovieCredits(params['id']);
      this.recommendations$ = this.movieService.getMovieRecommendations(
        params['id']
      );
    });
  }
}
