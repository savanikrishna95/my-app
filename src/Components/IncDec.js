import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { IncNumber } from "./actions";
import { DecNumber , changetext } from "./actions";

const IncDec = () => {
  const dispatch = useDispatch();
  const mystate = useSelector( (state) =>  state.ChangetheNumber);

  const mystate1 = useSelector( (state) =>  state.Changethetext);
  console.log(mystate,"mystate")


    return(
        <>
        <button onClick={() => dispatch(IncNumber())}>Inc</button>
        <input type="text" name="INCDECREMR" value={mystate}/>
        <button onClick={ () =>   dispatch(DecNumber()) }> Dec</button>
        <input type="text" name="dikka" onChange={(e) => dispatch(changetext(e.target.value))} /> 
        <h1>{mystate1}</h1>
        </>
    )
}

export default IncDec;