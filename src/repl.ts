import { createInterface } from "readline";

export function cleanInput(input: string): string[] {
    let splitInput = input.trim().split(/\s+/);
    let cleanedInput = splitInput.map((word) => word.toLowerCase());
    return cleanedInput; 
} 

export function startREPL() {
    const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
    });

    rl.prompt();

    rl.on('line', (line: string) => {
        let cleanedInput = cleanInput(line);
        if (cleanedInput.length === 0) {
            rl.prompt();
        } else {
            console.log(`Your command was: ${cleanedInput[0]}`);
            rl.prompt();
        }
    })
}