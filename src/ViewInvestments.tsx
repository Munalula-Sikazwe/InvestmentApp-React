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
        axios.get('https://localhost:5001/api/Investment/1').then(response=>{
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
            <p>Amount:  {this.state.investment.amount}</p>
            <p>Interest:</p>
        </div>
    );
}
}