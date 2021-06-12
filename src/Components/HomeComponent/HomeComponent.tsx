import React , {Component} from "react";

 export class HomeComponent extends Component<any, any>{
    constructor(props:any) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Welcome Home </h1>
                <h2> Invest while you can!</h2>
            </div>
        );
    }
}