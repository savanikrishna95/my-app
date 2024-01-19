 import Hoc from "./Hoc"
  const CounterDemo = ({IncFun,decFun,resetFun,value}) => {
    return(
        <>
            <div>
                {value}
                <button onClick={IncFun} databinding = "true">INC</button>
                <button onClick={decFun}>DEC</button>
                <button onClick={resetFun}>Reset</button>
            </div>
        </>
    )
}

export default Hoc(CounterDemo)