// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContactsThunk } from 'redux/contacts/contactsThunk';
// import css from './ContactForm.module.css';
// import { selectFilteredContacts } from 'redux/filter/filterSelectors';

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectFilteredContacts);

//   const [userContact, setUserContact] = useState({ name: '', phone: '' });

//   const onAddSubmit = evt => {
//     evt.preventDefault();

//     const isExist = contacts.some(
//       contact => contact.name.toLowerCase() === userContact.name.toLowerCase()
//     );

//     if (isExist) {
//       alert(`${userContact.name} is already in contacts.`);
//       return;
//     }
//     const formData = {
//       name: userContact.name,
//       number: userContact.phone,
//     };
//     dispatch(addContactsThunk(formData));
//     setUserContact({ name: '', phone: '' });
//   };

//   const handleChange = evt => {
//     const { name, value } = evt.target;
//     setUserContact({ ...userContact, [name]: value });
//   };

//   return (
//     <form onSubmit={onAddSubmit} className={css.formWrapper}>
//       <label className={css.labelText}>
//         Name
//         <input
//           className={css.inputAdd}
//           type="text"
//           name="name"
//           value={userContact.name}
//           onChange={handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           required
//         />
//       </label>
//       <label className={css.labelText}>
//         Phone
//         <input
//           className={css.inputAdd}
//           type="tel"
//           name="phone"
//           value={userContact.phone}
//           onChange={handleChange}
//           pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//           required
//         />
//       </label>
//       <button type="submit" className={css.btnSbm}>
//         Add contact
//       </button>
//     </form>
//   );
// };

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'redux/contacts/contactsThunk';
import { selectFilteredContacts } from 'redux/filter/filterSelectors';
import { Box, Button, TextField } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const [userContact, setUserContact] = useState({ name: '', phone: '' });

  const onAddSubmit = evt => {
    evt.preventDefault();

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === userContact.name.toLowerCase()
    );

    if (isExist) {
      alert(`${userContact.name} is already in contacts.`);
      return;
    }
    const formData = {
      name: userContact.name,
      number: userContact.phone,
    };
    dispatch(addContactsThunk(formData));
    setUserContact({ name: '', phone: '' });
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setUserContact({ ...userContact, [name]: value });
  };

  return (
    <Box
      onSubmit={onAddSubmit}
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& .MuiTextField-root': { m: 3, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        type="text"
        name="name"
        value={userContact.name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        label="Name"
      />
      <TextField
        required
        type="tel"
        name="phone"
        value={userContact.phone}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        label="Phone"
      />
      <Button type="submit" variant="contained" sx={{ maxWidth: 150 }}>
        Add contact
      </Button>
    </Box>
  );
};
