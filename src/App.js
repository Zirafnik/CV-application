import React, {Component} from 'react';
import uniqid from 'uniqid';
import General from './components/General';
import './styles/reset.css'
import './styles/App.css';
import Education from './components/Education';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      educationID: [],
      experienceID: [],
    }

    this.addEducation= this.addEducation.bind(this);
    this.showEducation= this.showEducation.bind(this);
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

  deleteSection(name, id) {
    this.setState({
      [name + 'ID']: this.state[name + 'ID'].filter(savedID => savedID !== id),
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="h1">CV Application with React</h1>

        <General />

        <div>
          {this.showEducation()}
          <button onClick={this.addEducation}>Add</button>
        </div>
        
      </div>
    );
  }
}

export default App;