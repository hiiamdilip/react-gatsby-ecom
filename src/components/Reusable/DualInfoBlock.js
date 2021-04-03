import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function DualInfoBlock({heading, img}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                <div className="col-8 mx-auto">
                    <p className="lead text-white mb-5">
                        loremggggggg
                        vvvvvvvvvvvvvvvvvvvvvvvv
                    </p>
                </div>
                <div className="col-4">
                      <div className="card bg-dark"  >
                          <img src={img} className="card-img-top" alt="image"/>
                          <div className="card-body">
                              <h5 className="card-title text-success">Just click photos</h5>
                              <p className="card-text text-white">
                                  ddddddddddddddddddddd
                              </p>
                              <Link to="./team" className="btn btn-warning btn-block">
                                    {heading} 
                              </Link>
                          </div>
                      </div>
                </div>
                </div>
            </div>
        </section>
    )
}
