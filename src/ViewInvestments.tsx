import React, {Component} from "react";

export class ViewInvestments extends Component<any, any>{
    constructor(props:any) {
        super(props);
    }
render() {
    return (
        <div>
            <p>Username:</p>
            <p>Amount:</p>
            <p>Interest:</p>
        </div>
    );
}
}