/**
 * Class representation of Actor
 */
export class Actor {
  id: number;
  also_known_as: string;
  biography: string;
  birthday: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  external_ids:{
    facebook_id: string,
    instagram_id: string,
    twitter_id:string
  }

}
