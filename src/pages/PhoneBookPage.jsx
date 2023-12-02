import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsIsLoading,
} from 'redux/contacts/contactsSelectors';
import { selectModalIsOpenMoadl } from 'redux/modal/modalSelectors';

const PhoneBookPage = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const isOpenModal = useSelector(selectModalIsOpenMoadl);
  const contacts = useSelector(selectContacts);
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
