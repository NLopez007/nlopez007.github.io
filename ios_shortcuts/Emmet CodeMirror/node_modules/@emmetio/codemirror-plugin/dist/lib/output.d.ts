/// <reference types="codemirror" />
import { Options } from 'emmet';
export default function getOutputOptions(editor: CodeMirror.Editor, pos?: number, inline?: boolean): Partial<Options>;
/**
 * Produces tabstop for CodeMirror editor
 */
export declare function field(): (index: number, placeholder: string) => string;
/**
 * Returns indentation of given line
 */
export declare function lineIndent(editor: CodeMirror.Editor, line: number): string;
/**
 * Returns token used for single indentation in given editor
 */
export declare function getIndentation(editor: CodeMirror.Editor): string;
