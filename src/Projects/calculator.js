import React from "react";
import "./cal.css";

function Calculator() {
  const [no1, setno1] = React.useState();
  const [no2, setno2] = React.useState();
  const [addition, setAdd] = React.useState();
  const [subs, setSubs] = React.useState();
  const [mult, setMul] = React.useState();
  const [division, setDiv] = React.useState();

  function getno1(number1) {
    setno1(parseInt(number1.target.value));
    console.log(number1.target.value);
  }

  function getno2(number2) {
    setno2(parseInt(number2.target.value));
    console.log(number2.target.value);
  }

  const addNums = () => {
    let add = no1 + no2;
    setAdd(add);
  };
  const subNums = () => {

    let sub = no1 - no2;
    setSubs(sub);

  };

  const mulNums = () => {
    let mul = no1 * no2;
    setMul(mul);

  };

  const divNums = () => {
    let div = no1 / no2;
    setDiv(div);

  };

  return (
    <form className="con">

      <br />
      <h1 class="display-1">
        <h1>Airthmetic Operation</h1>
      </h1>
      <div className="inf">
        <br />
        <span className="container">
          <label className="label">Enter No :</label>
          <input
            type="num"
            placeholder="First Number"
            onChange={getno1}
            className="label"
          ></input>
        </span>
        <br />
        <br />
        <span className="container">
          <label className="label">Enter No :</label>
          <input
            type="num"
            placeholder="Second Number"
            onChange={getno2}
            className="label"
          ></input>
        </span>


      </div>
      <br />
      <br />
      <div className="dis">
        {/* For Addition : */}
        <div style={{ display: "flex"}}>
          <div>
            <button type="button" onClick={addNums}>
              ADDITION
            </button>
          </div>
          <br />
          <br />
          {addition ? (
            <div className="output">
              <mark>Addition</mark> of the 'Numbers'  :{addition}
            </div>
          ) : null}
        </div>


        <br />

        {/* For Substraction : */}
        <div style={{ display: "flex" }}>
          <div>
            <button type="button" onClick={subNums}>
              SUBSTRACTION
            </button>:-
          </div>
          <br />
          <br />

          {subs ? (
            <div className="output">
              <mark>Substraction</mark> of the 'Numbers' :{subs}
            </div>
          ) : null}
        </div>
        <br />
        {/* For Multiplication */}
        <div style={{ display: "flex" }}>
          <div>
            <button type="button" onClick={mulNums}>
              MULTIPLICATION
            </button> :-
          </div>
          <br />
          <br />

          {mult ? (
            <div className="output">
              <mark>Multiplication</mark> of the 'Numbers':{mult}
            </div>
          ) : null}
        </div>
        <br />


        {/* For Division : */}
        <div style={{ display: "flex" }}>
               <div>
                  <button type="button" onClick={divNums}>
                     DIVISION
                    
                   </button> :-
                 </div>

          <br />

          <div id="div" className="output"></div>
          {division ? (
            <div className="output">
              <mark>Division</mark> of the 'Numbers':{division}
            </div>

           ) : null}
           </div>
           {/* For Division : */}
        </div>
        <br />
   
    </form>
  );
}

export default Calculator;
