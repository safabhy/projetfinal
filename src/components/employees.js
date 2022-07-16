import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import PropTypes from "prop-types";

class Employees extends Component {
 constructor(props) {
    super(props);
      this.state = {
      id: 0,
      employeeName: "",
      employeeDepartment: ""
    };
  }
  
  static propTypes = {
    employees: PropTypes.array.isRequired,
    getEmployees: PropTypes.func.isRequired,
    addEmployees: PropTypes.func.isRequired,
    editEmployees: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getEmployee();
  }

  onChangeInfo = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };
  submitData = () => {
    if (!this.state.id) {
      const newEmployee = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        employeeName: this.state.employeeName,
        employeeDepartment: this.state.employeeDepartment
      };
      this.props.addEmployees(newEmployee);
    } else {
        const updateDetails = {
        id: this.state.id,
        employeeName: this.state.employeeName,
        employeeDepartment: this.state.employeeDepartment
      };
      this.props.editEmployees(updateDetails);
    }
    this.clearData();
  };
  editDetails = event => {
    this.setState({
      id: event.id,
      employeeName: event.employeeName,
      employeeDepartment: event.employeeDepartment
    });
  };
  deleteEmployee = id => {
    this.clearData();
    if (window.confirm("Are you sure?")) {
      this.props.deleteEmployee(id);
    }
  };
  clearData = () => {
    this.setState({
      id: 0,
      employeeName: "",
      employeeDepartment: ""
    });
  };
  render() {
    return (
   
      <div className="Employees">
        <header className="App-header">
        </header>
       <p className="App-intro">
          <div className="leftsection">
            <label>Employee Name: </label>
            <input class="w3-input"
              type="text" placeholder="Employee Name"
              name="employeeName"
              onChange={this.onChangeInfo}
              value={this.state.employeeName}  />
            <br />
            <label>Employee Department: </label>
            <input class="w3-input"
              type="text"
              placeholder="Employee Department"
              name="employeeDepartment"
              onChange={this.onChangeInfo}
              value={this.state.employeeDepartment}
            />
            <br />    <br />
            {this.state.id ? (
              <button class="w3-button w3-purple" onClick={this.submitData}>UPDATE</button>
            ) : (
              <button class="w3-button w3-teal"  onClick={this.submitData}>ADD</button>
            )}{" "}
 
          </div>
          <div className="rightsection">

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                   <th>Name_employé</th>
                   <th>Department_employé</th>
                   <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.employees &&
                   this.props.employees.map((data, index) => {
                    return (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{data.employeeName}</td>
                        <td>{data.employeeDepartment}</td>
                        <td >
                          <button class="w3-button w3-yellow w3-border " onClick={() => this.editDetails(data)}>
                            EDIT
                          </button>{" "}
                          <button class="w3-bar-item w3-button w3-red" onClick={() => this.deleteEmployee(data.id)}>
                            DELETE
                          </button>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </p>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    employees: state.employees
  };
};
const mapDispatchToProps = dispatch => {

  return {

    getEmployee: () => 
    dispatch({type:actionTypes.GET_EMPLOYEE }),
    addEmployees:data =>

      dispatch({type:actionTypes.ADD_EMPLOYEE, payload:data }),
    editEmployees:data =>
      dispatch({type:actionTypes.EDIT_EMPLOYEE, payload:data }),
    deleteEmployee:id =>
      dispatch({type:actionTypes.DELETE_EMPLOYEE, payload:id })
  };
};

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);
