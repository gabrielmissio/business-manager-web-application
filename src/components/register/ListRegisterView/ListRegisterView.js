import React, {Component} from 'react';
import Registers from './components/Registers';
import bmApi from './../../../bm-api-config/BmApi'


class ListRegisterView extends Component {

  state = {
    registers: []
  };

  componentDidMount() {
        
    bmApi.get('service-order/'+this.props.serviceOrderId+'/register')
    .then(response => {
      var data = response.data
      console.log(response.data)
      this.setState({ registers: data })
    });
    
  }

  render() {
    return (
      <Registers registers={this.state.registers} />
    )
  } 
}

export default ListRegisterView;
