import React from "react";
import arr from '../boardState'
let SETACTIVE2 = 'SETACTIVE2'
let DEACTIVATE2 = 'DEACTIVATE2'
let SETDIRECTION2='SETDIRECTION2'
let TOHORIZONTAL2='TOHORIZONTAL2'
let SETSTART='SETSTART'
let SETCOLOR2='SETCOLOR2'
let SETSHOTS2='SETSHOTS2'

let initialState = {
    player2shots:0,
    start:false,
    board2: [...arr],
    activeCount2:0,
    ship2x1: {
        length: 2,
        id:1,
        isHorizontal: true,
        shoted: [{ shot: false, id: Math.random() },
        { shot: false, id: Math.random() }
        ]
    },
    ship2x2: {
        length: 2,
        id:2,
        isHorizontal: true,
        shoted: [{ shot: false, id: Math.random() },
        { shot: false, id: Math.random() }
        ]
    },
    ship2x3: {
        length: 2,
        id:3,
        isHorizontal: true,
        shoted: [{ shot: false, id: Math.random() },
        { shot: false, id: Math.random() }
        ]
    },
    ship3x1: {
        length: 3,
        id:4,
        isHorizontal: true,
        shoted: [
            { shot: false, id: Math.random() },
            { shot: false, id: Math.random() },
            { shot: false, id: Math.random() }
        ]
    },
    ship3x2: {
        length: 3,
        id:5,
        isHorizontal: true,
        shoted: [
            { shot: false, id: Math.random() },
            { shot: false, id: Math.random() },
            { shot: false, id: Math.random() }
        ]
    }
}

const BoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETSHOTS2:
            return {
                ...state,
                player2shots:state.board2.filter(b2=>b2.bgColor==='red').length
            }
        case SETCOLOR2:
            return {
                ...state,
                board2:state.board2.map(b2=>{
                    if(b2.id===action.id&&b2.isActive===true){
                        return b2={...b2,bgColor:'red'}
                    }
                    else if(b2.id===action.id&&b2.isActive===false){
                        return b2={...b2,bgColor:'black'}
                    }
                    return b2
                })
            }
        case SETSTART:
            return {
                ...state,
                start:action.start
            }
        case SETACTIVE2: {
            for (let i = 0; i < state.board2.length; i++) {
                if (state.board2[i].posX === action.x && state.board2[i].posY === action.y && action.length === 2&&action.isHorizontal) {
                    state.board2[i] = { ...state.board2[i], isActive: true }
                    state.board2[i + 1] = { ...state.board2[i + 1], isActive: true }
                    break
                }
                else if (state.board2[i].posX === action.x && state.board2[i].posY === action.y && action.length === 2&&!action.isHorizontal) {
                    state.board2[i] = { ...state.board2[i], isActive: true }
                    state.board2[i + 11] = { ...state.board2[i + 11], isActive: true }
                    break
                }
                else if (state.board2[i].posX === action.x && state.board2[i].posY === action.y && action.length === 3&&action.isHorizontal) {
                    state.board2[i] = { ...state.board2[i], isActive: true }
                    state.board2[i + 1] = { ...state.board2[i + 1], isActive: true }
                    state.board2[i + 2] = { ...state.board2[i + 2], isActive: true }
                    break
                }
                else if (state.board2[i].posX === action.x && state.board2[i].posY === action.y && action.length === 3&&!action.isHorizontal) {
                    state.board2[i] = { ...state.board2[i], isActive: true }
                    state.board2[i + 11] = { ...state.board2[i + 1], isActive: true }
                    state.board2[i + 22] = { ...state.board2[i + 22], isActive: true }
                    break
                }
            }
            return {
                ...state,
                board2:[... state.board2.map(v => v)],
                activeCount2:state.board2.filter(v=>v.isActive===true).length
            }
        }
        case DEACTIVATE2: {
            for (let i = 0; i < state.board2.length; i++) {
                if (state.board2[i].posX === action.x && state.board2[i].posY === action.y && action.length === 2&&action.isHorizontal) {
                    state.board2[i] = { ...state.board2[i], isActive: false }
                    state.board2[i + 1] = { ...state.board2[i + 1], isActive: false }
                    break
                }
                else if (state.board2[i].posX === action.x && state.board2[i].posY === action.y && action.length === 2&&!action.isHorizontal) {
                    state.board2[i] = { ...state.board2[i], isActive: false }
                    state.board2[i + 11] = { ...state.board2[i + 11], isActive: false }
                    break
                }
                else if (state.board2[i].posX === action.x && state.board2[i].posY === action.y && action.length === 3&&action.isHorizontal) {
                    state.board2[i] = { ...state.board2[i], isActive: false }
                    state.board2[i + 1] = { ...state.board2[i + 1], isActive: false }
                    state.board2[i + 2] = { ...state.board2[i + 2], isActive: false }
                    break
                }
                else if (state.board2[i].posX === action.x && state.board2[i].posY === action.y && action.length === 3&&!action.isHorizontal) {
                    state.board2[i] = { ...state.board2[i], isActive: false }
                    state.board2[i + 11] = { ...state.board2[i + 11], isActive: false }
                    state.board2[i + 22] = { ...state.board2[i + 22], isActive: false }
                    break
                }
            }
            return {
                ...state,
                board2: [...state.board2.map(v => v)],
                activeCount2:state.board2.filter(v=>v.isActive===true).length
            }
        }
        case SETDIRECTION2:
        if(state.ship2x1==action.ship){
            return {
                ...state,
                ship2x1:{
                    ...state.ship2x1,
                    isHorizontal:false
                }
            }
        }
        else if(state.ship2x2==action.ship){
            return {
                ...state,
                ship2x2:{
                    ...state.ship2x2,
                    isHorizontal:false
                }
            }
        }
        else if(state.ship2x3==action.ship){
            return {
                ...state,
                ship2x3:{
                    ...state.ship2x3,
                    isHorizontal:false
                }
            }
        }
        else if(state.ship3x1==action.ship){
            return {
                ...state,
                ship3x1:{
                    ...state.ship3x1,
                    isHorizontal:false
                }
            }
        }
        else if(state.ship3x2==action.ship){
            return {
                ...state,
                ship3x2:{
                    ...state.ship3x2,
                    isHorizontal:false
                }
            }
        }
        case TOHORIZONTAL2:
            if(state.ship2x1==action.ship){
                return {
                    ...state,
                    ship2x1:{
                        ...state.ship2x1,
                        isHorizontal:true
                    }
                }
            }
            else if(state.ship2x2==action.ship){
                return {
                    ...state,
                    ship2x2:{
                        ...state.ship2x2,
                        isHorizontal:true
                    }
                }
            }
            else if(state.ship2x3==action.ship){
                return {
                    ...state,
                    ship2x3:{
                        ...state.ship2x3,
                        isHorizontal:true
                    }
                }
            }
            else if(state.ship3x1==action.ship){
                return {
                    ...state,
                    ship3x1:{
                        ...state.ship3x1,
                        isHorizontal:true
                    }
                }
            }
            else if(state.ship3x2==action.ship){
                return {
                    ...state,
                    ship3x2:{
                        ...state.ship3x2,
                        isHorizontal:true
                    }
                }
            }
        default:
            return state
    }
}

export default BoardReducer

export let setIsActive2 = (x, y, length,isHorizontal) => {
    return { type: SETACTIVE2, x, y, length,isHorizontal }
}
export let deactivate2 = (x, y, length,isHorizontal) => {
    return { type: DEACTIVATE2, x, y, length ,isHorizontal}
}
export let setDirection2=(ship)=>{
    return {type:SETDIRECTION2,ship}
}
export let toHorizontal2=(ship)=>{
    return {type:TOHORIZONTAL2,ship}
}
export let setPlayer2Start=(start)=>{
    return {type:SETSTART,start}
}
export let setColor2=(id)=>{
    return {type:SETCOLOR2,id}
}
export let setShots2=()=>{
    return {type:SETSHOTS2}
}