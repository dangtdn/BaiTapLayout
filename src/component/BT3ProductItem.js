import React, { Component } from 'react'

export default class BT3ProductItem extends Component {
    render() {
        return (
            <div>
  <div className="card h-100">
    <img className="card-img-top" src="http://placehold.it/500x325" alt />
    <div className="card-body">
      <h4 className="card-title">Card title</h4>
      <p className="card-text">
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
