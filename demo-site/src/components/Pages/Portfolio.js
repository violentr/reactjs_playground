import React, {Component} from 'react';
import Header from '../Common/Header';
import PortfolioItem from '../Common/PortfolioItem';
/* Images */
import image_1 from '../../components/assets/images/portfolio/1.jpg';
import image_2 from '../../components/assets/images/portfolio/2.jpg';
import image_3 from '../../components/assets/images/portfolio/3.jpg';
import image_4 from '../../components/assets/images/portfolio/4.jpg';
import image_5 from '../../components/assets/images/portfolio/5.jpg';
import image_6 from '../../components/assets/images/portfolio/6.jpg';

const portfolio =[
 {title: 'Threads', subtitle: 'Illustration', image: image_1},
 {title: 'Explore', subtitle: 'Graphic Design', image: image_2},
 {title: 'Finish', subtitle: 'Identity', image: image_3},
 {title: 'Lines', subtitle: 'Branding', image: image_4},
 {title: 'Southwest', subtitle: 'Website Design', image: image_5},
 {title: 'Window', subtitle: 'Photography', image: image_6},
 
];
class Portfolio extends Component {
    render(){
        return(
            <div>
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            {portfolio.map((item, index) =>{
                               return <PortfolioItem {...item} key={index} />
                            })}
                        </div>    
                    </div>
                </section>
            </div>
        )
    }
}

export default Portfolio;