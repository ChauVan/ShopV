import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class products extends React.Component {
  state = {
    Listproducts: [],
  };

  async componentDidMount() {
    let res = await axios.get(`https://nonophone.herokuapp.com/`);
    console.log("check data", res.data.product);
    this.setState({
      Listproducts: res && res.data && res.data.product ? res.data.product : [],
    });
  }

  render() {
    let { Listproducts } = this.state;
    return (
      <>
        <div className="product-item">
          {Listproducts &&
            Listproducts.length > 0 &&
            Listproducts.map((item, index) => {
              return (
                <div className="row featured__filter" id="MixItUp188E8F">
                  <div className="featured__item">
                    <div className="featured__item__text">
                      <img src={item.image} className="cangiua" />
                      <ul className="product-icon">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet"></i>
                          </a>
                        </li>
                        <li>
                          <Link to="/cart">
                            <i className="fa fa-shopping-cart"></i>
                          </Link>
                        </li>
                      </ul>
                      <h5>
                        <a href="#">{item.name}</a>
                      </h5>
                      <h5>{item.price} VND</h5>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
