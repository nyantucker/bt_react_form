import { message } from "antd";
import { CAPNHAT_SV, CHANGE_FORM, RENDER_DS, SUA_SV, THEM_SV, XOA_SV } from "./constant"

const initialState = {
    dssv: [],
    ma: "",
    ten: "",
    sdt: "",
    mail: "",
    indexEdit: "",
    validThem: "",
    validCapNhat: "disable"
}

export let svReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_FORM: {
      console.log(payload.target);
      var {name,value} = payload.target
      return {...state, [name]:value}
    }
    case THEM_SV:{
        let cloneDssv = [...state.dssv]
        cloneDssv.push(payload)
        console.log(cloneDssv);
        message.success("Thêm thành công")
        return {...state, dssv: cloneDssv}
    }
    case XOA_SV:{
        let cloneDssv = [...state.dssv]
        let index = cloneDssv.indexOf(payload)
        cloneDssv.splice(index,1)
        message.success("Đã xóa sinh viên")
        return {...state, dssv: cloneDssv}
    }
    case SUA_SV:{
      message.warning("Bắt đầu sửa")
      let cloneDssv = [...state.dssv] 
      let index = cloneDssv.indexOf(payload)
      return {...state, ma:payload.ma,ten:payload.ten,sdt:payload.sdt,mail:payload.mail,indexEdit:index,validThem:"disable",validCapNhat:""}
    }
    case CAPNHAT_SV:{
      let cloneDssv = [...state.dssv] 
      cloneDssv[payload.index] = payload.sv
      message.success("Cập nhật thành công")
      return {...state, dssv: cloneDssv,validThem:"",validCapNhat:"disable"}
    }
  default:
    return state
  }
}
