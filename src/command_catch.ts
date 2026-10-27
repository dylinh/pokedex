import { State } from "./state.js"

export async function commandCatch(state: State, ...args: string[]) {
    let url = `https://pokeapi.co/api/v2/pokemon/${args[0]}/`;   
    const response = await fetch(url);
    const json = await response.json()
    console.log(`Throwing a Pokeball at ${args[0]}...`)
    let chance = 50 / json.base_experience
    const roll = Math.random()
    if (roll > chance) {
        console.log(`${args[0]} escaped!`)
    } else {
        console.log(`${args[0]} was caught!`)
        state.pokedex[args[0]] = json
    }

}