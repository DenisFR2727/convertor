import React,{useEffect,useState} from "react";
import "./Calc.css"
function Calc({rate,rateTwo}) {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevRow, setPrevRow] = useState(null);
  const [result, setResult] = useState(0);
  const [resultTwo, setResultTwo] = useState(0)
  if (rate !== prevRow) {
    setIsScrollingDown(prevRow !== null && rate > prevRow);
    setPrevRow(rate);
  }
console.log(rate)
const CalcRate =(e)=>{
      e.preventDefault()
      let elements = e.target.elements
      let countCurency = elements['count-currency'].value;
      let typeCurency = elements['type-currency'].value;
      setResult(countCurency / rate[typeCurency])
      // setResultTwo(countCurency / rateTwo[typeCurency])
      
}
const CalcRateTwo =(e)=>{
  e.preventDefault()
  let elements = e.target.elements
  let countCurency = elements['count-currencyTwo'].value;
  let typeCurency = elements['type-currencyTwo'].value;
  setResultTwo(countCurency / rateTwo[typeCurency])
  
}
  return (
    <div className="calculator">
      <h3> Калькулятор обмена</h3>
      <div className="block">
        <div>Я хочу в UAH</div>
        <div>
          <form onSubmit={CalcRate}>
            <input type="number" defaultValue={1} name="count-currency" />
            <select name="type-currency" id="">
              {Object.keys(rate).map((keyName,i)=>(
               <option key={keyName} value={keyName}>{keyName}</option>
          ))}
            </select>
            <input type="submit" defaultValue="calc" />
          </form>       
        </div>
        <div>
          <h4>Результат UAH:</h4>
          <ul className="calc-res">
            <li>{result}</li>
          
          </ul>
        </div>
        <div>Я хочу в USD</div>
          <form onSubmit={CalcRateTwo}>
            <input type="number" defaultValue={1} name="count-currencyTwo" />
            <select name="type-currencyTwo" id="">
              {Object.keys(rateTwo).map((keyName,i)=>(
               <option key={keyName} value={keyName}>{keyName}</option>
          ))}
            </select>
            <input type="submit" defaultValue="calc" />
          </form>
          <div>
          <h4>Результат USD:</h4>
          <ul className="calc-res">
            <li>{resultTwo}</li>
          
          </ul>
        </div>
      </div>
     
    </div>
  );
}
export default Calc;
