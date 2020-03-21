import React from 'react'
import {Link} from 'gatsby'
import Title from "../Globals/Title";

export default function info() {
    return (
        <div>
            <section className="py-5">
<div className="container">
    <Title title="Our History"></Title>
    <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
<p className="lead text-muted mb-5">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
 Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a
 , venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. 
 Vivamus elementum semper nisi.</p>
<Link to="/about/">
    <button className="btn text-uppercase btn-purple">
About page
    </button>
    </Link>
        </div>
    </div>
</div>
            </section>
        </div>
    )
}
