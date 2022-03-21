import React from 'react'

export default class AboutMovie extends React.Component {
    render() {
        return (
        <>
             <h1>My Favorite show is...</h1> 
             <h2>{this.props.data.show}</h2>   
             <img src="/img.Entourage.jpeg" alt = "Entourge CREW" width="75%"></img>
             <p>{this.props.data.show} is an American comedy-drama television series that premiered on {this.props.data.year} on HBO with {this.props.data.seasons} seasons.</p>
        )    <p>My Favorite favorite character from Entourage is {this.props.data.character}</p>
        </>
        )
    }
}