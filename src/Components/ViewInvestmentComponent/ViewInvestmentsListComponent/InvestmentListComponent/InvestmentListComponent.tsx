import React,{FC} from "react";
import {Investmentstate} from "../../ViewInvestmentsComponent";
interface InvestmentListProps extends Investmentstate{}
 export const InvestmentListComponent:FC<InvestmentListProps> = (investments:InvestmentListProps)=>{
    return(
        <div>
            <div className='row'>
                <div className="col-md-6 offset-3">

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


                        {investments.investment.map(investment=>(
                            <tr key={investment.investmentId}>

                                <th scope="row">{investment.investmentId}</th>
                                <td>{investment.username}</td>
                                <td>{investment.amount}</td>
                                <td>{investment.duration}</td>
                                <td>{investment.investmentReturns}</td>
                                {/*<td><button onClick={()=> this.clickHandler(investment.investmentId)} className="btn btn-danger">Delete </button></td>*/}
                            </tr>
                        ))}
                        </tbody>

                    </table>

                </div>
                <div className="col-md-6">


                </div>
            </div>
        </div>
    )
}