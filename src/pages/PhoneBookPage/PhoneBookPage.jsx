import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsIsLoading,
} from 'redux/contacts/contactsSelectors';
import { fetchContactsThunk } from 'redux/contacts/contactsThunk';
import { selectModalIsOpenMoadl } from 'redux/modal/modalSelectors';

const PhoneBookPage = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const isOpenModal = useSelector(selectModalIsOpenMoadl);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      {contacts.length !== 0 && <Filter />}
      {isLoading ? <Loader /> : <ContactList />}
      {isOpenModal && <Modal />}
    </>
  );
};

export default PhoneBookPage;
