import React from 'react'


export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    render(){
        return (
            <>
                 <h3>{this.props.title}</h3>
                 <div>{this.props.content}</div>
                 <p><button onClick={() => {this.setState({counter: this.state.counter + 1})}}>Likes: {this.state.counter}</button></p>
                 <p><button onClick={() => {this.setState({counter: this.state.counter + 1})}}>DisLikes: {this.state.counter}</button></p>
            </>     
        )
    }
}