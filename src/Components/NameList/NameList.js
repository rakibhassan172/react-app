import React, { Component } from "react";
import UserCard from '../UserCard/UserCard';
import data from '../../Data/Data';
import Modal from '../../Hoc/Modal/Modal';
import Aux from '../../Hoc/Aux/Aux'
import MainForm from "../Form/Form";


class NameList extends Component {

  constructor(props) {
    super (props);

  
    this.state = {

      todo: [{
            title: 'Learn JavaScript Closure',
            deadline: 'tonight',
            status: 'Done'
        },
        {
            title: 'Pay the Internet bill',
            deadline: 'tommorow morning',
            status: 'Not started'
        },
        {
            title: 'Finalize the React assignment',
            deadline: 'This Friday',
            status: 'In progress'
        }
      ],
    
      displayModal: false
    }
  }

  submitForm (value) {
    let stateCopy = [...this.state.todo];

    stateCopy.push(value);

    console.log(stateCopy)

    this.setState({ ...this.state, todo: stateCopy, displayModal: !this.state.displayModal });

  }


  toggleModal () {
    this.setState({ displayModal : !this.state.displayModal })
  }

  cancelForm () {
    this.setState({ displayModal: !this.state.displayModal });
  }

  statusColor (item) {
    let color = null;

    if (item === 'Done'){
      color = 'green'
    }
    if(item === 'Not started'){
      color = 'salmon'
    }
    if (item === 'In progress'){
      color = '#e5e563'
    }
    return color;
  }



  render () {

    const display = data.map(item => {
      return <UserCard key={item.id} user={item} />
    });

    const todoListDisplay = this.state.todo.map((item, index) => {
      return <div className="cardList">
        <div className="statusColor" style={{backgroundColor: this.statusColor(item.status)}}></div>
        <h4>{item.title}</h4>
        <p>Deadline: {item.deadline}</p>
        <p>Status: {item.status}</p>
      </div>
    })

    console.log(this.state.todo)


    return(
      <Aux>
        <div className="mainDisplay">
          <div className="displayCard">{display}</div>
  
          <div className="todoListButton">
            <div>
              <button className="listButton" onClick={() => this.toggleModal()}>Add a Todo</button>
            </div>
  
            <div className="listDisplay">
              {todoListDisplay}
            </div>
          </div>
        </div>

        <Modal display={this.state.displayModal} >
          <MainForm submission={(value) => this.submitForm(value)} cancel={() => this.cancelForm() }/>
        </Modal>

      </Aux>
    )
  }
}


export default NameList;
