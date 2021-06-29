import React, { Component } from 'react'

import Chart from "react-apexcharts";

import Pipeline from "@pipeline-ui-2/pipeline";

import './App.css';

import Select from 'react-select';
import 'react-dropdown/style.css';
import AsaList from './AsaList.js'
import ChartData from './ChartData.js'


import {
  Button,
  Heading,
  Card,
  AlgoAddress,
  Field,
  Input,
  MyAlgoButton,
  Blockie,
  Table,
  Link,
  Radio
} from 'pipeline-ui'


var indexerURL = "https://algoexplorerapi.io/idx2/v2/accounts/";
var asaNames = AsaList;
var url = 'https://algoexplorer.io/tx/';
var con_status = "Status: Not Connected";
var myAddress = "";
const myAlgoWallet = Pipeline.init();
const opt = [
  { value: 'Algorand', label: 'Algorand' },
  { value: 'ASA', label: 'Verified ASA' },
  { value: 'ASAindex', label: 'ASA from Index Number' }
]



class test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      asaIndVis: "none",
      myTransactions: ["1"],
      tableVis: "none",
      balance: "",
      asaNumbVis: "none",
      asa: "Algorand",
      asaNumb: "",
      txID: "",
      amount: 1,
      note: "",
      recipient: "",
      con_status_text: con_status,
      address: myAddress,
      ChartData
    };
  }


  updateBalance = () => {
    let url2 = indexerURL + myAddress;
    fetch(url2)
      .then((response) => response.json())
      .then(data => {

        let myBalance = ". Balance: " + JSON.stringify(data.account.amount / 1000000) + " Algos";
        this.setState({ balance: myBalance });
      }).catch(function () {
        alert("Error occured  " + url2);
      });
    this.updateTransactions();
  }

  updateTransactions = () => {
    let url2 = indexerURL + myAddress + "/transactions?limit=5";
    fetch(url2)
      .then((response) => response.json())
      .then(data => {

        let myTransactions = data.transactions;
        let myTransactionArray = [];
        for (var i = 0; i < myTransactions.length; i++) {
          myTransactionArray.push(myTransactions[i].id)
        }
        this.setState({ myTransactions: myTransactionArray })
        this.setState({ tableVis: "block" })
        // this.transTable();
      }).catch(function () {
        alert("Error occured  " + url2);
      });

  }

  updateConnection = () => {
    this.setState({
      con_status_text: con_status,
      address: myAddress
    });
  }


  recipientChangeHandler = (event) => {
    this.setState({ recipient: event.target.value });
  }

  amountChangeHandler = (event) => {
    this.setState({ amount: event.target.value });
  }

  noteChangeHandler = (event) => {
    this.setState({ note: event.target.value });
  }

  asaIndexChangeHandler = (event) => {
    this.setState({asaNumb: event.target.value});
  }

  asaChangeHandler = (event) => {
    this.setState({ asa: event.value });
    switch (event.value) {
      case "Algorand":
        this.setState({ asaNumbVis: "none", asaIndVis: "none" });
        break;
      case "ASA":
        this.setState({ asaNumbVis: "block", asaIndVis: "none" });
        break;
      case "ASAindex":
        this.setState({ asaNumbVis: "none", asaIndVis: "block" });
        break;
    }
  }

  asaNumbChangeHandler = (event) => {
    this.setState({ asaNumb: event.value });

  }

  render() {
    return <div align="center">
      <Heading>Pipeline UI Demo</Heading>
      <MyAlgoButton size={"large"}

        onClick={() => {
          con_status = "Attempting to connect...";
          this.updateConnection();

          Pipeline.connect(myAlgoWallet)
            .then(accounts => {
              con_status = "Status: Connected";
              myAddress = accounts;
              this.updateConnection();
              this.updateBalance();

            });
        }
        }
      >Connect to MyAlgo</MyAlgoButton>

      <Card bg="blue" color="white" maxWidth={"500px"}>{this.state.con_status_text + this.state.balance}</Card>

      <AlgoAddress maxWidth={"500px"} address={this.state.address} textLabels /><br></br>

      <div style={{ display: this.state.tableVis }}>

        <Table id="transTable" style={{ textAlign: "center" }}>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th style={{ textAlign: "center" }}>My Latest Transactions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.myTransactions.map(row => (
              <tr>
                <td style={{ textAlign: "center" }}><Link target="_blank" href={url + row}>{row}</Link></td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </Table>



        <Button color="red" size={"350px"}
          onClick={() => {
            this.updateBalance();
          }}>Refresh</Button>
      </div>

      <Field label="Select your asset:"></Field>
      <div style={{ maxWidth: '500px' }}>
        <Select
          style={{ maxWidth: '350px' }}
          defaultValue={this.state.value}
          onChange={this.asaChangeHandler}
          options={opt}
        />
      </div>
      <div style={{ maxWidth: '500px', display: this.state.asaNumbVis }}>


        <Field label="Verified ASA's:" required={true} ></Field>
        <Select
          defaultValue={this.state.value}
          onChange={this.asaChangeHandler}
          options={asaNames} onChange={this.asaNumbChangeHandler} /></div>

      <div style={{ maxWidth: '500px', display: this.state.asaIndVis }}>
        <Field label="ASA Index Number:" style={{ maxWidth: '500px' }}>
          <Input style={{ maxWidth: '500px' }} type="text" required={true} placeholder="" onChange={this.asaIndexChangeHandler} />
        </Field><br></br>
      </div>

      <Field label="Recipient Address" style={{ maxWidth: '500px' }}>
        <Input style={{ maxWidth: '500px' }} type="text" required={true} placeholder="" onChange={this.recipientChangeHandler} />
      </Field><br></br>
      <Field style={{ maxWidth: '500px' }} label="Amount (in micro Algos)">
        <Input style={{ maxWidth: '500px' }} type="number" required={true} placeholder="" onChange={this.amountChangeHandler} />
      </Field><br></br>
      <Field style={{ maxWidth: '500px' }} label="Note">
        <Input style={{ maxWidth: '500px' }} type="text" required={true} placeholder="" selectOnChange={this.noteChangeHandler} />
      </Field><br></br>
      <Button color="blue" size={"large"}
        onClick={() => {
          if (this.state.asa == "Algorand") {
            Pipeline.send(this.state.recipient, parseInt(this.state.amount), this.state.note, myAddress, myAlgoWallet)
              .then(data => {
                if (typeof data !== "undefined") {
                  data = url + data.slice(1, -1);
                  if (window.confirm('Check out your transaction on Algo Explorer (refresh page if 404) . Cancel to stay here ')) {
                    window.location.href = data;
                  };
                }
              });
            this.updateBalance();
          }
          else {
            Pipeline.sendASA(this.state.recipient, parseInt(this.state.amount), this.state.note, myAddress, myAlgoWallet, parseInt(this.state.asaNumb))
              .then(data => {
                if (typeof data !== "undefined") {
                  data = url + data.slice(1, -1);
                  if (window.confirm('Check out your transaction on Algo Explorer (refresh page if 404) . Cancel to stay here ')) {
                    window.location.href = data;
                  };
                }
              });
            this.updateBalance();
          }
        }
        }
      >Send</Button><br></br>



      <Card bg="red" color="white" maxWidth={"500px"}>The function of this app is to demonstrate the ability to make a connection to MyAlgo via a custom class, execute various transaction and return data to multiple React components.</Card>

    </div>
  }
}

/* place below code between div tags to include chart
 
<div className="app">
       <div className="row">
         <div className="mixed-chart">
           <Chart
             options={this.state.ChartData.options}
             series={this.state.ChartData.series}
             type="candlestick"
             width="500"
           />
         </div>
       </div>
     </div> */

export default test
