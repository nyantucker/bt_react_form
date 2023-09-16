import { RENDER_DS, SUA_SV, THEM_SV, XOA_SV } from "./constant"

const initialState = {
    dssv: [],
    editSV: {}
}

export let svReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case THEM_SV:{
        let cloneDssv = [...state.dssv]
        cloneDssv.push(payload)
        console.log(cloneDssv);
        return {...state, dssv: cloneDssv}
    }
    case XOA_SV:{
        let cloneDssv = [...state.dssv]
        let index = cloneDssv.indexOf(payload)
        cloneDssv.splice(index,1)
        return {...state, dssv: cloneDssv}
    }
    case SUA_SV:{
      let cloneDssv = [...state.dssv]
      let index = cloneDssv.indexOf(payload)
      return {...state, editSV: payload}
    }
  default:
    return state
  }
}
