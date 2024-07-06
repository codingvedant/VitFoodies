import Navbar from "./Navbar";

const ContactUs = () => {
    return (
        <div className="contact-us">
            <Navbar />
            <div className="content">
                <header className="d-flex justify-content-center align-items-center">
                    <h2 className="py-2 m-0 text-5xl tagline text-wrap">Contact Us</h2>
                </header>

                <div className="container-lg d-flex justify-content-center">
                    <div className="row">
                        <div className="col-lg-6">
                            <section className="contact-info">
                                <h4 className="h-2">Our Location:</h4>
                                <p>123 Campus Street, City, Country</p>

                                <h4 className="h-2">Email Us:</h4>
                                <p>info@vitfoodies.com</p>

                                <h4 className="h-2">Call Us:</h4>
                                <p>+123 456 7890</p>
                            </section>
                        </div>
                        <div className="col-lg-6">
                            <section className="contact-form">
                                <h4 className="h-2">Send Us a Message:</h4>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Your Name:</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Your Email:</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Your Message:</label>
                                        <textarea className="form-control" id="message" rows="4"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
