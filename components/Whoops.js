import React from 'react' 
import DarkBox from '../Layouts/DarkBox'
import { jsx } from 'theme-ui'

class Whoops extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStatefromError(e) {
        this.setState = {hasError: true}
    }

    componentDidCatch(e) {
        // Silence
    }

    render() {
        if (this.state.hasError) return (
            <h1 sx={{alignSelf: 'center', fontFamily: 'bold'}}>Live-Code. Amirght?</h1>
        )
        return this.props.children
        
    }
}

export default Whoops