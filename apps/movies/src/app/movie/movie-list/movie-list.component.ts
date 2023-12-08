import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from '@ws-nx-enschede-81223/shared/models';
import { DOCUMENT, NgFor } from '@angular/common';
import { MovieCardComponent } from '@ws-nx-enschede-81223/movies/ui-movie-card';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  standalone: true,
  imports: [NgFor, MovieCardComponent],
})
export class MovieListComponent {
  @Input({ required: true }) movies!: MovieModel[];

  @Input() moviesLoading: Record<string, boolean> | null = null;
  @Input() favorites: Record<string, MovieModel> | null = null;

  @Output() favoriteToggled = new EventEmitter<MovieModel>();

  @ViewChild('movieList') movieList!: ElementRef<HTMLElement>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  navToDetail(movie: MovieModel): void {
    this.router.navigate(['/movie', movie.id]);
  }
}
