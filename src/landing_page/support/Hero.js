import React from "react";
function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-5" id="supportWrapper">
                <h4 className="">Support Portal</h4>
                <a href="" >Track Tickets</a>
            </div>
            <div className="row p-4 mx-5">
                <div className="col-6 p-5">
                    <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder="Eg: How to i activate F&O, why is my order getting rejected.."/><br/>
                    <a class="links" href="">Track account opening</a>
                    <a class="links" href="">Track segment activation</a>
                    <a class="links" href="">Intraday margins</a>
                    <a class="links" href="">Kite user manual</a>                    
                </div>
                <div className="col-6 p-4 mb-4 my-4">
                    <h1 className="fs-3 mb-3 ">Featured</h1>
                    <ol>
                        <li><a href="">Current Takeovers and Delisting - January2026</a></li>
                        <li><a href="">Latest intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;