import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <p>COPYRIGHT &copy; {(new Date().getFullYear())} JEFFRI</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
