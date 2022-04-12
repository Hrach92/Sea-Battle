import React, { useState } from "react";
import Draggable from "react-draggable";
import { connect } from "react-redux";
import app from '../App.module.css'
import { setIsActive2, deactivate2, setDirection2, toHorizontal2 } from '../action/Player2Reducer'

const Ship3x1 = (props) => {
    const [pos, setPos] = useState({ x: 20, y: 120, prevX: 0, prevY: 0, rotate: false, styles: {} })
    const ondragStop = (e, position) => {
        const { x, y } = position
        if (props.ship3x2.isHorizontal&&x > 200 || x < 30 || y > -40 || y < -230) {
            alert('wrong')
        }
        else if ((!props.ship3x2.isHorizontal&&y >= -60 )||x >= 240 || x < 40 || y <-230) {
            alert('wrong')
        }
        else if (Math.abs(x) % 20 !== 0 && Math.abs(y) % 20 !== 0) {
            let posX = x - x % 20
            let posY = e.pageY - e.pageY % 20
            if (Math.abs(y) % 20 < 10) {
                return props.deactivate2(pos.prevX, pos.prevY, props.ship3x2.length, props.ship3x2.isHorizontal), setPos({
                    ...pos,
                    x: x - x % 20,
                    y: y - y % 20,
                    prevX: posX,
                    prevY: posY
                }), props.setIsActive2(posX, posY, props.ship3x2.length, props.ship3x2.isHorizontal)
            }
            else {
                return props.deactivate2(pos.prevX, pos.prevY, props.ship3x2.length, props.ship3x2.isHorizontal), setPos({
                    ...pos,
                    x: x - x % 20,
                    y: y - (y % 20) - 20,
                    prevX: posX,
                    prevY: posY
                }), props.setIsActive2(posX, posY, props.ship3x2.length, props.ship3x2.isHorizontal)
            }
        }
    }
    const changeDirectionToDown = () => {
        return setPos({ ...pos, styles: { 'flexDirection': 'column', height: 'auto' } }), props.setDirection2(props.ship3x2), props.deactivate2(pos.prevX, pos.prevY, props.ship3x2.length, true), props.setIsActive2(pos.prevX, pos.prevY, props.ship3x2.length, false)
    }
    const changeDirectionToUp = () => {
        return setPos({ ...pos, styles: { 'flexDirection': 'row', height: 'auto' } }), props.toHorizontal2(props.ship3x2), props.deactivate2(pos.prevX, pos.prevY, props.ship3x2.length, false), props.setIsActive2(pos.prevX, pos.prevY, props.ship3x2.length, true)
    }
    return <Draggable position={{ x: pos.x, y: pos.y }} onStop={ondragStop}>
        <div className={app.ship3x} style={pos.styles} onDoubleClick={() => {
            (props.ship3x2.isHorizontal && pos.y < 0) ? changeDirectionToDown() : changeDirectionToUp()
        }}>
            {props.ship3x2.shoted.map(s => <div key={s.id} className={app.shipCell}></div>)}
        </div>
    </Draggable>
}

let mapStateToProps = (state) => {
    return {
        ship3x2: state.player2.ship3x2
    }
}
export default connect(mapStateToProps, { setIsActive2, deactivate2, setDirection2, toHorizontal2 })(Ship3x1)