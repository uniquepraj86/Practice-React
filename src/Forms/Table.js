import React from "react";
import "./PropsStyle.css"
function Table(props) {
  return (
    <div className="child">
      <div >
        <table className="tb">
          <thead>
            <tr> 
            <div className="info">
              <th>Name</th>
                <th>Email</th>
                <th>Passward</th>
                <th>City</th>
                </div>
            </tr>
         </thead>
           {props.data.map((val,index)=>{
            return(
                <tbody key={index}>

                    <tr>
                        <td >{val.name}</td>
                        <td >{val.email}</td>
                        <td >{val.password}</td>
                        <td >{val.city}</td>
                    </tr>
                </tbody>
            
            )
        })
        }
        </table>
      </div>
    </div>
  );
}

export default Table