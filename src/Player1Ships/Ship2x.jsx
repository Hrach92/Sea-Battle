import React, { useState } from "react";
import Draggable from "react-draggable";
import { connect } from "react-redux";
import app from '../App.module.css'
import { setIsActive, deactivate, setDirection, toHorizontal } from '../action/Player1Reducer'

const Ship2x = (props) => {
    const [pos, setPos] = useState({ x: 20, y: 0, prevX: 0, prevY: 0, rotate: false, styles: {} })
    const ondragStop = (e, position) => {
        const { x, y } = position
        if (props.ship2x1.isHorizontal&&x >= 220 || x < 40 || y >-30 || y <-230) {
            alert('wrong')
        }
        else if ((!props.ship2x1.isHorizontal&&y > -60)||x >= 240 || x < 40 || y <-230) {
            alert('wrong')
        }
        else if (Math.abs(x) % 20 !== 0 && Math.abs(y) % 20 !== 0) {
            let posX = x - x % 20
            let posY = e.pageY - e.pageY % 20
            if (Math.abs(y) % 20 < 10) {
                return props.deactivate(pos.prevX, pos.prevY, props.ship2x1.length, props.ship2x1.isHorizontal), setPos({
                    ...pos,
                    x: x - x % 20,
                    y: y - y % 20,
                    prevX: posX,
                    prevY: posY
                }), props.setIsActive(posX, posY, props.ship2x1.length, props.ship2x1.isHorizontal)
            }
            else {
                return props.deactivate(pos.prevX, pos.prevY, props.ship2x1.length, props.ship2x1.isHorizontal), setPos({
                    ...pos,
                    x: x - x % 20,
                    y: y - (y % 20) - 20,
                    prevX: posX,
                    prevY: posY
                }), props.setIsActive(posX, posY, props.ship2x1.length, props.ship2x1.isHorizontal)
            }
        }
    }
    const changeDirectionToDown = () => {
        return setPos({ ...pos, styles: { 'flexDirection': 'column', height: 'auto' } }), props.setDirection(props.ship2x1), props.deactivate(pos.prevX, pos.prevY, props.ship2x1.length, true), props.setIsActive(pos.prevX, pos.prevY, props.ship2x1.length, false)
    }
    const changeDirectionToUp = () => {
        return setPos({ ...pos, styles: { 'flexDirection': 'row', height: 'auto' } }), props.toHorizontal(props.ship2x1), props.deactivate(pos.prevX, pos.prevY, props.ship2x1.length, false), props.setIsActive(pos.prevX, pos.prevY, props.ship2x1.length, true)
    }
    return <Draggable position={{ x: pos.x, y: pos.y }} onStop={ondragStop}>
        <div className={app.ship2x} style={pos.styles} onDoubleClick={() => {

            (props.ship2x1.isHorizontal && pos.y < 0) ? changeDirectionToDown() : changeDirectionToUp()
        }}>
            {props.ship2x1.shoted.map(s => <div key={s.id} className={app.shipCell}></div>)}
        </div>
    </Draggable>
}

let mapStateToProps = (state) => {
    return {
        ship2x1: state.player1.ship2x1
    }
}
export default connect(mapStateToProps, { setIsActive, deactivate, setDirection, toHorizontal })(Ship2x)