import React, { Component } from 'react'

export default class BT3SlideBar extends Component {
    render() {
        return (
            <div>
                <div id="accordion">
  <div className="card">
    <div className="card-header py-1 px-2 bg-white" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-controls="collapseOne">
          Category 1
        </button>
      </h5>
    </div>
    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body p-0">
        <ul className="list-group">
          <li className="list-group-item"><a href="#">link 1</a></li>
          <li className="list-group-item"><a href="#">link 2</a></li>
          <li className="list-group-item"><a href="#">link 3</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header py-1 px-2 bg-white" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-controls="collapseTwo">
          Category 2
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body p-0">
        <ul className="list-group">
          <li className="list-group-item"><a href="#">link 1</a></li>
          <li className="list-group-item"><a href="#">link 2</a></li>
          <li className="list-group-item"><a href="#">link 3</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header py-1 px-2 bg-white" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-controls="collapseThree">
          Category 3
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body p-0">
        <ul className="list-group">
          <li className="list-group-item"><a href="#">link 1</a></li>
          <li className="list-group-item"><a href="#">link 2</a></li>
          <li className="list-group-item"><a href="#">link 3</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

            </div>
        )
    }
}
