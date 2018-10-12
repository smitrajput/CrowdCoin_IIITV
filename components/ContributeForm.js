import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);

    this.setState({ loading: true, errorMessage: '' }); //errorMessage: '', will remove the previously
                                                        //popped up error on new form submission

    try{
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')  //since send() sends in wei
      });

      Router.replaceRoute(`/campaigns/${this.props.address}`); //refreshing the page. pushRoute() would route users to the
                                              //same page again, bringing users to the same page if they click on 'back'
    } catch (err) {
        this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: ''});  
    //value: '', will nullify the value in th form field after
                                                  //successful contribution
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value})}
            label="ether"
            labelPosition="right"
          />
        </Form.Field>

        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Contribute!
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;
