import React from 'react'

function Review(props) {
    return (
        <div className="bg-white rounded-3 d-flex flex-column p-md-2 justify-content-between">
            <div className="font-weight-bold"><strong>cust1 Name </strong></div>
            <div >This apricots are very beautiful to look at and quite apealing.</div>
            <div className=" d-flex">
            <div className="p-md-1"> February 10, 2021</div>
            </div>
        </div>
    )
}

export default Review

