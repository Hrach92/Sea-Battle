import { Link, Route, Routes, useParams } from "react-router-dom";
import Player1Game from "./PlayersGame/Player1Game";
import app from './App.module.css'
import { useState } from "react";
import Player2Game from "./PlayersGame/Player2Game";
import GameStart from "./PlayersGame/GameStart";
import Game from "./PlayersGame/Game";

function App() {
  const [play,setPlay]=useState(false)
  return <div className={app.img}>
    {play?null:<GameStart/>}
    <Routes>
      <Route path='player1' element={<Player1Game/>}/>
      <Route path='player2' element={<Player2Game/>}/>
      <Route path='game' element={<Game/>}/>
      <Route path='transition' element={<GameStart/>}/>
    </Routes>
    </div>
}

export default App;
