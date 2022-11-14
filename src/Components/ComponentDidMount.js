import React from "react";
class LifecycleMethod extends React.Component{

    constructor() {  
        super();  
        this.state = {
            userList : []
        };  
        
     }  
    componentDidMount(){
        fetch("http://jsonplaceholder.typicode.com/users")
        .then(response =>response.json())
        .then(res => {
            this.setState({userList:res})
            console.log(res);
        })
        // console.log("Hiiiii")
    }
    render(){
        return(
            <div>
                <h1>Lifecycle Method</h1>
                <ul>
                    {
                        this.state.userList.map((user)=>(
                            <li>{user.username}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default LifecycleMethod;
