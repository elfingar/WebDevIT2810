import React, { Component } from 'react';

import SimpleCard from "./Components/SimpleCard";
import TabBar from "./Components/TabBar";
import InputBar from './Components/inputBar.js';
import DropDown from './Components/DropDown.js'
class App extends Component {

    render() {
    return (
        <div>
            <TabBar/>
            <InputBar/>
            <DropDown/>
            <SimpleCard title="Dette kan settes med props" description="Det kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her også" pris="OG prisen!" varenummer="10121514425"/>
            <SimpleCard  title="Dette kan settes med props" description="Det kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her også" pris="267" varenummer="10121514425"/>
            <SimpleCard  title="Dette kan settes med props" description="Det kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her også" pris="267" varenummer="10121514425"/>
            <SimpleCard  title="Dette kan settes med props" description="Det kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her også" pris="267" varenummer="10121514425"/>
            <SimpleCard  title="Dette kan settes med props" description="Det kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her også" pris="267" varenummer="10121514425"/>
            <SimpleCard  title="Dette kan settes med props" description="Det kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her også" pris="267" varenummer="10121514425"/>
            <SimpleCard  title="Dette kan settes med props" description="Det kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her ogsåDet kan det her også" pris="267" varenummer="10121514425"/>
        </div>

    );
  }
}

export default App;
