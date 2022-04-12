import React, { useState } from "react"
import { connect } from "react-redux"
import app from '../App.module.css'
import {setColor,setShots1} from '../action/Player1Reducer'
import {setColor2,setShots2} from '../action/Player2Reducer'

function Game (props){
    const [player1,setPlayer1]=useState(true)
return player1?
props.player2shots===12?<span className={app.win}>First player Wins!!!</span>:<div>
        <div className={app.board}>
        {props.board2.map(b2=>{
        return <div style={{backgroundColor:b2.bgColor}} onClick={()=>{
        if(b2.isActive===true) return props.setColor2(b2.id),props.setShots2()
        return props.setColor2(b2.id),setPlayer1(false)
        }} key={b2.id} className={app.cell}>{b2.num}{b2.letter}</div>})}
    </div>
    <span className={app.player}>First Player Play</span>
    </div>:
    props.player1shots===12?<span className={app.win}>Second Player Wins!!!</span>:<div>
    <div className={app.board}>
        {props.board.map(b=>{
        return <div style={{backgroundColor:b.bgColor}} onClick={()=>{
            if(b.isActive===true) return props.setColor(b.id),props.setShots1()
            return props.setColor(b.id),setPlayer1(true)
        }} key={b.id} className={app.cell}>{b.num}{b.letter}</div>})}
    </div>
    <span className={app.player}>Second Player Play</span>
</div>
}

let mapStateToProps=(state)=>{
    return {
        board:state.player1.board,
        board2:state.player2.board2,
        player1shots:state.player1.player1shots,
        player2shots:state.player2.player2shots
    }
}
export default connect(mapStateToProps,{setColor,setColor2,setShots1,setShots2})(Game)