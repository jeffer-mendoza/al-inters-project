/**
 * Class representation of Movie
 */
export class Tv {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  vote_average: number;
  first_air_date: string;
  episode_run_time: number;
  backdrop_path: string;
  poster_path: string;
  homepage: string;
  status: string;
  genres: {
    id: number;
    name: string;
  };
  created_by: {
    id: number,
    name: string,
    profile_path: string
  };
  number_of_episodes: number;
  number_of_seasons: number;
}
