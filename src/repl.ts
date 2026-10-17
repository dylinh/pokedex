export function cleanInput(input: string): string[] {
    let splitInput = input.trim().split(/\s+/);
    let cleanedInput = splitInput.map((word) => word.toLowerCase());

    return cleanedInput; 
} 