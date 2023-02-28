import React from 'react'
import HubItems from 'renderer/components/HubItems/HubItems'
import TaskBar from '../../components/TaskBar/TaskBar'
import './Hub.css'
import okuma from "../../../assets/okuma.png"
import yazma from "../../../assets/yazma.png"
import izleme from "../../../assets/izleme.png"
import dinleme from "../../../assets/dinleme.png"
import oyun from "../../../assets/oyun.png"
import yonetim from "../../../assets/yönetim.png"

function Hub() {
  return (
    <div className='hub-container'>
      <HubItems icon={okuma} name="Okuma"/>
      <HubItems icon={yazma} name="Yazma"/>
      <HubItems icon={izleme} name="İzleme"/>
      <HubItems icon={dinleme} name="Dinleme"/>
      <HubItems icon={oyun} name="Oyun"/>
      <HubItems icon={yonetim} name="Yönetim"/>
      <TaskBar/>
    </div>
  )
}

export default Hub