import React from 'react'

class ComponentTwo extends React.Component{

    componentWillUnmount(){
        console.log('Component Two Unmounted!!!');
    }

    render(){
        return(
            <div>
                <h2>Component Two</h2>
            </div>
        )
    }
}

export default ComponentTwo