/* eslint-disable */
import axios from 'axios';
import CONF from '../config';

export default {
  fetchContacts(pageno, pagesize) {
    return axios.get(CONF.FETCH, {
      params: {
        pageno,
        pagesize,
      },
    });
  },
  fetchContactOne(no) {
    return axios.get(CONF.FETCH_ONE.replace('${no}', no));
  },
  addContact(contact) {
    return axios.post(CONF.ADD, contact);
  },
  updateContact(contact) {
    return axios.put(CONF.UPDATE.replace('${no}', contact.no), contact);
  },
  deleteContact(no) {
    return axios.delete(CONF.DELETE.replace('${no}', no));
  },
  updatePhoto(no, file) {
    let data = new FormData();
    data.append('photo', file);
    return axios.post(CONF.UPDATE_PHOTO.replace('${no}', no), data);
  },
};
