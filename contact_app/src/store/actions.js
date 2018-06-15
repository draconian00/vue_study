import contactAPI from '../api/ContactsAPI';
import Constant from '../constant';

export default {
  [Constant.ADD_CONTACT_FORM]: (store) => {
    store.commit(Constant.ADD_CONTACT_FORM);
  },
  [Constant.ADD_CONTACT]: (store) => {
    contactAPI.addContact(store.state.contact)
      .then((response) => {
        if (response.data.status === 'success') {
          store.dispatch(Constant.CANCEL_FORM);
          store.dispatch(Constant.FETCH_CONTACTS, { pageno: 1 });
        } else {
          console.log('Failed to adds contact:', reponse.data);
        }
      });
  },
  
}