import React, { Component, useState } from 'react';


class MainForm extends Component {

    state={
        title: '',
        deadline: '',
        status: ''
    }

    userInput (type, value) {
        let stateCopy = {...this.state}

        stateCopy[type] = value;

        this.setState({ ...stateCopy });
    }

    submitForm (value) {
        this.props.submission(this.state);
        this.setState({ title: '', deadline: '', status: ''})
    }

    render () {

        return (
            <div className='form'>
                <h3>Add new todo</h3>
                <form >
                    <input placeholder='Title' value={this.state.title }name='title' onChange={(event) => this.userInput('title', event.target.value)}/>
                    <input placeholder='Deadline' value={this.state.deadline}name='deadline' onChange={(event) => this.userInput('deadline', event.target.value)}/>
                    <select value={this.state.status} onChange={(event) => this.userInput('status', event.target.value)}>
                        <option value="Done">Done</option>
                        <option value="Not Started">Not started</option>
                        <option value="In progress">In progress</option>
                    </select>
    
                </form>

                <div className='formButton'>
                    <button onClick={() => this.props.cancel()}>Cancel</button>
                    <button onClick={() => this.submitForm(this.state)}>Add</button>
                </div>

            </div>
        )
    }
    
}

export default MainForm;
