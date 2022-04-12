import React from "react";
import arr from '../boardState'
let SETACTIVE = 'SETACTIVE'
let DEACTIVATE = 'DEACTIVATE'
let SETDIRECTION='SETDIRECTION'
let TOHORIZONTAL='TOHORIZONTAL'
let SETSTART='SETSTART'
let SETCOLOR='SETCOLOR'
let SETSHOTS1='SETSHOTS1'

let initialState = {
    player1shots:0,
    start:true,
    board:[...arr],
    activeCount:0,
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
        case SETSHOTS1:
            return {
                ...state,
                player1shots:state.board.filter(b=>b.bgColor==='red').length
            }
        case SETCOLOR:
        return {
            ...state,
            board:state.board.map(b=>{
                if(b.id===action.id&&b.isActive===true){
                    return b={...b,bgColor:'red'}
                }
                else if(b.id===action.id&&b.isActive===false){
                    return b={...b,bgColor:'black'}
                }
                return b
            })
        }
        case SETSTART:
            return {
                ...state,
                start:false
            }
        case SETACTIVE: {
            for (let i = 0; i < state.board.length; i++) {
                if (state.board[i].posX === action.x && state.board[i].posY === action.y && action.length === 2&&action.isHorizontal) {
                    state.board[i] = { ...state.board[i], isActive: true }
                    state.board[i + 1] = { ...state.board[i + 1], isActive: true }
                    break
                }
                else if (state.board[i].posX === action.x && state.board[i].posY === action.y && action.length === 2&&!action.isHorizontal) {
                    state.board[i] = { ...state.board[i], isActive: true }
                    state.board[i + 11] = { ...state.board[i + 11], isActive: true }
                    break
                }
                else if (state.board[i].posX === action.x && state.board[i].posY === action.y && action.length === 3&&action.isHorizontal) {
                    state.board[i] = { ...state.board[i], isActive: true }
                    state.board[i + 1] = { ...state.board[i + 1], isActive: true }
                    state.board[i + 2] = { ...state.board[i + 2], isActive: true }
                    break
                }
                else if (state.board[i].posX === action.x && state.board[i].posY === action.y && action.length === 3&&!action.isHorizontal) {
                    state.board[i] = { ...state.board[i], isActive: true }
                    state.board[i + 11] = { ...state.board[i + 1], isActive: true }
                    state.board[i + 22] = { ...state.board[i + 22], isActive: true }
                    break
                }
            }
            return {
                ...state,
                board: [...state.board.map(v => v)],
                activeCount:state.board.filter(v=>v.isActive===true).length
            }
        }
        case DEACTIVATE: {
            for (let i = 0; i < state.board.length; i++) {
                if (state.board[i].posX === action.x && state.board[i].posY === action.y && action.length === 2&&action.isHorizontal) {
                    state.board[i] = { ...state.board[i], isActive: false }
                    state.board[i + 1] = { ...state.board[i + 1], isActive: false }
                    break
                }
                else if (state.board[i].posX === action.x && state.board[i].posY === action.y && action.length === 2&&!action.isHorizontal) {
                    state.board[i] = { ...state.board[i], isActive: false }
                    state.board[i + 11] = { ...state.board[i + 11], isActive: false }
                    break
                }
                else if (state.board[i].posX === action.x && state.board[i].posY === action.y && action.length === 3&&action.isHorizontal) {
                    state.board[i] = { ...state.board[i], isActive: false }
                    state.board[i + 1] = { ...state.board[i + 1], isActive: false }
                    state.board[i + 2] = { ...state.board[i + 2], isActive: false }
                    break
                }
                else if (state.board[i].posX === action.x && state.board[i].posY === action.y && action.length === 3&&!action.isHorizontal) {
                    state.board[i] = { ...state.board[i], isActive: false }
                    state.board[i + 11] = { ...state.board[i + 11], isActive: false }
                    state.board[i + 22] = { ...state.board[i + 22], isActive: false }
                    break
                }
            }
            return {
                ...state,
                board:[...state.board.map(v => v)],
                activeCount:state.board.filter(v=>v.isActive===true).length
            }
        }
        case SETDIRECTION:
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
        case TOHORIZONTAL:
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

export let setIsActive = (x, y, length,isHorizontal) => {
    return { type: SETACTIVE, x, y, length,isHorizontal }
}
export let deactivate = (x, y, length,isHorizontal) => {
    return { type: DEACTIVATE, x, y, length ,isHorizontal}
}
export let setDirection=(ship)=>{
    return {type:SETDIRECTION,ship}
}
export let toHorizontal=(ship)=>{
    return {type:TOHORIZONTAL,ship}
}
export let setPlayer1Start=()=>{
    return {type:SETSTART}
}
export let setColor=(id)=>{
    return {type:SETCOLOR,id}
}
export let setShots1=()=>{
    return {type:SETSHOTS1}
}