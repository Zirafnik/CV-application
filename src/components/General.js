//import React, {Component} from 'react';
import React, {useState} from 'react';
import TextGeneral from './TextGeneral';
import styles from '../styles/General.module.css';

function General(props) {
    const [saved, setSaved] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function handleChange(e) {
        const {name, value} = e.target;

        if(name == 'firstName') {
            setFirstName(value);
        } else if(name == 'lastName') {
            setLastName(value);
        } else if(name == 'email') {
            setEmail(value);
        } else {
            setPhone(value);
        }
    }

    function handleSave() {
        setSaved(!saved);
    }

    if(saved===false) {
        return (
            <form className="container">
                <h2 className={styles.h1}>General Information</h2>
                <div className={styles.wrapper}>
                    <label>First Name:
                        <input name='firstName' onChange={handleChange} value={firstName} type="text" placeholder="First Name" required></input>
                    </label>
                    <label>Last Name:
                        <input name='lastName' onChange={handleChange} value={lastName} type="text" placeholder="Last Name" required></input>
                    </label>
                </div>
                <div className={styles.wrapper}>
                    <label>Email:
                        <input name='email' onChange={handleChange} value={email} type="email" placeholder="somebody@example.com" required></input>
                    </label>
                    <label>Phone Number:
                        <input name='phone' onChange={handleChange} value={phone} type="text" placeholder="123-456-789" required></input>
                    </label>
                </div>

                <button onClick={handleSave}>Save</button>
            </form>
        );
    } else {
        return (
            <div className="container">
                <h2>General Information</h2>
                <TextGeneral state={{firstName, lastName, email, phone}} />
                <button onClick={handleSave}>Edit</button>
            </div>
        );
    }
}

export default General;

/*
class General extends Component {
    constructor(props) {
        super(props);

        this.state= {
            saved: false,

            firstName: '',
            lastName: '',
            email: '',
            phone: '',
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
                <form className="container">
                    <h2 className={styles.h1}>General Information</h2>
                    <div className={styles.wrapper}>
                        <label>First Name:
                            <input name='firstName' onChange={this.handleChange} value={this.state.firstName} type="text" placeholder="First Name" required></input>
                        </label>
                        <label>Last Name:
                            <input name='lastName' onChange={this.handleChange} value={this.state.lastName} type="text" placeholder="Last Name" required></input>
                        </label>
                    </div>
                    <div className={styles.wrapper}>
                        <label>Email:
                            <input name='email' onChange={this.handleChange} value={this.state.email} type="email" placeholder="somebody@example.com" required></input>
                        </label>
                        <label>Phone Number:
                            <input name='phone' onChange={this.handleChange} value={this.state.phone} type="text" placeholder="123-456-789" required></input>
                        </label>
                    </div>

                    <button onClick={this.handleSave}>Save</button>
                </form>
            );
        } else {
            return (
                <div className="container">
                    <h2>General Information</h2>
                    <TextGeneral state={this.state} />
                    <button onClick={this.handleSave}>Edit</button>
                </div>
            );
        }
    }
}
*/