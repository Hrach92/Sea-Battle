import React, { useEffect } from "react";
import { connect } from "react-redux";
import app from './App.module.css'

const Board=(props)=>{
    useEffect(()=>{
        console.log('f')
    })
    return <div className={app.board}>
        {props.board2.map(b=><div  className={app.cell}>{b.num}{b.letter}</div>)}
    </div>
}

let mapStateToProps=(state)=>{
    return {
        board2:state.player2.board2
    }
}

export default connect(mapStateToProps,{})(Board)