import React, { Component } from 'react'
import { connect } from 'react-redux';
import { THEM_SV } from './Redux/constant';

export class Form extends Component {
  state = {
      ma: "",
      ten: "",
      sdt: "",
      mail: "",
  }
  handleChangeForm = (e) => {
    console.log(e.target);
    var {name,value} = e.target
    this.setState({
        [name]:value
    })
  }
  render() {
    return (
      <div>
        <h1 className='bg-dark text-light'>THÔNG TIN SINH VIÊN</h1>
        <div className='row'>
                <div className="form-group col-6 text-left">
                    <label htmlFor>Mã SV</label>
                    <input onChange={this.handleChangeForm} name="ma" value={this.state.ma} type="text" className="form-control" id placeholder />
                </div>
                <div className="form-group col-6 text-left">
                    <label htmlFor>Họ Tên</label>
                    <input onChange={this.handleChangeForm} name="ten" value={this.state.ten} type="text" className="form-control" id placeholder />
                </div>
                <div className="form-group col-6 text-left">
                    <label htmlFor>Số điện thoại</label>
                    <input onChange={this.handleChangeForm} name="sdt" value={this.state.sdt} type="text" className="form-control" id placeholder />
                </div>
                <div className="form-group col-6 text-left">
                    <label htmlFor>Email</label>
                    <input onChange={this.handleChangeForm} name="mail" value={this.state.mail} type="text" className="form-control" id placeholder />
                </div>
        </div>
        <button onClick={() => { this.props.handleThemSv(this.state) }} className='btn btn-success'>Thêm sinh viên</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    dssv: state.svReducer.dssv
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
     }
  }
 }


export default connect(mapStateToProps, mapDispatchToProps)(Form)
