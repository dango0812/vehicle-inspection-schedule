import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
    margin: 0,
    padding: 0,
    fontFamily: "Spoqa Han Sans Neo, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
    fontWeight: 'normal',
    lineHeight: '135%',
    letterSpacing: '-0.025rem'
});

globalStyle('*', {
    boxSizing: 'border-box'
});