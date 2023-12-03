// import { useDispatch, useSelector } from 'react-redux';
// import { selectContactsIsLoading } from 'redux/contacts/contactsSelectors';
// import css from './ContactListItem.module.css';
// import { deleteContactsThunk } from 'redux/contacts/contactsThunk';
// import { Modal } from 'components/Modal/Modal';
// import { openModal } from 'redux/modal/modalSlice';
// import { selectModalIsOpenMoadl } from 'redux/modal/modalSelectors';

// export const ContactListItem = ({ items, deleteContact }) => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectContactsIsLoading);
//   const isOpenModal = useSelector(selectModalIsOpenMoadl);
//   const showContacts = Array.isArray(items) && items.length > 0;
//   return (
//     showContacts &&
//     items.map(({ id, name, number }) => (
//       <>
//         <li key={id} className={css.listItem}>
//           {name}: {number}
//           <button
//             onClick={() => dispatch(openModal({ id, name, number }))}
//             className={css.btnDel}
//           >
//             Edit
//           </button>
//           <button
//             disabled={isLoading}
//             onClick={() => dispatch(deleteContactsThunk(id))}
//             className={css.btnDel}
//           >
//             Delete
//           </button>
//         </li>
//         {isOpenModal && <Modal />}
//       </>
//     ))
//   );
// };

import { useDispatch, useSelector } from 'react-redux';
import { selectContactsIsLoading } from 'redux/contacts/contactsSelectors';
import { deleteContactsThunk } from 'redux/contacts/contactsThunk';
import { openModal } from 'redux/modal/modalSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import { selectFilteredContacts } from 'redux/filter/filterSelectors';

export const ContactListItem = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);
  const items = useSelector(selectFilteredContacts);
  const showContacts = Array.isArray(items) && items.length > 0;

  const handleDelte = id => dispatch(deleteContactsThunk(id));

  return (
    showContacts &&
    items.map(({ id, name, number }) => (
      <ListItem
        sx={{ borderBottom: 1 }}
        key={id}
        disableGutters
        secondaryAction={
          <>
            <IconButton
              aria-label="comment"
              onClick={() => dispatch(openModal({ id, name, number }))}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="comment"
              disabled={isLoading}
              onClick={() => {
                handleDelte(id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </>
        }
      >
        <ListItemText sx={{ fs: 40 }} primary={`${name}: ${number}`} />
      </ListItem>
    ))
  );
};
