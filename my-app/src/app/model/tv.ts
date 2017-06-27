/**
 * Class representation of Movie
 */
export class Tv {
  id: number;
  name: string;
  original_name:string;
  overview: string;
  vote_average: number;
  first_air_date:string;
  videos: {
    results: any[]
  };
  backdrop_path:string;
  poster_path:string;
}
