import React,{ Component } from "react";
import axios, {AxiosResponse} from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
interface InvestmentState {
    username: string;
    amount: number;
    duration:number;
    investmentReturns:number;
}
interface InvestmentProps{}
 export class MakeInvestmentComponent extends Component<InvestmentProps,InvestmentState>{
    state:InvestmentState;
    constructor(props:InvestmentProps) {
        super(props);

        this.state = {
username: '',
amount : 0,
duration: 0,
            investmentReturns:0
        }
    }
changeHandler= (event:any)=>{
        this.setState({[event.target.name]: event.target.value} as unknown as InvestmentState )
}
submitHandler = (event:any)=>{
   event.preventDefault();


   console.log(this.state)
   axios.post<InvestmentState>('http://127.0.0.1:8000/api/Investments',this.state).then(({data}:AxiosResponse<InvestmentState>) => {

       this.setState({
           investmentReturns:data.investmentReturns
       })
   }, (error) => {
       console.log(error);
   });
}
render():JSX.Element{

    const { username, amount,duration } = this.state
        return(
            <div className={'container'} >
                <div className='row'>
                    <div className='offset-4 col-md-4'>
                        <form onSubmit={this.submitHandler}>

                            <div className="form-group">
                                <label htmlFor='username'>Username</label>
                                <input type="text" className="form-control"  name="username"
                                       id='username' placeholder="Enter your username" onChange={this.changeHandler}
                                value={username}/>

                            </div>
                            <div className="form-group">
                                <label htmlFor="amount">Amount</label>
                                <input type="number" className="form-control" name="amount"
                                       id='amount'  placeholder="Enter amount you want to invest"
                                       onChange={this.changeHandler}
                                value={amount}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="amount">Duration</label>
                                <input type="number" className="form-control" name="duration"
                                       id='duration'  placeholder="Duration in years."
                                       onChange={this.changeHandler}
                                value={duration}/>
                            </div>

                            <button type="submit" className="btn btn-primary">Invest</button>
                        </form>
                    </div>

                </div>
                <hr/>
<p> Interest : {this.state.investmentReturns}</p>
            </div>
        )
}
}