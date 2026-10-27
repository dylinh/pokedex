import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";

import type { CLICommand } from "./state.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandCatch } from "./command_catch.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Displays the name of 20 location areas",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays the name of previous 20 location areas",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "explores a certain location",
      callback: commandExplore
    },
    catch: {
      name: "catch",
      description: "catches the pokemon",
      callback: commandCatch
    }
  };
}