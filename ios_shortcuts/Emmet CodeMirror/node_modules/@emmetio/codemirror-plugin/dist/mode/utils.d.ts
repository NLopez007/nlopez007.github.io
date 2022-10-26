/// <reference types="codemirror" />
import Scanner from '@emmetio/scanner';
export declare type ParseModeError = Error & {
    ch?: number;
};
interface State {
    parseError?: ParseModeError;
}
export declare function error(message: string, scanner: Scanner | CodeMirror.StringStream): ParseModeError;
export declare function unexpectedCharacter(stream: CodeMirror.StringStream, state: State, message?: string): string;
export declare function last<T>(arr: T[]): T;
export {};
