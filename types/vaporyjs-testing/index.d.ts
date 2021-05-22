// Type definitions for vaporyjs-testing
// Project: https://github.com/vaporyjs/vaporyjs-testing
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'vaporyjs-testing' {
type Tests = {
    [index: string]: {
    in: string,
    out: string,
    root: string
    }
};

export const getSingleFile: (name: string) => Tests;
}
