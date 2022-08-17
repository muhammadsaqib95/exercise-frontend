import React, { Component } from 'react'

export default class Test extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick ()  {
        // this.setState({
        //     count: this.state.count + 1,
        // })
        this.setState(prevState => ({
            count: prevState.count + 1,
        }))
        // alert('hello')

    }
    RedenerPrint ({data, onClick}) {
        return (
            <div
            onClick={onClick}
            className="cursor-pointer select-none"
            >count : {data}</div>
          )
    }
  render() {
    return (
        // this.redenerPrint()
        <this.RedenerPrint data={this.state.count} onClick={this.handleClick.bind(this)} />
    )
  }
}
