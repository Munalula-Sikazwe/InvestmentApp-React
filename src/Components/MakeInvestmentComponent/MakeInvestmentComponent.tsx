import React,{ Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
interface InvestmentState {
    Username: string;
    Amount: number;
    Duration:number;
    returns:number;
}
interface InvestmentComponent{}
 export class MakeInvestmentComponent extends Component<InvestmentComponent,InvestmentState>{
    state:InvestmentState;
    constructor(props:any) {
        super(props);
        this.state = {
Username: '',
Amount : 0,
Duration: 0,
            returns:0
        }
    }
changeHandler= (e:any)=>{
        this.setState({[e.target.name]: e.target.value} as unknown as InvestmentState )
}
submitHandler = (e:any)=>{
   e.preventDefault();


   console.log(this.state)
   axios.post('https://127.0.0.1:5001/api/Investment',this.state).then((response:any) => {
       console.log(response.data);
       this.setState({
           returns:response.data
       })
   }, (error) => {
       console.log(error);
   });
}
render(){

    const { Username, Amount,Duration } = this.state
        return(
            <div className={'container'} >
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
                            <div className="form-group">
                                <label htmlFor="amount">Duration</label>
                                <input type="number" className="form-control" name='Duration'
                                       id='duration'  placeholder="Duration in years."
                                       onChange={this.changeHandler}
                                value={Duration}/>
                            </div>

                            <button type="submit" className="btn btn-primary">Invest</button>
                        </form>
                    </div>

                </div>
                <hr/>
<p> Interest : {this.state.returns}</p>
            </div>
        )
}
}