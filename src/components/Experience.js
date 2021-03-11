import React, {Component} from 'react';
import TextExperience from './TextExperience';

class Experience extends Component {
    constructor(props) {
        super(props);

        this.name= 'experience';

        this.state= {
            saved: false,

            company: '',
            position: '',
            from: '',
            to: '',
            description: '',
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
                    <label>Company:
                        <input name='company' onChange={this.handleChange} value={this.state.company} type="text" placeholder="Company"></input>
                    </label>
                    <label>Position:
                        <input name='position' onChange={this.handleChange} value={this.state.position} type="text" placeholder="Position"></input>
                    </label>
                    <label>From:
                        <input name='from' onChange={this.handleChange} value={this.state.from} type="date"></input>
                    </label>
                    <label>To:
                        <input name='to' onChange={this.handleChange} value={this.state.to} type="date"></input>
                    </label>

                    <textarea className='textarea' onChange={this.handleChange} value={this.state.description} name='description' rows="4" cols="50" placeholder='Description...'></textarea>
                    
                    <div>
                        <button onClick={this.handleSave}>Save</button>
                        <button onClick={() => this.props.delete(this.name, this.props.id)}>Delete</button>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="container">
                <TextExperience state={this.state} />
                <button onClick={this.handleSave}>Edit</button>
            </div>
            )
        }
    }
}

export default Experience;