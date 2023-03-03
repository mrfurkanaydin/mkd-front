import React, { useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import HubItems from "renderer/components/HubItems/HubItems";
import TaskBar from "../../components/TaskBar/TaskBar";
import "./Hub.css";
import okuma from "../../../assets/okuma.png";
import yazma from "../../../assets/yazma.png";
import izleme from "../../../assets/izleme.png";
import dinleme from "../../../assets/dinleme.png";
import oyun from "../../../assets/oyun.png";
import yonetim from "../../../assets/yönetim.png";
import Read from "renderer/programs/Read/Read";
import { useSelector } from "react-redux";
import Options from "renderer/programs/Options/Options";
import Write from "renderer/programs/Write/Write";
import Watch from "renderer/programs/Watch/Watch";
import Listen from "renderer/programs/Listen/Listen";
import Game from "renderer/programs/Game/Game";
import Manage from "renderer/programs/Manage/Manage";

function Hub() {


  return (
    <div className="hub-container">
      <div className="hub-hubitems">
        <HubItems icon={okuma} name="Okuma" />
        <HubItems icon={yazma} name="Yazma" />
        <HubItems icon={izleme} name="İzleme" />
        <HubItems icon={dinleme} name="Dinleme" />
        <HubItems icon={oyun} name="Oyun" />
        <HubItems icon={yonetim} name="Yönetim" />
      </div>
      <>
        <Read />
        <Write />
        <Watch/>
        <Listen/>
        <Game/>
        <Manage/>
        <Options />
      </>

      <TaskBar />
    </div>
  );
}

export default Hub;
