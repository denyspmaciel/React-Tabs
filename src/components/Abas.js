import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import Aba1 from './Aba1';
import Aba2 from './Aba2';
import Aba3 from './Aba3';

export default class Abas extends React.Component {
    render() {
        return (
            <div>
                  <Tabs>

                    <TabList>
                        <Tab>Aba 1</Tab>
                        <Tab>Aba 2</Tab>
                        <Tab>Aba 3</Tab>
                    </TabList>

                    <TabPanel>
                        <Aba1 />
                    </TabPanel>

                    <TabPanel>
                        <Aba2 />
                    </TabPanel>

                    <TabPanel>
                        <Aba3 />
                    </TabPanel>

                </Tabs>
            </div>
        );
    }
}