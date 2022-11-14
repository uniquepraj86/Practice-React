import React from 'react'

class ComponentOne extends React.Component{

    componentWillUnmount(){
        console.log('Component One Unmounted!!!');
    }

    render(){
        return(
            <div>
                <h2>Component One</h2>
            </div>
        )
    }
}

export default ComponentOne