import React, { Component, Fragment } from "react";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="block">
                  <div className="block-header">
                    <h6 className="text-uppercase mb-0">Login</h6>
                  </div>
                  <div className="block-body">
                    <p className="lead">Already our customer?</p>
                    <p className="text-muted">
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Vestibulum tortor quam,
                      feugiat vitae, ultricies eget, tempor sit amet, ante.
                      Donec eu libero sit amet quam egestas semper. Aenean
                      ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                    <hr />
                    <form action="customer-orders.html" method="get">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          id="email"
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group text-center">
                        <button type="submit" className="btn btn-outline-dark">
                          <i className="fa fa-sign-in-alt mr-2" /> Log in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="block">
                  <div className="block-header">
                    <h6 className="text-uppercase mb-0">New account</h6>
                  </div>
                  <div className="block-body">
                    <p className="lead">Not our registered customer yet?</p>
                    <p className="text-muted">
                      With registration with us new world of fashion, fantastic
                      discounts and much more opens to you! The whole process
                      will not take you more than a minute!
                    </p>
                    <p className="text-muted">
                      If you have any questions, please feel free to{" "}
                      <a href="contact.html">contact us</a>, our customer
                      service center is working for you 24/7.
                    </p>
                    <hr />
                    <form action="customer-orders.html" method="get">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input id="name" type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          id="email"
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group text-center">
                        <button type="submit" className="btn btn-outline-dark">
                          <i className="far fa-user mr-2" />
                          Register{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default Login;
