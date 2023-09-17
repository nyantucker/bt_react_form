import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CAPNHAT_SV, CHANGE_FORM, THEM_SV } from './Redux/constant';

export class Form extends Component {
  render() {
    
    let {ma,ten,sdt,mail} = this.props
    console.log(this.props);
    return (
      <div>
        <h1 className='bg-dark text-light'>THÔNG TIN SINH VIÊN</h1>
        <div className='row'>
                <div className="form-group col-6 text-left">
                    <label htmlFor>Mã SV</label>
                    <input onChange={this.props.handleChangeForm} name="ma" value={ma} type="text" className="form-control" id placeholder />
                </div>
                <div className="form-group col-6 text-left">
                    <label htmlFor>Họ Tên</label>
                    <input onChange={this.props.handleChangeForm} name="ten" value={ten} type="text" className="form-control" id placeholder />
                </div>
                <div className="form-group col-6 text-left">
                    <label htmlFor>Số điện thoại</label>
                    <input onChange={this.props.handleChangeForm} name="sdt" value={sdt} type="text" className="form-control" id placeholder />
                </div>
                <div className="form-group col-6 text-left">
                    <label htmlFor>Email</label>
                    <input onChange={this.props.handleChangeForm} name="mail" value={mail} type="text" className="form-control" id placeholder />
                </div>
        </div>
        <button disabled={this.props.validThem} onClick={() => { this.props.handleThemSv({ma,ten,sdt,mail})}} className='btn btn-success mx-5'>Thêm sinh viên</button>
        <button disabled={this.props.validCapNhat} onClick={() => { this.props.handleCapNhat({ma,ten,sdt,mail},this.props.indexEdit)}} className='btn btn-info mx-5'>Cập nhật sinh viên</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    ma: state.svReducer.ma,
    ten: state.svReducer.ten,
    sdt: state.svReducer.sdt,
    mail: state.svReducer.mail,
    dssv: state.svReducer.dssv,
    indexEdit: state.svReducer.indexEdit,
    validThem: state.svReducer.validThem,
    validCapNhat: state.svReducer.validCapNhat,
  }
}

const mapDispatchToProps = (dispatch) => { 
  return {
    handleThemSv: (sv) => { 
      let action={
        type: THEM_SV,
        payload: sv,
      }
      dispatch(action)
     },
    handleChangeForm: (e) => { 
      let action={
        type: CHANGE_FORM,
        payload: e,
      }
      dispatch(action)
    },
    handleCapNhat: (sv,index) => {
      let action={
        type: CAPNHAT_SV,
        payload: {
          sv, index,
        }
      }
      dispatch(action)
    }
  }
 }


export default connect(mapStateToProps, mapDispatchToProps)(Form)
