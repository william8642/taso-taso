/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../styles/common.scss'

function Footers() {
  return (
    <>
      <div className="footbody d-flex bg-chin-footer justify-content-around">
        <div className="d-flex align-self-center footlink">
          <div className="aqualogo align-self-center"></div>
          <a href="" className="mt-2 nav-link">
            購物說明
          </a>
          <a href="" className="mt-2 nav-link">
            隱私權政策
          </a>
          <a href="" className="mt-2 nav-link">
            關於艸艸了事
          </a>
        </div>
        <p className="align-self-end">
          Copyright © 2020 艸艸了事. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Footers
