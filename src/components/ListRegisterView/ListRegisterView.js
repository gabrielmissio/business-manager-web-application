import React, {Component} from 'react';
import Registers from './components/Registers';

class ListRegisterView extends Component {

    state = {
        registers: []
    };

    componentDidMount() {
        
        fetch('https://ii9ik5bym6.execute-api.us-east-1.amazonaws.com/dev/service-order/'+this.props.serviceOrderId+'/register')
            .then(res => res.json())
            .then((data) => {
                this.setState({ registers: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <Registers registers={this.state.registers} />
        )
    } 
}

export default ListRegisterView;
