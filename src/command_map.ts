import type { State } from "./state.js";

export async function commandMap(state: State) {
    let pokeAPI = state.pokeAPI;
    let locationAreas = await pokeAPI.fetchLocations(state.nextLocationsURL ?? undefined);
    for (const locationArea of locationAreas.results) { 
        console.log(`${locationArea.name}`);}
    state.nextLocationsURL = locationAreas.next;
    state.prevLocationsURL = locationAreas.previous;
}