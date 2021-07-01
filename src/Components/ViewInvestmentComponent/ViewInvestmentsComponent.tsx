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
        axios.get<Investmentstate["investment"]>('https://investmentapp-backend.herokuapp.com/api/Investments').then(({data}:AxiosResponse<Investmentstate["investment"]>)=>{
            this.setState({
                investment:data
            })
        })
    }
    clickHandler = (investmentId:number)=> {
        axios.delete<Investmentstate['investment']>(`https://investmentapp-backend.herokuapp.com/api/Investments/Delete/${investmentId}`).then(()=>{
            alert(`The Investment of id:${investmentId} was deleted successfully`)
            axios.get<Investmentstate["investment"]>('https://investmentapp-backend.herokuapp.com/api/Investments').then(({data}:AxiosResponse<Investmentstate["investment"]>)=>{
                this.setState({
                    investment:data
                })
            })
        })
    }
    render():JSX.Element {
    return (
        <div className={"container"}>
<div className={"row"}>
    <div className="col-md-12">
        <InvestmentListComponent delete={this.clickHandler} investment={this.state.investment}/>
    </div>

</div>


        </div>
    );
}
}