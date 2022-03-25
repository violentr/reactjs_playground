import React, {Component} from 'react';
import Header from '../Common/Header';
import Services from './Services';
import Portfolio from './Portfolio';

class Home extends Component {
    render(){
        return(
        <div>
            <Header
                title="Welcome To Our Studio!"
                subtitle="IT'S NICE TO MEET YOU"
                buttonText="tell me more"
                link="/services"
                showButton={true}
            />
            <Services />
            <Portfolio />
        </div>
        )
    }
}

export default Home;