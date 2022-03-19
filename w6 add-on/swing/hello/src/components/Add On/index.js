import React from 'react'

export default class Example extends React.Component {
    render() {
        return <p>My Favorite show is {this.props.show}, and my favorite character is from it is {this.props.character}</p>
    }
}