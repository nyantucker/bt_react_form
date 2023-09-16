import React, { Component } from 'react'
import { connect } from 'react-redux';
import { SUA_SV, XOA_SV } from './Redux/constant';

export class Item extends Component {
  render() {
    console.log(this.props);
    let {ma,ten,sdt,mail}=this.props.sv
    return (
        <tr>
        <td>{ma}</td>
        <td>{ten}</td>
        <td>{sdt}</td>
        <td>{mail}</td>
        <td>
            <button onClick={() => { this.props.handleXoaSv(this.props.sv) }} className='btn btn-danger'>Xóa</button>
            <button className='btn btn-info'>Sửa</button>
        </td>
      </tr>
    )
  }
}


const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => { 
    return {
      handleXoaSv: (sv) => { 
        let action={
          type: XOA_SV,
          payload: sv,
        }
        dispatch(action)
       },
       handleSuaSv: (sv) => {
        let action={
            type: SUA_SV,
            payload: sv,
          }
          dispatch(action)
       }
    }
   }
  

export default connect(mapStateToProps, mapDispatchToProps)(Item)