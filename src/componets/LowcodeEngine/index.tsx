import React,{useEffect} from "react";
import startEngine from "./engine"
import Preview from "./preview"
import "./index.less"
const Workbench =  ()=>{
    useEffect(()=>{
        startEngine()
    })
    return <div id="lce-container"></div>
}

export {Preview,Workbench}