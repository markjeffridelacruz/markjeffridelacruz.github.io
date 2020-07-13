import React, { Component } from 'react';
import CiscoCCNARS from '../assets/cisco_ccna_R_26S.png'
import CiscoCCNASecurity from '../assets/cisco_ccna_security.png'
import AWSSolArchitectAssociate from '../assets/AWS-SolArchitect-Associate.png'
import AWSDeveloperAssociate from '../assets/AWS-Developer-Associate.png'
import AzureAdministratorAssociate from '../assets/azure-administrator-associate.png'

class Certifications extends Component {
  render() {
    return(
      <section id="certs" className="vertical-center">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">CERTIFICATIONS</h5>
              <div className="row">
                <div className="col-md-2">
                  <img src={AzureAdministratorAssociate} alt="Azure Administrator Associate" className="img-fluid mx-auto d-block badge" />
                </div>
                <div className="col-md-10 text-center py-5">
                  Microsoft Certified: Azure Administrator Associate
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <img src={AWSDeveloperAssociate} alt="AWS Developer Associate" className="img-fluid mx-auto d-block badge" />
                </div>
                <div className="col-md-10 text-center py-5">
                  AWS Certified Developer - Associate
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <img src={AWSSolArchitectAssociate} alt="AWS Solutions Architect Associate" className="img-fluid mx-auto d-block badge" />
                </div>
                <div className="col-md-10 text-center py-5">
                  AWS Certified Solutions Architect - Associate
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <img src={CiscoCCNASecurity} alt="CCNA Security" className="img-fluid mx-auto d-block badge" />
                </div>
                <div className="col-md-10 text-center py-5">
                  Cisco Certified Network Associate Security
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <img src={CiscoCCNARS} alt="CCNA Routing Switching" className="img-fluid mx-auto d-block badge" />
                </div>
                <div className="col-md-10 text-center py-5">
                  Cisco Certified Network Associate Routing &amp; Switching
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
