import React from 'react'
import { tailwind } from '@theme-ui/presets'
import Provider from './Provider'
import components from 'mdx-deck'
import DarkBox from './layouts/DarkBox'
import Prism from '@theme-ui/prism'
import vsDark from '@theme-ui/prism/presets/vs-dark.json'
import Whoops from './components/Whoops'

import {
    Column,
    Enter,
    Editor,
    Card
} from './components'


export default {
    ...tailwind,
    colors: {
        ...tailwind.colors,
        background: tailwind.colors.gray[9]
    },
    styles: {
        ...tailwind.styles,
        h1: {
            ...tailwind.styles.h1,
            fontSize: [8],
            letterSpacing: 1.5,
            py: [4],
            textTransform: 'uppercase',
            background: `linear-gradient(121deg, rgba(249,140,241,1) 0%, rgba(136,8,195,1) 55%, rgba(63,80,250,1) 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        },
        h2: {
          ...tailwind.styles.h2,
            fontSize: [8],
            py: [4],
            textTransform: 'uppercase',
            background: `linear-gradient(102deg, rgba(140,249,242,1) 0%, rgba(8,131,195,1) 55%, rgba(63,250,108,1) 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        },
        h3: {
          ...tailwind.styles.h3,
            fontSize: [8],
            py: [4],
            textTransform: 'uppercase',
            background: `linear-gradient(102deg, rgba(246,93,76,1) 0%, rgba(139,8,195,1) 55%, rgba(250,63,189,1) 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        blockquote: {
          ...tailwind.styles.h1,
            position: "relative",
            fontSize: [8],
            py: [4],
            textTransform: 'uppercase',
            background: `linear-gradient(102deg, rgba(140,249,242,1) 0%, rgba(8,131,195,1) 55%, rgba(63,250,108,1) 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            maxWidth: "2/3",
            textAlign: "left",
            "::before": {
              content: "'“'",
              fontSize: [8],
            },
            "::after": {
              content: "'”'",
              fontSize: [8],
            }
        },
        hr: {
          ...tailwind.styles.h4,
          backgroundColor: "none",
          borderBottom: '2px dashed white',
          width: "100%"
        },
        pre: {
          ...vsDark,
          py: 4,
          px: 6,
          textAlign: 'left',
          borderRadius: "xl",
          boxShadow: "xl",
          backgroundColor: "#0C0C0C",
          ".comment": {
            color: "yellow.4"
          },
        },
        p: {
          ...tailwind.styles.p,
          "code": {
            color: "yellow.3"
          }
        },
        li: {
          ...tailwind.styles.li,
          listStyleType: 'none',
          lineHeight: "tight",
          letterSpacing: 1.5,
          "code": {
            color: "yellow.3"
          }
        }
    },
    components: {
        DarkBox,
        Column,
        Enter,
        Editor,
        Card,
        Whoops,
        pre: ({ children }) => <div>{children}</div>,
        code: Prism,
        ul: ({children}) => {
          return <ul><Enter>{children}</Enter></ul>},
        HiBlue: (props) => <span style={{
          background: `linear-gradient(102deg, rgba(140,249,242,1) 0%, rgba(8,131,195,1) 55%, rgba(63,250,108,1) 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          }} {...props} />,
        ...components
    },
    Provider,
  }
