import React from 'react'
import Content from '../Content'

var contentArray = [
    {}
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