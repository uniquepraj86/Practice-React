import React from 'react'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

class LifeCycleMethods extends React.Component{

    constructor(){
        super()
        this.state={
            number:0
        }
    }

    componentDidMount(){
        console.log('hiiiiii '+this.state.number);
    }

    componentDidUpdate(){
        console.log('hellooooo '+this.state.number);
    }

    handlechange=()=>{
        // this.setState({number:this.state.number+1})
        this.setState({number:this.state.number===0 ? 1:0})
    }

    render(){

        const component= this.state.number ? <ComponentOne/> : <ComponentTwo/>

        return(
            <div>
                <h1>Life Cycle Methods!!!</h1>
                <p>Number : {this.state.number}</p>
                <button type='button' onClick={this.handlechange}>Change</button>
                {component}
            </div>
        )
    }
}

export default LifeCycleMethods