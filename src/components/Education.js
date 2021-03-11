import React, {Component} from 'react';
import styles from '../styles/Education.module.css';
import TextEducation from './TextEducation';

class Education extends Component {
    constructor(props) {
        super(props);

        this.name= 'education';

        this.state= {
            saved: false,

            institution: '',
            qualification: '',
            from: '',
            to: '',
        }

        this.handleChange= this.handleChange.bind(this);
        this.handleSave= this.handleSave.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;

        this.setState({
            [name]: value, 
        });
    }

    handleSave() {
        let text= '';
        if(this.state.saved) {
            text= 'Save';
        } else {
            text= 'Edit';
        }

        this.setState({
            saveName: text,
            saved: !this.state.saved,
        });
    }

    render() {
        if(this.state.saved===false) {
            return (
                <div className="container">
                    <h2>Education</h2>
                    <label>Institution:
                        <input name='institution' onChange={this.handleChange} value={this.state.institution} type="text" placeholder="Institution"></input>
                    </label>
                    <label>Qualification:
                        <input name='qualification' onChange={this.handleChange} value={this.state.qualification} type="text" placeholder="Qualification"></input>
                    </label>
                    <label>From:
                        <input name='from' onChange={this.handleChange} value={this.state.from} type="date"></input>
                    </label>
                    <label>To:
                        <input name='to' onChange={this.handleChange} value={this.state.to} type="date"></input>
                    </label>
                    
                    <div>
                        <button onClick={this.handleSave}>Save</button>
                        <button onClick={() => this.props.delete(this.name, this.props.id)}>Delete</button>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="container">
                <h2>Education</h2>
                <TextEducation state={this.state} />
                <button onClick={this.handleSave}>Edit</button>
            </div>
            )
        }
    }
}

export default Education;