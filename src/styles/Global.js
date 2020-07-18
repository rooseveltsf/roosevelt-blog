import { createGlobalStyle } from "styled-components";
import media from 'styled-media-query';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  html {
    overflow-y: scroll;
  }

  body{
    --title:${({ dark }) => dark ? '#f7f7f7' : '#3B3B3B'} ;
    --text: ${({ dark }) => dark ? '#D1CCCC' : '#575656'};
    
    --textLink: ${({ dark }) => dark ? '#eee' : '#707070'};
    /* ${({ dark }) => dark ? '' : ''}; */

    --textDescription: ${({ dark }) => dark ? '#eee' : '#707070'};

    --border: ${({ dark }) => dark ? '#383d45' : '#D1CCCC'};
    --background: ${({ dark }) => dark ? '#1b2027' : '#f7f7f7' };

    --backgroundHeader: ${({ dark }) => dark ? '#222831' : '#eee'};
    --borderHeader: ${({ dark }) => dark ? '#383d45' : '#DEDEDE'};
  }

  /* body.light {
    --title: #3B3B3B;
    --text: #575656;
    
    --textLink: #707070;

    --textDescription: #707070;

    --border: #D1CCCC;
    --background: #f7f7f7;

    --backgroundHeader: #eee;
    --borderHeader: #DEDEDE;
  } */

  body {
    background: var(--background);
    color: var(--text);
    line-height: 1;
    font-size: 100%;
    font-family: Roboto;
    transition: all 0.5s;
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background: var(--backgroundHeader);

    ${media.lessThan('medium')`
      background: transparent;
    `}
  }

  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.18);
  }

  ::-webkit-scrollbar-thumb:vertical {
    background: rgba(0, 0, 0, 0.5);
  }

  ::-webkit-scrollbar-thumb:vertical:active {
    background: rgba(0, 0, 0, 0.61);
  }

  pre::-webkit-scrollbar {
    height: 8px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  pre::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }

  pre::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
  }

  pre::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.5);
  }
`

export default GlobalStyles