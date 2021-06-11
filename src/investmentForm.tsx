import React,{ Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
interface InvestmentProps {
    name: string;
    amount: number;
}
 export class InvestmentForm extends React.Component<any,any>{
    constructor(props:InvestmentProps) {
        super(props);
        this.state = {
Username: '',
Amount : 0
        }
    }
changeHandler= (e:any)=>{
        this.setState({[e.target.name]:[e.target.value]})
}
submitHandler = (e:any)=>{
   e.preventDefault();
   console.log(this.state);
   let postdata = {
       Username:this.state.Username[0],
       Amount:this.state.Amount[0]
   }
   axios.post('https://127.0.0.1:5001/api/Investment',postdata).then((response) => {
       console.log(response);
   }, (error) => {
       console.log(error);
   });
}
render(){

    const { Username, Amount } = this.state
        return(
            <div className='container' >
                <div className='row'>
                    <div className='offset-4 col-md-4'>
                        <form onSubmit={this.submitHandler}>

                            <div className="form-group">
                                <label htmlFor='username'>Username</label>
                                <input type="text" className="form-control"  name='Username'
                                       id='username' placeholder="Enter your username" onChange={this.changeHandler}
                                value={Username}/>

                            </div>
                            <div className="form-group">
                                <label htmlFor="amount">Amount</label>
                                <input type="number" className="form-control" name='Amount'
                                       id='amount'  placeholder="Enter amount you want to invest"
                                       onChange={this.changeHandler}
                                value={Amount}/>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>

            </div>
        )
}
}