import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0);

  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] === "=") {
      if (/[0-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };

  const calculate = () => {
    setAnswer(eval(expression)); // eval is a regular JS function that evaluates the expression of a string
    setExpression((prev) => prev + "=");
  };

  const allClear = () => {
    setExpression("");
    setAnswer(0);
  };
  const clear = () => {
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setAnswer(0);
  };

  return (
    <div className="container">
      <div className="grid">
        <div id="display" onClick={display} className="dis">
          <input type="text" value={expression} placeholder="0" disabled />
          <div className="total">{answer}</div>
        </div>
        <div onClick={allClear} className="padButton AC tomato">
          AC
        </div>
        <div id="clear" onClick={clear} className="padButton C tomato">
          C
        </div>
        <div id="divide" onClick={() => display("/")} className="padButton div">
          /
        </div>
        <div
          id="multiply"
          onClick={() => display("*")}
          className="padButton times"
        >
          X
        </div>
        <div
          id="seven"
          onClick={() => display("7")}
          className="padButton seven dark-gray"
        >
          7
        </div>
        <div
          id="eight"
          onClick={() => display("8")}
          className="padButton eight dark-gray"
        >
          8
        </div>
        <div
          id="nine"
          onClick={() => display("9")}
          className="padButton nine dark-gray"
        >
          9
        </div>
        <div
          id="subtract"
          onClick={() => display("-")}
          className="padButton minus"
        >
          -
        </div>
        <div
          id="four"
          onClick={() => display("4")}
          className="padButton four dark-gray"
        >
          4
        </div>
        <div
          id="five"
          onClick={() => display("5")}
          className="padButton five dark-gray"
        >
          5
        </div>
        <div
          id="six"
          onClick={() => display("6")}
          className="padButton six dark-gray"
        >
          6
        </div>
        <div id="add" onClick={() => display("+")} className="padButton plus">
          +
        </div>
        <div
          id="one"
          onClick={() => display("1")}
          className="padButton one dark-gray"
        >
          1
        </div>
        <div
          id="two"
          onClick={() => display("2")}
          className="padButton two dark-gray"
        >
          2
        </div>
        <div
          id="three"
          onClick={() => display("3")}
          className="padButton three dark-gray"
        >
          3
        </div>
        <div id="equals" onClick={calculate} className="padButton equals blue">
          =
        </div>
        <div
          id="zero"
          onClick={() => display("0")}
          className="padButton zero dark-gray"
        >
          0
        </div>
        <div
          id="decimal"
          onClick={() => display(".")}
          className="padButton dot"
        >
          .
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
