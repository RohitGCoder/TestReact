import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Header} from '@adobe/react-spectrum';
import {Tabs, Item} from '@react-spectrum/tabs';
import {Content} from '@react-spectrum/view';
import {Text} from '@react-spectrum/text';


function App() {

	
  return (
    <div className="App">
      <Tabs aria-label="History of Ancient Rome">
  <Item title="Founding of Rome" key="FoR">
    <Content marginTop="size-250" marginStart="size-125">
      <Text>Arma virumque cano, Troiae qui primus ab oris.</Text>
    </Content>
  </Item>
  <Item title="Monarchy and Republic" key="MaR">
    <Content marginTop="size-250" marginStart="size-125">
      <Text>Senatus Populusque Romanus.</Text>
    </Content>
  </Item>
  <Item title="Empire" key="Emp">
    <Content marginTop="size-250" marginStart="size-125">
      <Text>Alea jacta est.</Text>
    </Content>
  </Item>
</Tabs>
    </div>
  );
}

export default App;
