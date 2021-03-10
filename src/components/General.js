import React, {Component} from 'react';
import Text from './Text';
import styles from '../styles/General.module.css';

class General extends Component {
    constructor(props) {
        super(props);

        this.state= {
            saveName: 'Save',
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
                <form className={styles.container}>
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

                    <button onClick={this.handleSave}>{this.state.saveName}</button>
                </form>
            );
        } else {
            return (
                <div className={styles.container}>
                    <h2>General Information</h2>
                    <Text state={this.state} />
                    <button onClick={this.handleSave}>{this.state.saveName}</button>
                </div>
            );
        }
    }
}

export default General;