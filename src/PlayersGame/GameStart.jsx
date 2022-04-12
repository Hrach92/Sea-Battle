import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Game from "./Game";
import app from '../App.module.css'

function GameStart(props){
  const [queue,setQueue]=useState({play:true,
                                   player1:true,
                                   player2:false,
                                   game:false})
  function start(){
    if(props.player1.start){
      return <Link className={app.link2} onClick={()=>setQueue({play:true,player1:false,player2:true,game:false})} to={'player1'}>{queue.player1?'Start Game':null}</Link>
    }
    else if(props.player2.start){
      return <Link className={app.link2} onClick={()=>setQueue({play:true,player1:false,player2:false,game:true})} to={'player2'}>{queue.player2?'Next Player Start':null}</Link>
    }
    else{
      return <Link className={app.link2} onClick={()=>setQueue({play:true,player1:false,player2:false,game:false})} to='game'>{queue.game?'Game':null}</Link>
    }
  }
    return <div>
        {queue.play?start():null}
    </div>
}

let mapStateToProps=(state)=>{
    return {
      player1:state.player1,
      player2:state.player2
    }
  }

export default connect(mapStateToProps,{})(GameStart)