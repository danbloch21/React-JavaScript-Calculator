import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [expression, setExpression] = React.useState("");
  // eslint-disable-next-line no-lone-blocks
  {
    /* declare state variable expression and updater, with default value of an empty string */
  }
  const [answer, setAnswer] = React.useState(0);
  // eslint-disable-next-line no-lone-blocks
  {
    /* declare state variable answer and updater, with default value of 0 */
  }

  const display = (symbol) => {
    // eslint-disable-next-line no-lone-blocks
    {
      /* defines function applied by the onClick handler. Runs every time you click a number or symbol button */
    }
    setExpression((prev) => prev + symbol);
    // eslint-disable-next-line no-lone-blocks
    {
      /* setExpression takes previous expression and updates it by adding symbol passed to it from each button when onClick handler is activated */
    }

    if (expression[expression.length - 1] === "=") {
      if (/[0-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
      // eslint-disable-next-line no-lone-blocks
      {
        /** if a symbol button is pressed after hitting equals for a total, equals is replaced by the symbol so you can continue the calculation. If a number button is pressed, previous calculation is cleared and you can start afresh */
      }
    }
  };

  const calculate = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      /* defines function applied by onClick handler */
    }
    setAnswer(eval(expression)); // eval is a regular JS function that evaluates the expression of a string //
    setExpression((prev) => prev + "=");
  };

  const allClear = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      /* defines function applied by onClick handler */
    }
    setExpression("");
    setAnswer(0);
    // eslint-disable-next-line no-lone-blocks
    {
      /* resets input values and calculated totals to 0 */
    }
  };

  const clear = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      /* defines function applied by onClick handler */
    }
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setAnswer(0);
    // eslint-disable-next-line no-lone-blocks
    {
      /* clears only the last input value and resets calculated total to 0 */
    }
  };

  return (
    <div className="container">
      <div className="grid">
        <div id="display" onClick={display} className="dis">
          <input type="text" value={expression} placeholder="0" disabled />
          {/* displays the input value generated by expression updater as a string, plus a placeholder 0. Disabled means it can't be selected or altered */}
          <div className="total">{answer}</div>
          {/* displays the calculated total from updated answer */}
        </div>
        <div onClick={allClear} className="padButton AC tomato">
          AC
        </div>
        <div id="clear" onClick={clear} className="padButton C tomato">
          C
        </div>
        <div id="divide" onClick={() => display("/")} className="padButton div">
          /
          {/* onClick handler activates display function which updates symbol parameter generated from expression updater as a string */}
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
          ={/* equals button triggers calculate function above */}
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
