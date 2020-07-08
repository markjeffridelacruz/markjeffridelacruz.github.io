import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <section id="skills" className="vertical-center">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">SKILLS</h5>
              <div className="row">
                <div className="col-md">
                  <p className="lead">Languages</p>
                  <ul className="list-group">
                    <li className="list-group-item">Python</li>
                    <li className="list-group-item">JavaScript</li>
                    <li className="list-group-item">HTML</li>
                    <li className="list-group-item">CSS</li>
                  </ul>
                </div>
                <div className="col-md">
                  <p className="lead">Frameworks</p>
                  <ul className="list-group">
                    <li className="list-group-item">Node.js</li>
                    <li className="list-group-item">React</li>
                    <li className="list-group-item">Express</li>
                    <li className="list-group-item">Bootstrap</li>
                    <li className="list-group-item">Django</li>
                  </ul>
                </div>
                <div className="col-md">
                  <p className="lead">Tools</p>
                  <ul className="list-group">
                    <li className="list-group-item">Git</li>
                    <li className="list-group-item">Bash</li>
                    <li className="list-group-item">Docker</li>
                    <li className="list-group-item">Jenkins</li>
                    <li className="list-group-item">MongoDB</li>
                    <li className="list-group-item">Prometheus</li>
                    <li className="list-group-item">Kubernetes</li>
                    <li className="list-group-item">Azure DevOps</li>
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

export default Skills;
