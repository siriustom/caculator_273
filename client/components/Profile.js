import React from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export class Profile extends React.Component {
    render() {
        return (
            <Tabs className="main-tabs">
                <TabPane tab="Name" key="1">
                </TabPane>
                <TabPane tab="Email" key="2">
                </TabPane>
            </Tabs>
        );
    }
}