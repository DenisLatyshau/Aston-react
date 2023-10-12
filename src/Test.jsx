import React, {Component} from "react";

export default class Test extends Component {
    constructor(props) {
        console.log('Constructor')
        super()
        this.state = {
            value: 0,
            label: ''
        }
    }

    onLabelChange = (e) => {
        this.setState({
          label: e.target.value
        })
      }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onChangeState(this.state.label)
        this.setState({
          label: ''
        })
      }     
      
    buttonHandler = (e) => {
        let nextValue = this.state.value
        nextValue++
        this.setState({value: nextValue})
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('ComponentDidMount')
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate')
    }

    render() {
        console.log('Render 1')
        return (
            <>
                {console.log('Render 2')}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Input text here" 
                        onChange={this.onLabelChange}
                        value={this.state.label}
                    />
                    <button onClick={this.buttonHandler}>Push me!</button>
                </form>
            </>
        )
    }
}