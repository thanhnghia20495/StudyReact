import React, { Component } from 'react';
import css from '../App.css';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtUserName: '',
            txtPassword: '',
            txtDesc: '',
            sltGender: 1,
            rdlan: 'vi',
            ckAccept:true
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHanndleSubmit = this.onHanndleSubmit.bind(this);
    }

    onHandleChange(event) {
        var target=event.target;
        var name = target.name;
        var value = target.type==='checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onHanndleSubmit(event) {
        event.preventDefault();
        // var target=event.target;
        // var value=target.value;
        // var name= target.name;
        // this.setState({
        //     [name]:value
        // })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onHanndleSubmit} >
                    <legend>Form title</legend>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" onChange={this.onHandleChange} name="txtUserName" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" className="form-control" onChange={this.onHandleChange} name="txtPassword" placeholder="Password" />
                            </div>
                            <label className="control-label">Description</label>
                            <div className="form-group">
                                <textarea name="" className="form-control" rows="3" onChange={this.onHandleChange} name="txtDesc"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Gender</label>
                                <select name="sltGender" className="form-control" onChange={this.onHandleChange} value={this.state.sltGender}>
                                    <option value={0}>Female</option>
                                    <option value={1}>Male</option>
                                </select>
                            </div>
                            <div className="row col-md-12">
                                <label>Languages</label>
                                <div className="col-md-12">
                                    <label>
                                        <input type="radio" name="rdlan" value="vi" onChange={this.onHandleChange} checked={this.state.rdlan === 'vi'} />
                                        VI
                                </label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <label>
                                        <input type="radio" name="rdlan" value="en" onChange={this.onHandleChange} checked={this.state.rdlan === 'en'} />
                                        EN
                                </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group checkbox col-md-12">
                                <p className="labelCheckBox">
                                Accept Policy
                            <input type="checkbox" name="ckAccept" checked={this.state.ckAccept} onChange={this.onHandleChange}/>
                               </p>
                        </div>

                        <div className="form-group" className="col-md-12">
                            <br />
                            <button type="submit" className="btn btn-primary">Submit</button>

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;