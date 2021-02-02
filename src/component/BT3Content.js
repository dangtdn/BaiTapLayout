import React, { Component } from 'react'
import BT3Carousel from './BT3Carousel'
import BT3ProductList from './BT3ProductList'

export default class BT3Content extends Component {
    render() {
        return (
            <div>
  <div className="row">
    <div className="col-md-10">
      <BT3Carousel/>
      </div>
    <div className="col-md-10">
      <BT3ProductList/>
      </div>
  </div>
</div>

        )
    }
}
