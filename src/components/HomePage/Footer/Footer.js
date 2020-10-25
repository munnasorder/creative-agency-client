import React from 'react';

const Footer = () => {
    return (
        <section className="footer py-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="p-4">
                        <h1> <strong>Let us handle your project, professionally.</strong> </h1>
                        <p className="mt-4">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <form className="p-4" action="">
                        <div className="form-group">
                            <input type="text" className="form-control p-4" placeholder="Your email address" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control p-4" placeholder="Your name / company’s name" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                        </div>
                        <div className="form-group mb-5">
                            <button type="button p-3" className="btn btn-primary"> Send </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="text-center mt-5">
                <small > <strong> &copy; programming hero 2020</strong> </small>
            </div>
        </section>
    );
};

export default Footer;