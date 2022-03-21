import React from 'react'

export default class AboutSeries extends React.Component {
    render() {
        return (
        <>
             <h1>My Favorite television series is...</h1> 
             <h2>{this.props.data.series}</h2>   
             <img src="/img/entourage.jpeg" alt = "Entourage CREW" width="75%"></img><br></br>
             <p>{this.props.data.series} is an American comedy-drama television series that premiered in {this.props.data.year} on HBO with {this.props.data.seasons} seasons.</p><br></br>
            <p>My Favorite favorite character from Entourage is {this.props.data.character}</p><br></br>
            <img src="/img/turtle.jpeg" alt = "Turtle" width="75%"></img><br></br>
        </>
        )
    }
}