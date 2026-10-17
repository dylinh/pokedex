import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: "  Hello World  ",
        expected: ["hello", "world"],
    },
    {
        input: "   Test   Input  ",
        expected: ["test", "input"],
    }
    // more test cases can be added here
])

("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        let actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
