import type { State } from "./state.js"

export async function commandExplore(state: State, ...args: string[]){
    // const pokeAPI = state.pokeAPI

    const pokeAPI = state.pokeAPI
    const response = await pokeAPI.fetchLocation(args[0])
    console.log(`Exploring ${args[0]}...`)
    console.log("Found Pokemon:")

    for (const obj of response.pokemon_encounters) {
        console.log(` - ${obj.pokemon.name}`)
    }
}