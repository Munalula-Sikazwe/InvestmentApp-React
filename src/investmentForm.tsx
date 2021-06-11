import React,{ Component } from "react";
import axios from 'axios'
interface InvestmentProps {
    name: string;
    amount: number;
}
 export class InvestmentForm extends React.Component<any,any>{
    constructor(props:InvestmentProps) {
        super(props);
        this.state = {
username: '',
amount : 0
        }
    }
changeHandler= (e:any)=>{
        this.setState({[e.target.name]:[e.target.value]})
}
submitHandler = (e:any)=>{
   e.preventDefault();
   console.log(this.state);
}
render(){
        // @ts-ignore
    const { username, amount } = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='text' name='username' value={username} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type='number' name='amount' value={amount} onChange={this.changeHandler}/>
                    </div>
<button type='submit' > Submit </button>
                </form>
            </div>
        )
}
}