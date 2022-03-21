import React from 'react'
import Content from '../Content'

var contentArray = [
    {title: 'Series Summary', content: "Led by Vince, an actor deemed the next big thing, four buddies migrate west from Queens, N.Y. Usually within his reach are his less successful half brother, Drama; Vince's best friend, Eric; and their irrepressible pal, Turtle. As the foursome adjusts to Tinseltown's fast pace and frantic deal-making, Vince's take-charge agent, Ari, exerts his influence -- often to Eric's annoyance.", index:1},
    <br></br>,
    {title: "Dance Party", content: <img src='/img/dancing.gif' alt='Cast of New Girl Dancing' height='300px' />, index:3},
    <br></br>,
    {title: "Self Care", content:"I am not a successful adult. I don't eat vegetables and/or take care of myself. -Nick Miller", index:2},
    <br></br>,
    {title: "Rotten Tomatoes", content: <img src='/img/dancing.gif' alt='Rotten Tomatoes Review' height='300px' />, index:4},
    
]

export default class CreateContent extends React.Component {
     
   render() {
       var element = contentArray.map(post =>
           <Content
               key={post.index}
               title={post.title}
               content={post.content}>
           </Content>
       )       
       return (
            <>
            <h1>MORE CONTENT</h1>
            {element}
            </>
       )
    }
}           