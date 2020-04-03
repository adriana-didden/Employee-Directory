import axios from "axios";





export default {
  search: function(query) {
  return axios.get("https://randomuser.me/api/?results=50&nat=us,dk,fr,gb")
 
  }
};
