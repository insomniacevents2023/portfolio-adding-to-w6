import React from 'react'
import Content from '../Content'

var contentArray = [
    {title: 'Series Summary', content: "Led by Vince, an actor deemed the next big thing, four buddies migrate west from Queens, N.Y. Usually within his reach are his less successful half brother, Drama; Vince's best friend, Eric; and their irrepressible pal, Turtle. As the foursome adjusts to Tinseltown's fast pace and frantic deal-making, Vince's take-charge agent, Ari, exerts his influence -- often to Eric's annoyance.", index:1},
    <br></br>,
    {title: "Cast and Crew", content: <img src='/img/dancing.gif' alt='Cast of New Girl Dancing' height='300px' />, index:2},
    <br></br>,
    {title: "Celeberty Cameo Appearances", content:"Over the course of the 8 seasons, Entourage hired on celebrity cameo apperances on the show. Those name include Mark Walburg (the man behind the show), Kanye West, Sasha Grey, Bob Saget, Mike Tyson, and Jessica Simpson. Just to name a few", index:3},
    <br></br>,
    {title: "Rotten Tomatoes", content: <img src='/img/dancing.gif' alt='Rotten Tomatoes Review' height='300px' />, index:4},
    
]

export default class CreateContent extends React.Component {
     
   render() {
       var element = contentArray.map(post =>
           <post
               key={post.index}
               title={post.title}
               content={post.content}>
           </post>
       )       
       return (
            <>
            <h1>MORE CONTENT</h1>
            {element}
            </>
       )
    }
}           