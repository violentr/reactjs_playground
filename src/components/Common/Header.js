import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div>
                <header className="masthead">
                    <div className="container">
                        <div className="masthead-subheading">{this.props.title}</div>
                        <div className="masthead-heading text-uppercase">{this.props.subtitle}</div>
                        {this.props.showButton && 
                            <Link className="btn btn-primary btn-xl text-uppercase" to={this.props.link}>{this.props.buttonText}</Link>
                        }
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;