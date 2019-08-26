import React, { Component } from 'react'
import './DogList.css'

class Doglist extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-12">
                <h1 className="display-4">Dogs List</h1>
            </div>
                {
                    this.props.dogs.map( d => (
                        <div className="col-md-4">
                            <h4>{d.name}</h4>
                            <img src={d.src} />
                            <h4>Age: {d.age}</h4>
                        </div>
                    ))
                }
                
            </div>
        )
    }
}

export default Doglist