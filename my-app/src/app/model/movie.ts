/**
 * Class representation of Movie
 */
export class Movie {
  id: number;
  title: string;
  overview: string;
  videos: {
    results: any[]
  };
  backdrop_path:string;
  poster_path:string;
  original_title:string;
  vote_average: number;
  release_date: string;
  genres: {
    id:number;
    name:string;
  }
}
