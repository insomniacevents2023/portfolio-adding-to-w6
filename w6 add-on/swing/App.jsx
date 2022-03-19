import LikeButton from './LikeButton.jsx'

class Post extends React.Component {
   render() {
      return (<div>
         <h1>{this.props.title}</h1>
         <div>{this.props.content}</div>
         <LikeButton></LikeButton>
      </div>)
   }
}
let contentArray = [
   { title: "First Post Title", content: "This is an amazing post about something interesting"},
   { title: "Second Post Title", content: "This is a 2nd post about something interesting"},
   { title: "Third Post Title", content: "This is another post about something interesting"}
]
// react Functional component
export default class App extends React.Component {
   render() {
      let aLikeButton = <LikeButton likeLabel="You loved this." />
      let element = contentArray.map(post =>
         <Post title={post.title}
            content={post.content}></Post>)
      return element;
   }//let element = React.createElement("div", {}, "Hello World!")
}
