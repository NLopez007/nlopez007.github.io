/// <reference types="codemirror" />
import Scanner from '@emmetio/scanner';
import { AllTokens } from '@emmetio/css-abbreviation';
import { ParseModeError } from './utils';
interface EmmetStylesheetModeState {
    parseError?: ParseModeError;
    brackets: number;
    scanner: Scanner;
    tokens: AllTokens[];
}
export default function emmetAbbreviationMode(): CodeMirror.Mode<EmmetStylesheetModeState>;
export {};
