import { globalStyle } from '@vanilla-extract/css';
import { ALL_SEMANTIC_TAGS, setHeadingStyles } from './theme.css';

globalStyle('html', {
    WebkitTextSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(0, 29, 58, 0.18) transparent'
});

globalStyle('body', {
    fontFamily: 'Spoqa Han Sans Neo, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif',
    WebkitFontSmoothing: 'antialiased',
    wordBreak: 'keep-all',
    overflowWrap: 'break-word'
});

globalStyle('*', {
    boxSizing: 'border-box'
});

globalStyle(ALL_SEMANTIC_TAGS, {
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: 'baseline'
});

globalStyle('h1, h2, h3, h4, h5, h6, p, span, strong, a, em', {
    marginBlock: 0
});

globalStyle('h1', setHeadingStyles('s60', 'bold', 'extra', 'widest'));
globalStyle('h2', setHeadingStyles('s48', 'bold', 'extra', 'wide'));
globalStyle('h3', setHeadingStyles('s36', 'bold', 'large', 'wide'));
globalStyle('h4', setHeadingStyles('s30', 'bold', 'large', 'tight'));
globalStyle('h5', setHeadingStyles('s24', 'medium', 'medium', 'tight'));
globalStyle('h6', setHeadingStyles('s20', 'medium', 'medium', 'normal'));
globalStyle('p, span', setHeadingStyles('s16', 'regular', 'medium', 'normal'));
globalStyle('strong', setHeadingStyles('s16', 'bold', 'medium', 'normal'));
