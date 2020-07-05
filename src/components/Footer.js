import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer>
        <div className="container">
          <p>&copy; {(new Date().getFullYear())}</p>
        </div>
      </footer>
    )
  }
}

export default Footer;
