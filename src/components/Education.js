//import React, {Component} from 'react';
import React, {useState} from 'react';
import styles from '../styles/Education.module.css';
import TextEducation from './TextEducation';

function Education(props) {
    const name= 'education';

    const [saved, setSaved] = useState(false);
    const [institution, setInstitution] = useState('');
    const [qualification, setQualification] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    function handleChange(e) {
        const {name, value} = e.target;

        if(name == 'institution') {
            setInstitution(value);
        } else if(name == 'qualification') {
            setQualification(value);
        } else if(name == 'from') {
            setFrom(value);
        } else {
            setTo(value);
        }
    }

    function handleSave() {
        setSaved(!saved);
    }

    if(saved===false) {
        return (
            <div className="container">
                <label>Institution:
                    <input name='institution' onChange={handleChange} value={institution} type="text" placeholder="Institution"></input>
                </label>
                <label>Qualification:
                    <input name='qualification' onChange={handleChange} value={qualification} type="text" placeholder="Qualification"></input>
                </label>
                <label>From:
                    <input name='from' onChange={handleChange} value={from} type="date"></input>
                </label>
                <label>To:
                    <input name='to' onChange={handleChange} value={to} type="date"></input>
                </label>
                
                <div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => props.delete(name, props.id)}>Delete</button>
                </div>
            </div>
        );
    } else {
        return(
            <div className="container">
            <TextEducation state={{institution, qualification, from, to}} />
            <button onClick={handleSave}>Edit</button>
        </div>
        )
    }
}

export default Education;

/*
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
        this.setState({
            saved: !this.state.saved,
        });
    }

    render() {
        if(this.state.saved===false) {
            return (
                <div className="container">
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
                <TextEducation state={this.state} />
                <button onClick={this.handleSave}>Edit</button>
            </div>
            )
        }
    }
}
*/