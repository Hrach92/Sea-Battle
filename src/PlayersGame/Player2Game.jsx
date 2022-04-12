import Ship2xContainer from "../Player2Ships/Ship2x";
import Ships2x2Container from "../Player2Ships/Ships2x2";
import Ship2x3Container from "../Player2Ships/Ship2x3";
import Ship3x1Container from "../Player2Ships/Ship3x1";
import Ship3x2Container from "../Player2Ships/Ship3x2";
import Player2Board from "../Player2Board";
import { Link } from "react-router-dom";
import app from '../App.module.css'
import {setPlayer2Start} from '../action/Player2Reducer'
import { connect } from "react-redux";

function Player2Game(props) {
  return <div >
    <Player2Board/>
    <Ship2xContainer/>
    <Ships2x2Container/>
    <Ship2x3Container/>
    <Ship3x1Container/>
    <Ship3x2Container/>
    <div className={app.player}>Second Player</div>
    {props.player2.activeCount2<12?null:<button className={app.btn} onClick={()=>{
      props.setPlayer2Start(false)
    }}><Link to='transition' className={app.link}>Start Game</Link></button>}
    </div>
}

let mapStateToProps=(state)=>{
  return {
    player2:state.player2
  }
}

export default connect(mapStateToProps,{setPlayer2Start})(Player2Game)
