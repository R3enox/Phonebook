import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { useSelector } from 'react-redux';
import { selectContactsIsLoading } from 'redux/contacts/contactsSelectors';
import { selectModalIsOpenMoadl } from 'redux/modal/modalSelectors';

const PhoneBookPage = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const isOpenModal = useSelector(selectModalIsOpenMoadl);
  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading ? <Loader /> : <ContactList />}
      {isOpenModal && <Modal />}
    </>
  );
};

export default PhoneBookPage;
