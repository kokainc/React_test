import React, { fetch, useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


GetSpecificList.propTypes = {
    id: PropTypes.any,
};
GetSpecificList.defaultProps = {
    id: [],
};





function getMoviesFromApiAsync(key) {
    const { id } = key;

    id = key;
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.id;
    })
    .catch((error) => {
      console.error(error);
    });
 }


function SetPrice(props) {
    const [CurrrencyVal, SetCurrencyVal] = useState([])
    //const {CurrrencyVal_} = props;

    return( 
        <a className="price" > 
        {CurrrencyVal.map(CurrrencyVal => (props.price))} </a>

    );

}




function GetSpecificList(props) {
    const { id } = props;

    return (
        <div>{
            
            getMoviesFromApiAsync()
            
            }
        </div>
    );
}



export default GetSpecificList;