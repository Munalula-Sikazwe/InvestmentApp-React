import React, {Component} from "react";
import axios, {AxiosResponse} from "axios";
import {InvestmentListComponent} from "./ViewInvestmentsListComponent/InvestmentListComponent/InvestmentListComponent";





 export interface Investmentstate{
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
        axios.get<Investmentstate["investment"]>('https://localhost:5001/api/Investment/').then((response:AxiosResponse<Investmentstate["investment"]>)=>{
            console.log(response.data);
            this.setState({
                investment:response.data
            })
        })
    }
    clickHandler = (investmentId:number)=> {
        axios.delete<Investmentstate['investment']>(`https://localhost:5001/api/Investment/${investmentId}`).then((response:AxiosResponse<Investmentstate["investment"]>)=>{
            this.setState({investment:response.data})
        })

    }
    render():JSX.Element {
    return (
        <div className={"container"}>
<div className={"row"}>
    <div className="col-md-12">
        <InvestmentListComponent investment={this.state.investment}/>
    </div>

</div>


        </div>
    );
}
}