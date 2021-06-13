import React, {Component} from "react";
import axios from "axios";
// @ts-ignore


interface Investmentstate{
    investment: Array<{
        username:string,
        amount:number,
        investmentReturns:number,
        investmentId:number,
        duration:number
    }>

}
interface Investmentprops{}
export class ViewInvestmentsComponent extends Component<Investmentprops, Investmentstate>{
    state:Investmentstate;
    constructor(props:Investmentprops) {
        super(props);
        this.state = {
            investment: []
        }
    }
    componentDidMount() {
        axios.get('https://localhost:5001/api/Investment/').then(response=>{
            console.log(response.data);
            this.setState({
                investment:response.data
            })
        })

    }

    render() {
    return (
        <div className={"container"}>

                <div className='row'>
                    <div className="col-md-6 offset-1">

                        <table className="table thead-dark table-responsive table-striped  ">

                            <thead>
                            <tr>

                                <th scope="col">InvestmentId</th>
                                <th scope="col">Investor</th>
                                <th scope="col">Amount</th>
                                <th scope='col'>Duration</th>
                                <th scope="col">Returns</th>
                            </tr>
                            </thead>

                            <tbody >


                                {this.state.investment.map(investment=>(
                                <tr key={investment.investmentId}>

                                        <th scope="row">{investment.investmentId}</th>
                                      <td>{investment.username}</td>
                                        <td>{investment.amount}</td>
                                    <td>{investment.duration}</td>
                                        <td>{investment.investmentReturns}</td>
                                </tr>
                                ))}
                            </tbody>

                        </table>

                        </div>
                    <div className="col-md-6">

                    </div>
                </div>

        </div>
    );
}
}