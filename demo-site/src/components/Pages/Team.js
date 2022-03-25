import React, {Component} from 'react';
import TeamMember from '../Common/TeamMember';
import  image1 from '../assets/images/team/1.jpg';
import  image2 from '../assets/images/team/2.jpg';
import  image3 from '../assets/images/team/3.jpg';

const team = [
{title: 'Lead Designer', fullName: 'Parveen Anand', image: image1, socIcon1: 'fa-twitter', socIcon2: 'fa-facebook-f', socIcon3: 'fa-linkedin-in'},
{title: 'Lead Marketer', fullName: 'Diana Petersen', image: image2, socIcon1: 'fa-twitter', socIcon2: 'fa-facebook-f', socIcon3: 'fa-linkedin-in'},
{title: 'Lead Developer', fullName: 'Larry Parker', image: image3, socIcon1: 'fa-twitter', socIcon2: 'fa-facebook-f', socIcon3: 'fa-linkedin-in'}
];
class Team extends Component {
    render(){
        return(
            <div>
                <section className="page-section bg-light" id="team">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                                {team.map((member, index) => {
                                    return <TeamMember {...member} key={index} />
                                    }
                                )}
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Team;