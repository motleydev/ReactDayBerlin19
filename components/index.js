/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
  } from 'react-live'
  import { transform } from "@babel/core";
  import { useSteps } from 'mdx-deck'
  import Whoops from './Whoops'

// import useSteps

export const Column = ({
    width,
    height,
    alignItems = "center",
    justifyContent = "center",
    textAlign = alignItems,
    ...props
}) => <section sx={{
    width,
    height,
    alignItems,
    justifyContent,
    textAlign,
    flexGrow: 1,
    flexShrink: 1,
    display: 'flex',
    flexWrap: 'wrap',
}} {...props}/>

export const Enter = (props) => {
    const {enterClass = 'fadeInDown'} = props
    const length = React.Children.count(props.children)
    const step = useSteps(length)
    const els = React.Children.map(props.children, (el,index) => {
        const modEl = React.cloneElement(el, {
            style: {
                opacity: index + 1 < step ? 1 : 0
            },
            className: `${enterClass} ${index + 1 === step ? 'animated' : ''}`,
            ...el.props,
        })
        
        return modEl
    } )
    
    return els
}

export const Editor = ({noInline, code}) => {
    
    return (
    <Whoops>
    <LiveProvider noInline={noInline} code={code} transformCode={code => {
        const transformed = transform(code, {
          plugins: [
            require("@babel/plugin-proposal-nullish-coalescing-operator"),
            require("@babel/plugin-syntax-jsx"),
            [
              require("@babel/plugin-proposal-class-properties"),
              { loose: true }
            ]
          ]
        }).code;
        return transformed;
      }}>
        <Column width="2/3" height="full" css={{
            overflowY: 'scroll',
            fontSize: 32,
            "::-webkit-scrollbar": {
                opacity: 0
            }}}>
            <Whoops>
            <LiveEditor/>
            </Whoops>
        </Column>
        <Column width="1/3">
            <Whoops>
            <LivePreview />
            <LiveError style={{fontSize: 12}}/>
            </Whoops>
        </Column>
    </LiveProvider>
    </Whoops>)
}

export const Card = (props) => <section sx={{
    px: 4,
    py: 4,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'gray.2',
    borderStyle: 'solid',
    width: "2/5"
}} css={{
    ":nth-child(1n)": {
        color: "rgba(249,140,241,1)"
        
    },
    ":nth-child(2n)": {
        color: "rgba(246,93,76,1)"
    },
    ":nth-child(3n)": {
        color: "rgba(140,249,242,1)"
    },
}}{...props} />