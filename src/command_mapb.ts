import type { State } from "./state.js";

export async function commandMapb(state: State) {
    let pokeAPI = state.pokeAPI;
    let locationAreas = await pokeAPI.fetchLocations(state.prevLocationsURL ?? undefined);
    for (const locationArea of locationAreas.results) { 
        console.log(`${locationArea.name}`);}
    state.nextLocationsURL = locationAreas.next;
    state.prevLocationsURL = locationAreas.previous;
}