import React, {Component} from 'react';
import Header from '../Common/Header';
import Timeline from '../Common/Timeline';

import image1 from '../assets/images/about/1.jpg';
import image2 from '../assets/images/about/2.jpg';
import image3 from '../assets/images/about/3.jpg';

const history = [
    {stage: "Our Humble Beginnings", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur", date: "2009-2011", image: image1},
    {stage: "An Agency is Born", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur", date: "March 2011", image: image2},
    {stage: "Transition to Full Service", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur", date: "December 2015", image: image3}
];
class About extends Component {
    render(){
        return(
            <div>
                <section className="page-section" id="about">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-heading text-uppercase">About</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                            <ul className="timeline">
                                {history.map((event, index)=>{
                                    return <Timeline {...event} key={index} />
                                })}
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <h4>
                                            Be Part
                                            <br />
                                            Of Our
                                            <br />
                                            Story!
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                </section>
            </div>

        )
    }
}

export default About;