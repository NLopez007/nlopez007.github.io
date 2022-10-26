/// <reference types="codemirror" />
import { UserConfig } from 'emmet';
import { AbbreviationTrackingController, EditorProxy, AbbreviationTracker, StopTrackingParams, StartTrackingParams } from '@emmetio/action-utils';
export interface CompletionItem {
    text: string;
    displayText: string;
    hint(): void;
    from: CodeMirror.Position;
    to: CodeMirror.Position;
}
declare class CMEditorProxy implements EditorProxy {
    cm: CodeMirror.Editor;
    marker: CodeMirror.TextMarker | null;
    preview: CodeMirror.Editor | null;
    forcedMarker: HTMLElement | null;
    get id(): string;
    substr(from?: number, to?: number): string;
    replace(value: string, from: number, to: number): void;
    syntax(): string;
    size(): number;
    config(pos: number): UserConfig;
    outputOptions(pos: number, inline?: boolean): Partial<import("emmet").Options>;
    previewConfig(config: UserConfig): {
        options: {
            'output.field': typeof previewField;
            'output.indent': string;
            'output.baseIndent': string;
            inlineElements?: string[] | undefined;
            'output.newline'?: string | undefined;
            'output.tagCase'?: "" | "lower" | "upper" | undefined;
            'output.attributeCase'?: "" | "lower" | "upper" | undefined;
            'output.attributeQuotes'?: "single" | "double" | undefined;
            'output.format'?: boolean | undefined;
            'output.formatLeafNode'?: boolean | undefined;
            'output.formatSkip'?: string[] | undefined;
            'output.formatForce'?: string[] | undefined;
            'output.inlineBreak'?: number | undefined;
            'output.compactBoolean'?: boolean | undefined;
            'output.booleanAttributes'?: string[] | undefined;
            'output.reverseAttributes'?: boolean | undefined;
            'output.selfClosingStyle'?: "html" | "xml" | "xhtml" | undefined;
            'output.text'?: import("emmet/dist/src/config").TextOutput | undefined;
            'markup.href'?: boolean | undefined;
            'comment.enabled'?: boolean | undefined;
            'comment.trigger'?: string[] | undefined;
            'comment.before'?: string | undefined;
            'comment.after'?: string | undefined;
            'bem.enabled'?: boolean | undefined;
            'bem.element'?: string | undefined;
            'bem.modifier'?: string | undefined;
            'jsx.enabled'?: boolean | undefined;
            'stylesheet.keywords'?: string[] | undefined;
            'stylesheet.unitless'?: string[] | undefined;
            'stylesheet.shortHex'?: boolean | undefined;
            'stylesheet.between'?: string | undefined;
            'stylesheet.after'?: string | undefined;
            'stylesheet.intUnit'?: string | undefined;
            'stylesheet.floatUnit'?: string | undefined;
            'stylesheet.unitAliases'?: import("emmet/dist/src/config").SnippetsMap | undefined;
            'stylesheet.json'?: boolean | undefined;
            'stylesheet.jsonDoubleQuotes'?: boolean | undefined;
            'stylesheet.fuzzySearchMinScore'?: number | undefined;
        };
        syntax?: string | undefined;
        context?: import("emmet").AbbreviationContext | undefined;
        text?: string | string[] | undefined;
        maxRepeat?: number | undefined;
        cache?: import("emmet/dist/src/config").Cache | undefined;
        type?: "markup" | "stylesheet" | undefined;
        variables?: import("emmet/dist/src/config").SnippetsMap | undefined;
        snippets?: import("emmet/dist/src/config").SnippetsMap | undefined;
    };
    allowTracking(pos: number): boolean;
    mark(tracker: AbbreviationTracker): void;
    unmark(): void;
    showPreview(tracker: AbbreviationTracker): void;
    hidePreview(): void;
    /**
     * Check if given syntax is a CSS dialect (including SCSS, LESS etc)
     */
    isCSS(syntax: string): boolean;
    syntaxType(syntax: string): import("emmet").SyntaxType;
    /**
     * Check if given syntax is a HTML dialect. HTML dialects also support embedded
     * stylesheets in `<style>` tga or `style=""` attribute
     */
    isHTML(syntax: string): boolean;
    /**
     * Check if given syntax is a XML dialect. Unlike HTML, XML dialects doesn’t
     * support embedded stylesheets
     */
    isXML(syntax: string): boolean;
    /**
     * Check if given syntax is a JSX dialect
     */
    isJSX(syntax: string): boolean;
    /**
     * Runs given callback in context of given editor
     */
    run<R>(editor: CodeMirror.Editor, callback: () => R): R;
    private disposeMarker;
}
declare function previewField(index: number, placeholder: string): string;
export default function initAbbreviationTracker(editor: CodeMirror.Editor): () => void;
/**
 * Runs given function in context of abbreviation tracker
 */
export declare function runInTrackerContext<R>(editor: CodeMirror.Editor, callback: (controller: AbbreviationTrackingController<CMEditorProxy>, proxy: CMEditorProxy) => R): R;
/**
 * Check if abbreviation tracking is allowed in editor at given location
 */
export declare function allowTracking(editor: CodeMirror.Editor, pos: number): boolean;
/**
 * Check if Emmet auto-complete is enabled
 */
export declare function isEnabled(editor: CodeMirror.Editor, pos: number): boolean;
/**
 * If allowed, tries to extract abbreviation from given completion context
 * @param forceValid Enforces tracker to be valid, e.g. do not track abbreviation
 * if it’s not valid
 */
export declare function extractTracker(editor: CodeMirror.Editor, pos: number, forceValid?: boolean): AbbreviationTracker | undefined;
/**
 * Returns abbreviation tracker for given editor, if any
 */
export declare function getTracker(editor: CodeMirror.Editor): AbbreviationTracker | undefined;
/**
 * Start abbreviation tracking in given editor for given range
 */
export declare function startTracking(editor: CodeMirror.Editor, start: number, pos: number, params?: Partial<StartTrackingParams>): import("@emmetio/action-utils").AbbreviationTrackerValid | import("@emmetio/action-utils").AbbreviationTrackerError | undefined;
/**
 * Stops abbreviation tracking in given editor
 */
export declare function stopTracking(editor: CodeMirror.Editor, params?: Partial<StopTrackingParams>): void;
/**
 * Returns completion item, suitable for auto-hint CodeMirror module,
 * with tracked abbreviation for it
 */
export declare function getCompletion(editor: CodeMirror.Editor, pos: number): CompletionItem | undefined;
/**
 * Restore tracker on undo, if possible
 */
export declare function restoreOnUndo(editor: CodeMirror.Editor, pos: number, abbr: string): void;
/**
 * Check if tracker range contains given position
 */
export declare function contains(tracker: AbbreviationTracker, pos: number): boolean;
export {};
