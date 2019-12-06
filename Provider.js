/** @jsx jsx */
import { jsx } from 'theme-ui'
import 'animate.css'
import Whoops from './components/Whoops'

export default ({children, ...props}) => {
    return (
        <div {...props}>
            <Whoops>
            {children}
            </Whoops>
            <p sx={{position: 'absolute', fontSize: 3, color: "gray.5", fontFamily: 'body', right: 60, bottom: 30}}>@motleydev</p>
        </div>
)}