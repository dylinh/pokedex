import { Cache } from "./pokecache.js"

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  cache = new Cache(3000)
  
  constructor() {

  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    // implement this
    let url = pageURL || `${PokeAPI.baseURL}/location-area/`;

    const check_cache = this.cache.get<ShallowLocations>(url)

    if (check_cache){
      return check_cache
    }

    const response = await fetch(url);
    const json = await response.json()
    this.cache.add(url, response)
    return json as ShallowLocations;

  }

  async fetchLocation(locationName: string): Promise<Location> {

    // implement this
    const url = `${PokeAPI.baseURL}/location-area/${locationName}/`;

    const check_cache = this.cache.get<Location>(url)

    if (check_cache){
      return check_cache
    }

    const response = await fetch(url);
    const json = await response.json()
    this.cache.add(url, json)
    return json as Location;   
  }
}

export type ShallowLocations = {
  // add properties here
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  id: number;
  name: string;
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};
