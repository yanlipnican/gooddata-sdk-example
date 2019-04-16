import React, { Component } from 'react';
import './App.css';
import '@gooddata/react-components/styles/css/main.css';
import { PivotTable } from '@gooddata/react-components';

class App extends Component {
    ref = null;

    componentDidMount() {
        this.ref.addEventListener('drill', (evt) => {
            console.log('drill event', evt.detail);
        });
    }

    onDrill = (drillEvent) => {
        console.log('onFiredDrillEvent', drillEvent);
        return true;
    };

    render() {
        // const projectId = 'ux8xk21n3al4qr1akoz7j6xkl5dt1dqj';
        const projectId = 'hzvp93huecapm943k1j0sncbdxeug4gv';

        const measures = [{
            measure: {
                localIdentifier: 'm1',
                definition: {
                    measureDefinition: {
                        item: {
                            uri: `/gdc/md/${projectId}/obj/9211`
                        }
                    }
                },
                title: 'm1'
            }
        }, {
            measure: {
                localIdentifier: 'm2',
                definition: {
                    measureDefinition: {
                        item: {
                            uri: `/gdc/md/${projectId}/obj/9203`
                        }
                    }
                },
                title: 'm2'
            }
        }];

        const rows = [{
            visualizationAttribute: {
                displayForm: {
                    uri: `/gdc/md/${projectId}/obj/1027`
                },
                localIdentifier: "a1"
            }
        }, {
            visualizationAttribute: {
                displayForm: {
                    uri: `/gdc/md/${projectId}/obj/64727`
                },
                localIdentifier: "a2"
            }
        }, {
            visualizationAttribute: {
                displayForm: {
                    uri: `/gdc/md/${projectId}/obj/1024`
                },
                localIdentifier: "a3"
            }
        }, {
            visualizationAttribute: {
                displayForm: {
                    uri: `/gdc/md/${projectId}/obj/1094`
                },
                localIdentifier: "a4"
            }
        }];

        const columns = [{
            visualizationAttribute: {
                displayForm: {
                    uri: `/gdc/md/${projectId}/obj/324`
                },
                localIdentifier: "a5"
            }
        }];

        const totals = [{
            type: 'sum',
            measureIdentifier: 'm1',
            attributeIdentifier: 'a1'
        }, {
            type: 'max',
            measureIdentifier: 'm1',
            attributeIdentifier: 'a1'
        }, {
            type: 'sum',
            measureIdentifier: 'm1',
            attributeIdentifier: 'a2'
        }, {
            type: 'min',
            measureIdentifier: 'm1',
            attributeIdentifier: 'a4'
        }, {
            type: 'avg',
            measureIdentifier: 'm1',
            attributeIdentifier: 'a4'
        }];

        const sortBy = [{
            attributeSortItem: {
                direction: 'asc',
                attributeIdentifier: 'a1'
            }
        }];

        const drillableItems = [/*
            HeaderPredicateFactory.localIdentifierMatch('a1'),
            HeaderPredicateFactory.localIdentifierMatch('a2'),
            HeaderPredicateFactory.localIdentifierMatch('a3'),
            HeaderPredicateFactory.localIdentifierMatch('m1')
        */];

        return (
            <div className="App" ref={ref => this.ref = ref}>

                <div className="App-header">
                    <h1>GoodData SDK Playground</h1>
                    <a href="/account.html" className="login-link">Login first to see the data</a>
                </div>

                <div className="insight-wrapper">

                    <div style={{ height: 800 }} className="s-pivot-table-sorting">
                        <PivotTable
                            projectId={projectId}
                            measures={measures}
                            rows={rows}
                            columns={columns}
                            totals={totals}
                            totalsEditAllowed={true}
                            pageSize={20}
                            sortBy={sortBy}
                            drillableItems={drillableItems}
                            onFiredDrillEvent={this.onDrill}
                            config={({
                                menu: {
                                    aggregations: true
                                }
                            })}
                        />
                    </div>

                </div>

            </div>
        );
    }
}

export default App;
