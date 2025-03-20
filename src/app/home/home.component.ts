import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTrendingMovies();
    this.getTheatresMovies();
    this.getPopularMovies();
  }

  getTrendingMovies()
  {
    this.http.get('http://localhost:4200/assets/data/trending.json').subscribe((movies) => {
      this.trendingMovies = movies;
      console.log(movies);
    }, (error) => {
      console.error('Error fetching data:', error);
    });
}

getTheatresMovies()
{
  this.http.get('http://localhost:4200/assets/data/therater.json').subscribe((movies) => {
    this.theatreMovies = movies;
    console.log(movies);
  }, (error) => {
    console.error('Error fetching data:', error);
  });
}
getPopularMovies()
{
  this.http.get('http://localhost:4200/assets/data/popular.json').subscribe((movies) => {
    this.popularMovies = movies;
    console.log(movies);
  }, (error) => {
    console.error('Error fetching data:', error);
  });
}
}


