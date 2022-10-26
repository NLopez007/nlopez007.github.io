/// <reference types="codemirror" />
import { UserConfig, AbbreviationContext, ExtractedAbbreviation, ExtractOptions, MarkupAbbreviation, StylesheetAbbreviation, SyntaxType } from 'emmet';
import { TextRange } from '@emmetio/action-utils';
import { ExtractOptions as MathExtractOptions } from '@emmetio/math-expression';
interface EvaluatedMath {
    start: number;
    end: number;
    result: number;
    snippet: string;
}
export interface ContextTag extends AbbreviationContext {
    open: TextRange;
    close?: TextRange;
}
export interface ExtractedAbbreviationWithContext extends ExtractedAbbreviation {
    context?: AbbreviationContext;
    inline?: boolean;
}
export declare const JSX_PREFIX = "<";
/**
 * Expands given abbreviation into code snippet
 */
export declare function expand(editor: CodeMirror.Editor, abbr: string | MarkupAbbreviation | StylesheetAbbreviation, config?: UserConfig): string;
/**
 * Extracts abbreviation from given source code by detecting actual syntax context.
 * For example, if host syntax is HTML, it tries to detect if location is inside
 * embedded CSS.
 *
 * It also detects if abbreviation is allowed at given location: HTML tags,
 * CSS selectors may not contain abbreviations.
 * @param code Code from which abbreviation should be extracted
 * @param pos Location at which abbreviation should be expanded
 * @param syntax Syntax of abbreviation to expand
 */
export declare function extract(code: string, pos: number, type?: SyntaxType, options?: Partial<ExtractOptions>): ExtractedAbbreviation | undefined;
/**
 * Returns list of tags for balancing for given code
 */
export declare function balance(code: string, pos: number, inward?: boolean, xml?: boolean): import("@emmetio/html-matcher").BalancedTag[];
/**
 * Returns list of selector/property ranges for balancing for given code
 */
export declare function balanceCSS(code: string, pos: number, inward?: boolean): import("@emmetio/css-matcher").Range[];
/**
 * Returns model for selecting next/previous item
 */
export declare function selectItem(code: string, pos: number, isCSS?: boolean, isPrevious?: boolean): void | import("@emmetio/action-utils").SelectItemModel;
/**
 * Finds and evaluates math expression at given position in line
 */
export declare function evaluateMath(code: string, pos: number, options?: Partial<MathExtractOptions>): EvaluatedMath | undefined;
/**
 * Returns matched HTML/XML tag for given point in view
 */
export declare function getTagContext(editor: CodeMirror.Editor, pos: number, xml?: boolean): ContextTag | undefined;
/**
 * Returns Emmet options for given character location in editor
 */
export declare function getOptions(editor: CodeMirror.Editor, pos: number): UserConfig;
export {};
