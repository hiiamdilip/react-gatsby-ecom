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
                      <div class="card bg-dark"  >
                          <img src={img} class="card-img-top" alt="image"/>
                          <div class="card-body">
                              <h5 class="card-title text-success">Just click photos</h5>
                              <p class="card-text text-white">
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
