import React, {Component} from 'react';
import Item from "./Item";


class Categories extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemList: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/product/all')
            .then(res => res.json())
            .then(json =>{
                console.log("json",json);
                this.setState({
                    itemList: json,
                    isLoaded: true
                })
            });
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-4 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="header-title">Products List</h4>

                        </div>
                    </div>
                </div>


                <div className="col-lg-8 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                {this.state.itemList.map(item => (
                                    
                                        <Item id={item._id} productName={item.productName} price={item.price}/>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;