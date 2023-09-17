import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RENDER_DS } from './Redux/constant'
import Item from './Item'

export class List extends Component {
  renderTbody = () => { 
    return this.props.dssv.map(((sv,index) => { 
        return <Item sv={sv} index={index}/>
     }))
 }
  render() {
    return (
      <div>
        <table class="table">
            <thead className='bg-dark text-light'>
                <tr>
                    <th>Mã SV</th>
                    <th>Họ Tên</th>
                    <th>Số Điện Thoại</th>
                    <th>Email</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
              {this.renderTbody()}
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    dssv: state.svReducer.dssv
  }
}

const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(List)