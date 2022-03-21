import React from 'react'

export default class AboutSeries extends React.Component {
    render() {
        return (
        <>
             <h1>My Favorite television series is...</h1> 
             <h2>{this.props.data.series}</h2>   
             <img src="/img.Entourage.jpeg" alt = "Entourge CREW" width="75%"></img>
             <p>{this.props.data.series} is an American comedy-drama television series that premiered in {this.props.data.year} on HBO with {this.props.data.seasons} seasons.</p>
        )    <p>My Favorite favorite character from Entourage is {this.props.data.character}</p>
        </>
        )
    }
}