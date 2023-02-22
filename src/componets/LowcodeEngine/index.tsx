import React,{useEffect} from "react";
import startEngine from "./engine"
import "./index.less"
export default ()=>{
    useEffect(()=>{
        startEngine()
    })
    return <div id="lce-container"></div>
}