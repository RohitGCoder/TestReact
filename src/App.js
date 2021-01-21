import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
//import {Header} from '@adobe/react-spectrum';
import {Tabs, Item} from '@react-spectrum/tabs';
//import {Content} from '@react-spectrum/view';
import {Text} from '@react-spectrum/text';


class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
	   
	   let tabs = [
    {id: 1, name: 'Keyboard Settings', children: 'No keyboard detected.'},
    {id: 2, name: 'Mouse Settings', children: 'No mouse detected.'},
    {id: 3, name: 'Gamepad Settings', children: 'No gamepad detected'}
  ];
  let [tab, setTab] = React.useState(2);
	   
      return (
         <Flex gap="size-150" wrap>
      <span id="label-2">Settings (uncontrolled)</span>
      <Tabs
        aria-labelledby="label-2"
        items={tabs}
        defaultSelectedKey={2}
        marginBottom="size-400">
        {(item) => (
          <Item title={item.name}>
            <Content marginTop="size-250" marginStart="size-125">
              <Text>{item.children}</Text>
            </Content>
          </Item>
        )}
      </Tabs>
      <span id="label-3">Settings (controlled)</span>
      <Tabs
        aria-labelledby="label-3"
        items={tabs}
        selectedKey={tab}
        onSelectionChange={setTab}>
        {(item) => (
          <Item title={item.name}>
            <Content marginTop="size-250" marginStart="size-125">
              <Text>{item.children}</Text>
            </Content>
          </Item>
        )}
      </Tabs>
    </Flex>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

export default App;
