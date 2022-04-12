import Ship2xContainer from "../Player1Ships/Ship2x";
import Ships2x2Container from "../Player1Ships/Ships2x2";
import Ship2x3Container from "../Player1Ships/Ship2x3";
import Ship3x1Container from "../Player1Ships/Ship3x1";
import Ship3x2Container from "../Player1Ships/Ship3x2";
import Player1Board from "../Player1Board";
import app from '../App.module.css'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {setPlayer1Start} from '../action/Player1Reducer'
import {setPlayer2Start} from '../action/Player2Reducer'

function Player1Game(props) {
  return <div >
    <Player1Board/>
    <Ship2xContainer/>
    <Ships2x2Container/>
    <Ship2x3Container/>
    <Ship3x1Container/>
    <Ship3x2Container/>
    <div className={app.player}>First Player</div>
    {props.player1.activeCount<12?null:<button className={app.btn} onClick={()=>{
      return props.setPlayer1Start(),props.setPlayer2Start(true)
    }}><Link to='transition' className={app.link}>Next Player</Link></button>}
    </div>
}

let mapStateToProps=(state)=>{
  return {
    player1:state.player1
  }
}

export default connect(mapStateToProps,{setPlayer1Start,setPlayer2Start})(Player1Game)