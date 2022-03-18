import React, {Component} from 'react';
import Header from '../Common/Header';

class Home extends Component {
    render(){
        return(
        <Header 
            title="Welcome To Our Studio!"
            subtitle="IT'S NICE TO MEET YOU"
            buttonText="tell me more"
            link="/services"
            showButton={true}    
        />
        )
    }
}

export default Home;