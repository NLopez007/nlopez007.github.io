import { UserConfig } from 'emmet';
import { MarkupAbbreviation } from '@emmetio/abbreviation';
import { CSSAbbreviation } from '@emmetio/css-abbreviation';
import CodeMirror from 'codemirror';
import { EmmetConfig, EmmetEditorOptions } from './lib/config';
export interface EmmetEditor extends CodeMirror.Editor {
    /**
     * Expands given abbreviation with options, defined for current editor
     */
    expandAbbreviation(abbr: string, options?: UserConfig): string;
    /**
     * Returns Emmet config for given location in editor
     */
    emmetOptions(pos?: number, withContext?: boolean): UserConfig;
    /** Parses given abbreviation to AST or throws exception if abbreviation is invalid */
    parseAbbreviation(abbr: string, type: 'markup' | 'jsx'): MarkupAbbreviation;
    parseAbbreviation(abbr: string, type: 'stylesheet'): CSSAbbreviation;
    getEmmetCompletion(pos: number | CodeMirror.Position): CompletionItem;
}
interface CompletionItem {
    text: string;
    displayText: string;
    hint(): void;
    from: CodeMirror.Position;
    to: CodeMirror.Position;
}
/**
 * Registers Emmet extension on given CodeMirror constructor.
 * This file is designed to be imported somehow into the app (CommonJS, ES6,
 * Rollup/Webpack/whatever). If you simply want to add a <script> into your page
 * that registers Emmet extension on global CodeMirror constructor, use
 * `browser.js` instead
 */
export default function registerEmmetExtension(CM: typeof CodeMirror): void;
export { EmmetConfig, EmmetEditorOptions };
