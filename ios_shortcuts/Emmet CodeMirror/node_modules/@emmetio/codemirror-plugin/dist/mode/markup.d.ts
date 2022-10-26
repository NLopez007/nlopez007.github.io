/// <reference types="codemirror" />
import Scanner from '@emmetio/scanner';
import { BracketType, Bracket, AllTokens } from '@emmetio/abbreviation';
import { ParseModeError } from './utils';
declare type Context = {
    [ctx in BracketType]: number;
} & {
    quote: number;
};
interface EmmetMarkupModeState extends Context {
    parseError?: ParseModeError;
    braces: Bracket[];
    scanner: Scanner;
    tokens: AllTokens[];
}
export default function emmetAbbreviationMode(): CodeMirror.Mode<EmmetMarkupModeState>;
export {};
