import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './DogDetails.css'

export default class DogDetails extends Component {
    render() {
        let {dog} = this.props
        return (
            <div className="container">
                <div className="row justify-content-center mt-4 mb-4">
                    <div className="col-5">
                        <div className="card DogDetails-card">
                            <img src={dog.src} alt={dog.name} />
                            <div className="card-body">
                                <p>{ this.props.dog.name }</p>
                                <h4 className="card-subtitle text-muted">Age: {dog.age}</h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                {dog.facts.map( (fact, i) => (
                                    <li className="list-group-item">{fact}</li>
                                ))}
                            </ul>
                            <div className="card-body"><Link to="/dogs" className="btn btn-info">Go Back</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
