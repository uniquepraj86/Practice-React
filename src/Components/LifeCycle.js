import React from "react";

class LifeCycle extends React.Component {
  componentDidMount(){
    console.log("hiii");
  }
  render() {
    return (
      <div>
        <h1>Lifecyclemethod</h1>
      </div>
    );
  }

}
export default LifeCycle;
