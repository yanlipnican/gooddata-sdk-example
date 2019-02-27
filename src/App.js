import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {ColumnChart, PivotTable} from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';

const m1 = {
    "measure": {
        "localIdentifier": "m1",
        "definition": {"measureDefinition": {"item": {"uri": "/gdc/md/ux8xk21n3al4qr1akoz7j6xkl5dt1dqj/obj/1279"}}}
    }
};

const m2 = {
    "measure": {
        "localIdentifier": "m2",
            "definition": {"measureDefinition": {"item": {"uri": "/gdc/md/ux8xk21n3al4qr1akoz7j6xkl5dt1dqj/obj/1283"}}}
    }
}

const a1 = {
    "visualizationAttribute": {
        "displayForm": {"uri": "/gdc/md/ux8xk21n3al4qr1akoz7j6xkl5dt1dqj/obj/1027"},
        "localIdentifier": "a1"
    }
};

const a2 = {
    "visualizationAttribute": {
        "displayForm": {"uri": "/gdc/md/ux8xk21n3al4qr1akoz7j6xkl5dt1dqj/obj/952"},
        "localIdentifier": "a2"
    }
};

const a3 = {
    "visualizationAttribute": {
        "displayForm": {"uri": "/gdc/md/ux8xk21n3al4qr1akoz7j6xkl5dt1dqj/obj/1028"},
        "localIdentifier": "a3"
    }
}

const total_a1_m1 = {
    "measureIdentifier":"m1",
    "type":"sum",
    "attributeIdentifier":"a1"
};

const total_a2_m1_sum = {
    "measureIdentifier":"m1",
    "type":"sum",
    "attributeIdentifier":"a2"
};

const total_a2_m2_sum = {
    "measureIdentifier":"m2",
    "type":"sum",
    "attributeIdentifier":"a2"
};

const total_a2_m2_max = {
    "measureIdentifier":"m2",
    "type":"max",
    "attributeIdentifier":"a2"
};

const total_a3_m2_sum = {
    "measureIdentifier":"m2",
    "type":"sum",
    "attributeIdentifier":"a3"
};

const total_a3_m2_max = {
    "measureIdentifier":"m2",
    "type":"max",
    "attributeIdentifier":"a3"
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <div style={{height: 400, padding: 100}}>
                    <PivotTable
                        projectId="ux8xk21n3al4qr1akoz7j6xkl5dt1dqj"
                        measures={[m1, m2]}
                        rows={[a1, a2, a3]}
                        totals={[total_a1_m1, total_a2_m2_sum, total_a2_m2_max, total_a3_m2_sum, total_a3_m2_max]}
                        groupRows={true}
                    />
                </div>
                <div style={{height: 400, padding: 100}}>
                    <ColumnChart
                        projectId="ux8xk21n3al4qr1akoz7j6xkl5dt1dqj"
                        measures={[m1]}
                        viewBy={a2}
                    />
                </div>
            </div>
        );
    }
}

export default App;
