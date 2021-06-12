import React, {Component} from "react";
import axios from "axios";
export class ViewInvestments extends Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
            investment: {}
        }
    }
   async componentDidMount() {
        axios.get('https://localhost:5001/api/Investment/7').then(response=>{
            console.log(response.data);
            this.setState((investment:object)=>({
                investment:response.data
            }))
        })

    }

    render() {
    return (
        <div>
            <p>Username:  {this.state.investment.username}</p>
            <p>Amount Invested:  {this.state.investment.amount}</p>
            <p>Investment Returns: {this.state.investment.investmentReturns}</p>
            <p>Investment Id: {this.state.investment.investmentId}</p>
        </div>
    );
}
}