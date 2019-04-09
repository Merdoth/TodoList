import React, { Component } from 'react'
import List from '../components/List'
import fetch from 'isomorphic-unfetch'


export default class App extends Component {

    constructor (props) {
        super()
        this.state = {
            term: '',
            items:[...props.items],
            list: [],
        };
    }
    static async getInitialProps () {
        const res = await fetch('http://localhost:8000/api/todos')
        const {todos} = await res.json()
        return { items: todos }
      }
    onChange = (event) => {
        this.setState({ term: event.target.value });
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }
    deleteItem = (index, selectedItem)=> {
        const test = this.state.items.filter(item => item != selectedItem);
        this.setState({
            items: [...test]
        })
        return console.log(index, selectedItem, test)
    }
    render() {
        return (
           <div>
           <form className="App" onSubmit={this.onSubmit}>
                <input value={this.state.term} onChange={this.onChange} />
                <button>Submit</button>
            </form>
            <List items={this.state.items} deleteItem={this.deleteItem}/>
           </div>
        );
    }
}