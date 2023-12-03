// import { useDispatch, useSelector } from 'react-redux';
// import css from './ContactList.module.css';
// import { selectContactsIsLoading } from 'redux/contacts/contactsSelectors';
// import { fetchContactsThunk } from 'redux/contacts/contactsThunk';
// import { useEffect } from 'react';
// import { selectFilteredContacts } from 'redux/filter/filterSelectors';
// import { ContactListItem } from 'components/ContactListItem/ContactListItem';

// export const ContactList = () => {
//   const dispatch = useDispatch();
//   const items = useSelector(selectFilteredContacts);

//   useEffect(() => {
//     dispatch(fetchContactsThunk());
//   }, [dispatch]);

//   return (
//     <ul className={css.list}>
//       <ContactListItem items={items} />
//     </ul>
//   );
// };

import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts/contactsThunk';
import { useEffect } from 'react';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import List from '@mui/material/List';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    >
      <ContactListItem />
    </List>
  );
};
