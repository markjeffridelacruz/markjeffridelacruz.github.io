import React, { Component } from 'react';

class Certifications extends Component {
  render() {
    return(
      <section id="certs" className="vertical-center">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">CERTIFICATIONS</h5>
              <div className="row">
                <div className="col-md">
                  <ul className="list-group">
                    <li className="list-group-item">Microsoft Certified: Azure Administrator Associate</li>
                    <li className="list-group-item">AWS Certified Developer - Associate</li>
                    <li className="list-group-item">AWS Certified Solutions Architect - Associate</li>
                    <li className="list-group-item">Cisco Certified Network Associate Security</li>
                    <li className="list-group-item">Cisco Certified Network Associate Routing &amp; Switching</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Certifications;
