import axios from 'axios';
import Constant from '../constant';

export default {
  searchContact: name => axios.get(Constant.BASE_URL + name),
};
