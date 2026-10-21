export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    // implement this
    let url = pageURL || `${PokeAPI.baseURL}/location-area/`;

    const response = await fetch(url);
    return await response.json() as ShallowLocations;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    // implement this
    const url = `${PokeAPI.baseURL}/location-area/${locationName}/`;
    const response = await fetch(url);
    return await response.json() as Location;   
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
  // add properties here
    id: number;
};