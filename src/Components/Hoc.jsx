import React, { useState } from 'react'

export default function Hoc(OrginalComponent) {
  const WrappedCompo = (props) => {
    console.log(props,"props    ")
    const [incdata, setIncData] = useState(0)

    const incfun = () => {
        setIncData(incdata + 1)
    }
    const deccfun = () => {
        setIncData(incdata - 1)
    }
    const resetfun = () => {
        setIncData(0)
    }


    return(
    <OrginalComponent IncFun= {incfun} decFun= {deccfun} resetFun= {resetfun} value={incdata} {...props}>{props.children}</OrginalComponent>)
  }

  return WrappedCompo
}


