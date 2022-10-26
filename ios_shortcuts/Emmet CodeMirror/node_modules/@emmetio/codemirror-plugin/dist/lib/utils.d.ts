/// <reference types="codemirror" />
import { AttributeToken } from '@emmetio/html-matcher';
import { CSSProperty, TextRange } from '@emmetio/action-utils';
/** Characters to indicate tab stop start and end in generated snippet */
export declare const tabStopStart: string;
export declare const tabStopEnd: string;
export declare const stateKey = "$$emmet";
export interface AbbrError {
    message: string;
    pos: number;
}
export interface CMRange {
    anchor: CodeMirror.Position;
    head: CodeMirror.Position;
}
export declare type DisposeFn = () => void;
export interface EmmetState {
    id: string;
    tracker?: DisposeFn | null;
    tagMatch?: DisposeFn | null;
}
export declare const pairs: {
    '{': string;
    '[': string;
    '(': string;
};
export declare const pairsEnd: string[];
/**
 * Returns copy of region which starts and ends at non-space character
 */
export declare function narrowToNonSpace(editor: CodeMirror.Editor, range: TextRange): TextRange;
/**
 * Replaces given range in editor with snippet contents
 */
export declare function replaceWithSnippet(editor: CodeMirror.Editor, range: TextRange, snippet: string): boolean;
/**
 * Returns current caret position for single selection
 */
export declare function getCaret(editor: CodeMirror.Editor): number;
/**
 * Returns full text content of given editor
 */
export declare function getContent(editor: CodeMirror.Editor): string;
/**
 * Returns substring of given editor content for specified range
 */
export declare function substr(editor: CodeMirror.Editor, range: TextRange): string;
/**
 * Converts given index range to editor’s position range
 */
export declare function toRange(editor: CodeMirror.Editor, range: TextRange): [CodeMirror.Position, CodeMirror.Position];
/**
 * Returns value of given attribute, parsed by Emmet HTML matcher
 */
export declare function attributeValue(attr: AttributeToken): string | undefined;
/**
 * Returns region that covers entire attribute
 */
export declare function attributeRange(attr: AttributeToken): TextRange;
/**
 * Returns patched version of given HTML attribute, parsed by Emmet HTML matcher
 */
export declare function patchAttribute(attr: AttributeToken, value: string | number, name?: string): string;
/**
 * Returns patched version of given CSS property, parsed by Emmet CSS matcher
 */
export declare function patchProperty(editor: CodeMirror.Editor, prop: CSSProperty, value: string, name?: string): string;
/**
 * Check if given value is either quoted or written as expression
 */
export declare function isQuoted(value: string | undefined): boolean;
export declare function isQuote(ch: string | undefined): boolean;
/**
 * Check if given string is quoted with single or double quotes
 */
export declare function isQuotedString(str: string): boolean;
export declare function isSpace(ch: string): boolean;
export declare function htmlEscape(str: string): string;
/**
 * Returns special object for bypassing command handling
 */
export declare function pass(editor: CodeMirror.Editor): any;
/**
 * Converts given CodeMirror range to text range
 */
export declare function textRange(editor: CodeMirror.Editor, range: CMRange): TextRange;
/**
 * Check if `a` and `b` contains the same range
 */
export declare function rangesEqual(a: TextRange, b: TextRange): boolean;
/**
 * Check if range `a` fully contains range `b`
 */
export declare function rangeContains(a: TextRange, b: TextRange): boolean;
/**
 * Check if given range is empty
 */
export declare function rangeEmpty(r: TextRange): boolean;
/**
 * Generates snippet with error pointer
 */
export declare function errorSnippet(err: AbbrError, baseClass?: string): string;
/**
 * Returns last element in given array
 */
export declare function last<T>(arr: T[]): T | undefined;
/**
 * Check if given editor instance has internal Emmet state
 */
export declare function hasInternalState(editor: CodeMirror.Editor): boolean;
/**
 * Returns internal Emmet state for given editor instance
 */
export declare function getInternalState(editor: CodeMirror.Editor): EmmetState;
