import React from "react";
// import "/.ClassLifeCycle";
class ClassLifeCycle extends React.Component{
    
    constructor() {
        super()
        this.state = {
            userList: [],
            val:{username:""},
            values: []
        }

    }
    handleChange = (event) => {
        this.setState({ val: event.target.value })
    }
    Submit = (e) => {
        e.preventDefault()
        this.setState({ values: [...this.state.values, this.state.val] })
        document.getElementById("myform").reset()
    }
    componentDidMount() {
       this.fetchData()
    }

    fetchData=()=>{
        console.log("Hiiii");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(res => {
                this.setState({ userList: res })
                console.log(res)
            })
    }

    render() {
        return (
            <div>
                <h1>ClassLifeCycleMethod</h1>
                <form id="myform">
                    <input type="text"
                        placeholder="User Name"
                        onChange={this.handleChange}></input>
                    <button onClick={this.Submit}>Submit</button>
                </form>
                <br/>
                <table >
                    <tr>
                        <th>User Name</th>
                    </tr>
                    <tr>
                        <td><ol>{this.state.userList.map((user) => (
                            <li>{user.username}</li>
                        ))
                        }
                            {
                                this.state.values.map((myInput) => (
                                    <li>{myInput}</li>
                                ))
                            }
                            </ol></td>
                    </tr>
                    
                </table>
            </div>
        )
    }
}
export default ClassLifeCycle