import React, { useEffect } from "react";
import { connect } from "react-redux";
import app from './App.module.css'

const Board=(props)=>{
    useEffect(()=>{
        console.log('f')
    })
    debugger
    return <div className={app.board}>
        {props.board.map(b=><div  className={app.cell}>{b.num}{b.letter}</div>)}
    </div>
}

let mapStateToProps=(state)=>{
    return {
        board:state.player1.board
    }
}

export default connect(mapStateToProps,{})(Board)