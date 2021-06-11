import React, { Component } from 'react'

import MyAlgo from '@randlabs/myalgo-connect';

import { 
  Button,
  Heading,
  Card,
  Radio,
  Field,
  AlgoAddress,
  Blockie
} from 'pipeline-ui'

var con_status = "Status: Not Connected";

const myAlgoWallet = new MyAlgo();

/*Warning: Browser will block pop-up if user doesn't trigger myAlgoWallet.connect() with a button interation */
const connectToMyAlgo = async() => {
  con_status = "check"
  try {
    const accounts = await myAlgoWallet.connect();

    const addresses = accounts.map(account => account.address);

    con_status = "Status: Connected"
    
  } catch (err) {
    console.error(err);
  }
}


class test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        con_status: "Status: Not Connected"
    }
  }
 
  updateConnection = () => {
      this.setState({ con_status: "Attempting to connect..."});
  }
  
  render() {
    return <div align="center">
      <Heading>Pipeline UI Demo</Heading>
      <Button size={'large'} 
      
      onClick={() => {
        this.updateConnection();
        connectToMyAlgo();
      }}>Connect to MyAlgo</Button>

      <Card bg="black" color="white" maxWidth={"300px"}>{this.state.con_status}</Card>
      <Field label="Choose transaction speed">
  <Radio label="Quick" my={2} />
  <Radio defaultChecked label="Standard" my={2} />
  <Radio disabled label="Slower" my={2} />
  <Radio checked disabled label="Custom" my={2} />
</Field>
<AlgoAddress address="0x9505C8Fc1aD98b0aC651b91245d02D055fEc8E49" />
<Blockie
  opts={{
    seed: "foo",
    color: "#dfe",
    bgcolor: "#a71",
    size: 50,
    scale: 3,
    spotcolor: "#000"
  }}
/>
      </div>
    
  }
}
export default test