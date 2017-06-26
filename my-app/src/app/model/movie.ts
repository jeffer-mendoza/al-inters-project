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
}
