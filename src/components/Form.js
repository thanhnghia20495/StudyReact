import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);
        this.state={
            txtUserName:'',
            txtPassword:'',
            txtDesc:'',
        }
        this.onHandleChange=this.onHandleChange.bind(this);
        this.onHanndleSubmit=this.onHanndleSubmit.bind(this);
    }

    onHandleChange(event){
        var value=event.target.value;
        var name=event.target.name;
        this.setState({
            [name]:value
        })
    }
    
    onHanndleSubmit(event){
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
                <form onSubmit={this.onHanndleSubmit} role="form">
                    <legend>Form title</legend>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" onChange={this.onHandleChange} name="txtUserName" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" onChange={this.onHandleChange} name="txtPassword" placeholder="Password"/>
                    </div>
                    <label  className="control-label">Description</label>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <textarea name=""  className="form-control" rows="3" onChange={this.onHandleChange} name="txtDesc"></textarea>
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                
            </div>
        );
    }
}

export default Form;