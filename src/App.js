import React, {Component} from 'react';
import uniqid from 'uniqid';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './styles/reset.css'
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      educationID: [],
      experienceID: [],
    }

    this.addEducation= this.addEducation.bind(this);
    this.showEducation= this.showEducation.bind(this);

    this.addExperience= this.addExperience.bind(this);
    this.showExperience= this.showExperience.bind(this);

    this.deleteSection= this.deleteSection.bind(this);
  }

  addEducation() {
    this.setState({
      educationID: this.state.educationID.concat(uniqid()),
    })
  }

  showEducation() {
    return(
      this.state.educationID.map((id) =>
        <Education key={id} id={id} delete={this.deleteSection} />
      )
    );
  }

  addExperience() {
    this.setState({
      experienceID: this.state.experienceID.concat(uniqid()),
    })
  }  

  showExperience() {
    return(
      this.state.experienceID.map((id) =>
        <Experience key={id} id={id} delete={this.deleteSection} />
      )
    );
  }    
    
  deleteSection(name, id) {
    this.setState({
      [name + 'ID']: this.state[name + 'ID'].filter(savedID => savedID !== id),
    })
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <h1 className="h1">CV Application with React</h1>

          <General />

          <h2>Education</h2>
          {this.showEducation()}
          <button className="add-btn" onClick={this.addEducation}>Add</button>

          <h2>Experience</h2>
          {this.showExperience()}
          <button className="add-btn" onClick={this.addExperience}>Add</button>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;