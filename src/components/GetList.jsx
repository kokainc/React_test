import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {Header} from "./header";
import GetPrice from './GetPrice'
import Rows from '../Rows';

GetList.propTypes = {
    productList: PropTypes.array,
};
GetList.defaultProps = {
    productList: [],
};


//create an array
//set price to each array









function GetList(props) {
    const [CurrrencyVal, SetCurrencyVal] = useState(1);

    function handleFromAmountChange(e) {
        SetPrice(e.target.value)
        
      }

    function SetPrice(values) {
    
    
        SetCurrencyVal(CurrrencyVal * values);
    
       /* return( 
            <a className="price" > 
            {CurrrencyVal.map(CurrrencyVal => (props.price))} </a>
    
        );
    */
    }
    
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
      } = props

    const { productList } = props;
    return (
        <div>
            
                    
            {productList.map(post => (
               
                
                <div className="Wrapper">
                    
                    <div className="Cards">
                        <div className="Material">
                           
                        
                            <img src={(post.image)} width="120"/>
                            <h2>
                            <Link to = {`/products/${post.id}`}>{post.title}
                            </Link>
                            </h2>
                            <p>{post.description}</p>
                            <h3>{post.category}</h3>
                            <p>{post.price * CurrrencyVal}</p>
                            
                            
                            
                            
                        
                            
                        </div>
                    </div>
                </div> 
            ))}
        </div>
        
    );
    
}





export default GetList;
