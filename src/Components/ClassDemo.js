import React from "react"
class ClassDemo extends React.Component {
    constructor() {
        super()
        this.state = {
            val: "hii",
            values: []
        }
    }
    handleChange = (event) => {
        this.setState({ val: event.target.value })
    }
    addValues = (e) => {
        e.preventDefault()
        this.setState({ values: [...this.state.val] })
        document.getElementById("myform").reset()
    }
    render() {
        return (
            <div> 
                <h1> State Demo !!!</h1>
                <p>{this.state.values}</p>
                <form id="myform">
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit" onClick={this.addValues}> Add Values</button>

                </form>
                <ul>
                    {
                        this.state.values.map((x, index) => (
                            <li key={index}>{x}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default ClassDemo;
