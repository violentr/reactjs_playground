import React, { Component} from 'react';

class TeamMember extends Component {
    render() {
        return(
            <div className="col-lg-4">
                <div className="team-member">
                    <img className="mx-auto rounded-circle" src={this.props.image} alt="..." />
                    <h4>{this.props.fullName}</h4>
                    <p className="text-muted">{this.props.position}</p>
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className={`fab ${this.props.socIcon1}`}></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className={`fab ${this.props.socIcon2}`}></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className={`fab ${this.props.socIcon3}`}></i></a>
                </div>
            </div>
        )
    }
}

export default TeamMember;
