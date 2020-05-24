import React, { Component } from "react";
import Clock from "react-live-clock";

class DashBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latestProduct: [],

        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/product/latest")
            .then((res) => res.json())
            .then((json) => {
                this.setState({

                    latestProduct: json,
                    isLoaded: true,

                });
            });
    }

    render() {

    return (
      <div>

          {/* Dashboard card area start */}
          <div className="sales-report-area sales-style-two">
              <div className="row">
                  <div className="col-xl-3 col-ml-3 col-md-6 mt-5">
                      <div className="single-report">
                          <div className="s-sale-inner pt--30 mb-3">
                              <div className="s-report-title d-flex justify-content-between">
                                  <h4 className="header-title mb-0">New Product</h4>
                              </div>
                          </div>
                          <div style={{height:"100px"}}>
                              <h1> T-Shirt</h1>
                              <h4> 2000</h4>
                          </div>

                      </div>
                  </div>
                  <div className="col-xl-3 col-ml-3 col-md-6 mt-5">
                      <div className="single-report">
                          <div className="s-sale-inner pt--30 mb-3">
                              <div className="s-report-title d-flex justify-content-between">
                                  <h4 className="header-title mb-0">Gross Profit</h4>
                              </div>
                          </div>
                          <canvas id="coin_sales5" height={100} />
                      </div>
                  </div>
                  <div className="col-xl-3 col-ml-3 col-md-6  mt-5">
                      <div className="single-report">
                          <div className="s-sale-inner pt--30 mb-3">
                              <div className="s-report-title d-flex justify-content-between">
                                  <h4 className="header-title mb-0">Orders</h4>
                              </div>
                          </div>
                          <canvas id="coin_sales6" height={100} />
                      </div>
                  </div>
                  <div className="col-xl-3 col-ml-3 col-md-6 mt-5">
                      <div className="single-report">
                          <div className="s-sale-inner pt--30 mb-3">
                              <div className="s-report-title d-flex justify-content-between">
                                  <h4 className="header-title mb-0">New</h4>
                              </div>
                          </div>
                          <canvas id="coin_sales7" height={100} />
                      </div>
                  </div>
              </div>
          </div>
          {/* Dashboard card area end */}

          <div className="card mt-5">
              <div className="card-body">
                  <div className="d-flex justify-content-between mb-5">
                      <Clock
                          ticking={true}
                          format={"dddd, MMMM Mo, YYYY | hh:mm:ss A"}
                          style={{ fontSize: "3em" }}
                      />
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default DashBoard;
