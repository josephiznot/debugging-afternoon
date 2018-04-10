import axios from "axios";
import React from "react";
import { connect } from "react-redux";

export const getAllProductsToo = function(props) {
  return axios
    .get("https://practiceapi.devmountain.com/products/")
    .then(response => {
      return response.data;
    });
};
// const mapStateToProps = state => state;
// export default connect(mapStateToProps)(getAllProducts);
