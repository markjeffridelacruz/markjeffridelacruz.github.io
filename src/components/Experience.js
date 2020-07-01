import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="card">
            <div className="card-body">
            <h5 className="card-title">EXPERIENCE</h5>
            <div className="row">
              <div className="col-md-8">
                <p className="lead">Reekoh</p>
                <p>DevOps Engineer</p>
              </div>
              <div className="col-md-4">
                <p>Aug 2019 - Present</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p className="lead">Trend Micro</p>
                <p>Customer Service Engineer</p>
              </div>
              <div className="col-md-4">
                <p>Jul 2016 - Aug 2019</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p className="lead">Office of the President</p>
                <p>IT Administrator</p>
              </div>
              <div className="col-md-4">
                <p>Nov 2013 - Jun 2016</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Experience;
