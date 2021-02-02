import React, { Component } from 'react'
import BT3Content from './BT3Content'
import BT3Footer from './BT3Footer'
import BT3Header from './BT3Header'
import BT3SlideBar from './BT3SlideBar'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BT3Header/>
                <div className='container-fluid text-left'>
                    <div className='row pt-4'>
                        <div className='col-lg-2 col-md-4'>
                            <h2>Shop Name</h2>
                            <BT3SlideBar/>
                        </div>
                        <div className='col-lg-10 col-md-8'>
                            <BT3Content/>
                        </div>
                    </div>
                </div>
                <BT3Footer/>
            </div>
        )
    }
}
