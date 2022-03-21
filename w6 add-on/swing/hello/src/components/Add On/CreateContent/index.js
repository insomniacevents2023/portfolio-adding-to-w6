import React from 'react'
import Content from '../Content'

var contentArray = [
    {title: 'Hard Times', content: "The economy stinks, bees are dying, and movies are pretty much all sequels now. -Schmidt", index:1},
    <br></br>,
    {title: "Dance Party", content: <img src='/img/dancing.gif' alt='Cast of New Girl Dancing' height='300px' />, index:3},
    <br></br>,
    {title: "Self Care", content:"I am not a successful adult. I don't eat vegetables and/or take care of myself. -Nick Miller", index:2},
    <br></br>,
    {title: "Dance Party", content: <img src='/img/dancing.gif' alt='Cast of New Girl Dancing' height='300px' />, index:4},
    
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