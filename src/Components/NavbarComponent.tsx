import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export class NavbarComponent extends Component<any, any>{
    constructor(props:any) {
        super(props);
    }
render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Investment App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Make Investment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">See Investments</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}
}