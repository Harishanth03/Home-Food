import React from 'react'

import './AppDownload.css'

import {assets} from '../../assets/assets'

const AppDownload = () => {
  return (

    <div className="app-download" id='app-download'>

        <p>For Better Experience Download <br /> <span className='color'>Food</span> & <span className='color'>Cool App</span></p>

        <div className="add-download-platform">

            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>

  )
}

export default AppDownload