import React, { Component } from 'react'

export default class BT3ProductItem extends Component {
    render() {
        return (
            <div>
  <div className="card h-100">
    <img className="card-img-top" src="http://placehold.it/700x400" alt />
    <div className="card-body">
      <h4 className="card-title text-primary">Item</h4>
      <p className="card-text">
        <span className='font-weight-bold'>$24.99</span><br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Sapiente esse necessitatibus neque.
      </p>
    </div>
    <div className="card-footer">
      <span style={{fontSize: 12, color: 'grey'}} className="fa fa-star checked" />
      <span style={{fontSize: 12, color: 'grey'}} className="fa fa-star checked" />
      <span style={{fontSize: 12, color: 'grey'}} className="fa fa-star checked" />
      <span style={{fontSize: 12, color: 'silver'}} className="fa fa-star" />
      <span style={{fontSize: 12, color: 'silver'}} className="fa fa-star" />
    </div>
  </div>
</div>



        )
    }
}
