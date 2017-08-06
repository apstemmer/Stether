import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import StatBlock from './components/StatBlock';
import web3 from './scripts/connect';
import eth_blockNumber from './RPC/eth_blockNumber';
import eth_gasPrice from './RPC/eth_gasPrice';
import {RPCNode, fiatData} from './RPC/config';

export default class App extends React.Component {
  constructor(){
    super();
    this.state ={
      ethPrice:250,
      blockNum:15,
      gasPrice:20,
      usdPrice:200,
    };
  }
  updateBlockNumber(){
    return fetch(RPCNode, eth_blockNumber)
      .then((res)=>res.json())
      .then((resjson) =>{
        let currBlock = parseInt(resjson.result,16);
        this.setState({blockNum:currBlock});
        return resjson;
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  updateGasPrice(){
    return fetch(RPCNode, eth_gasPrice)
      .then((res)=>res.json())
      .then((resjson) =>{
        let currGasPrice = parseInt(resjson.result,16);

        this.setState({gasPrice:currGasPrice});
        return resjson;
      })
      .catch((error)=>{
        console.log(error);
      });
  }

  updateFiatPrice(){
    return fetch(fiatData)
      .then((res)=>res.json())
      .then((resjson) =>{
        this.setState({usdPrice:resjson.price.usd});
        return resjson;
      })
      .catch((error)=>{
        console.log(error);
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatBlock title="blocknum" data={this.state.blockNum}/>
        <StatBlock title="gasprice" data={`${this.state.gasPrice/1000000000} GWei`}/>
        <StatBlock title="tx-cost"/>
        <StatBlock title="ether-price" data={`$ ${this.state.usdPrice}`}/>
      </ScrollView>
    );
  }

  componentDidMount() {
    //'{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":83}'
    this.updateBlockNumber();
    this.updateGasPrice();
    this.updateFiatPrice();
    return;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#222',
  },
});
