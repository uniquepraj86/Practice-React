import React,{Component} from "react";
class UseEffect11 extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    componentDidMount(){
        Document.title =`Clicked ${this.state.count}times`
    }

    
    componentDidUpdate(prevProps,prevState){
        Document.title =`Clicked ${this.state.count}times`
    }

render(){
    return(
        <div>
            <button onClick={()=>this.setState({count:this.state.count+1})}>
                Click {this.state.count}</button>
        </div>
    )
}


}

export default UseEffect11