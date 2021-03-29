import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import Header from "./header";

GetPrice.propTypes = {
    currencyVals: PropTypes.any,
};
GetPrice.defaultProps = {
    currencyVals: (1)
};


  

  export function GetPrice(props) {
    const [CurrrencyVal, SetCurrencyVal] = useState(1);
    const { currencyVals } = props;  

    



    return(
        
    SetCurrencyVal(CurrrencyVal * currencyVals)
  
     /* return( 
          <a className="price" > 
          {CurrrencyVal.map(CurrrencyVal => (props.price))} </a>
  
      );
  */
     ) }
  export default GetPrice;