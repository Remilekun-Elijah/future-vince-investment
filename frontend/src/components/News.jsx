import React from "react";

const News = () => {
  return (
    <div className=" news-bg px-14">
      <h1 className="my-4 display-4 text-light">
        Our Latest <span className="title-spn">News </span>
      </h1>
      <p className="mb-5 text-light">
        you will get each update about our system and the world market in this
        area. Keep <br></br> checking our Latest News to be in touch.{" "}
      </p>
      <div className="row m-auto">
        <div className="col-md-4">
          <div className="card bg-dark new-bd">
            <img
              className="card-img-top news-img "
              src="./images/news1.jpg"
              alt="Card image cap"
            />
            <div className="card-body text-light text-start">
              <h5 className="card-title">
                Why Bitcoin will eventually change the world.
              </h5>
              <p className="card-text">
                If you take even a passing interest in technology or finance,
                you’ll already know about Bitcoin. The digital currency was
                released in 2009 and was heralded as a decentralised network for
                value exchange that would take power away from governments and
                big banks and put it in the hands of ordinary people...
              </p>
              <a href="#" className="btn btn-custom">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark new-bd">
            <img
              className="card-img-top news-img "
              src="./images/news2.jpg"
              alt="Card image cap"
            />
            <div className="card-body text-light text-start">
              <h5 className="card-title">How Bitcoin Works</h5>
              <p className="card-text">
                How exactly to categorize Bitcoin is a matter of controversy. Is
                it a type of currency, a store of value, a payment network or an
                asset class? Fortunately, it's easier to define what Bitcoin
                actually is. It's software. Don't be fooled by stock images of
                shiny coins emblazoned with modified Thai baht symbols...
              </p>
              <a href="#" className="btn btn-custom">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
