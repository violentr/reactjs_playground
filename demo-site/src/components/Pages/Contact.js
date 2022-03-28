import React, {Component} from 'react';
import Field from '../Common/Field';

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name'},
            {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email'},
            {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your name'}
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type Your message'}
        ]
    ]
}

class Contact extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }
    render(){
        return(
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div className="row align-items-stretch mb-5">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            id="name"
                                            type="text"
                                            placeholder="Your Name *"
                                            data-sb-validations="required"
                                            value={this.state.name}
                                            onChange={e => this.setState({name: e.target.value})}
                                        />
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    <div className="form-group">

                                        <input
                                            className="form-control"
                                            id="email" type="email"
                                            placeholder="Your Email *"
                                            data-sb-validations="required,email"
                                            value={this.state.email}
                                            onChange={e => this.setState({email: e.target.value})}
                                        />
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    <div className="form-group mb-md-0">
                                        <input
                                            className="form-control"
                                            id="phone"
                                            type="tel"
                                            placeholder="Your Phone *"
                                            data-sb-validations="required"
                                            value={this.state.phone}
                                            onChange={e => this.setState({phone: e.target.value})}
                                        />
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-textarea mb-md-0">
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            placeholder="Your Message *"
                                            data-sb-validations="required"
                                            value={this.state.message}
                                            onChange={e => this.setState({message: e.target.value})}
                                        />
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center text-white mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }

}
export default Contact;