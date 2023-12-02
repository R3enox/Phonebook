// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { closeModal } from 'redux/modal/modalSlice';
// import css from './Modal.module.css';
// import { selectModalData } from 'redux/modal/modalSelectors';
// import { StyledModal } from './Modal.styled';
// import {
//   fetchContactsThunk,
//   updateContactsThunk,
// } from 'redux/contacts/contactsThunk';

// export const Modal = () => {
//   const dispatch = useDispatch();
//   const modalData = useSelector(selectModalData);
//   const [userData, setUserData] = useState({
//     name: modalData.name,
//     phone: modalData.number,
//   });

//   useEffect(() => {
//     const handleKeyDown = evt => {
//       if (evt.code === 'Escape') {
//         dispatch(closeModal());
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     document.body.style.overflow = 'hidden';

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       document.body.style.overflow = 'auto';
//     };
//   }, [dispatch]);

//   const handleOverlayClick = evt => {
//     if (evt.target === evt.currentTarget) {
//       dispatch(closeModal());
//     }
//   };

//   const onAddSubmit = evt => {
//     evt.preventDefault();

//     const formData = {
//       name: userData.name,
//       number: userData.phone,
//     };

//     dispatch(updateContactsThunk({ contactId: modalData.id, formData }));
//     dispatch(closeModal());
//   };

//   const handleChange = evt => {
//     const { name, value } = evt.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   return (
//     <StyledModal onClick={handleOverlayClick}>
//       <div className="modal">
//         <h2>Contact Details</h2>
//         <form onSubmit={onAddSubmit}>
//           <label className={css.labelText}>
//             Name
//             <input
//               className={css.inputAdd}
//               type="text"
//               name="name"
//               value={userData.name}
//               onChange={handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               required
//             />
//           </label>
//           <label className={css.labelText}>
//             Phone
//             <input
//               className={css.inputAdd}
//               type="tel"
//               name="phone"
//               value={userData.phone}
//               onChange={handleChange}
//               pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//               required
//             />
//           </label>
//           <button type="submit" className={css.btnSbm}>
//             Update contact
//           </button>
//         </form>
//         <button onClick={() => dispatch(closeModal())} className="closeBtn">
//           ❌
//         </button>
//       </div>
//     </StyledModal>
//   );
// };

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/modal/modalSlice';
import { selectModalData } from 'redux/modal/modalSelectors';
import { updateContactsThunk } from 'redux/contacts/contactsThunk';
import { Box, Button, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const Modal = () => {
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);
  const [userData, setUserData] = useState({
    name: modalData.name,
    phone: modalData.number,
  });

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        dispatch(closeModal());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverlayClick = evt => {
    if (evt.target === evt.currentTarget) {
      dispatch(closeModal());
    }
  };

  const onAddSubmit = evt => {
    evt.preventDefault();

    const formData = {
      name: userData.name,
      number: userData.phone,
    };

    dispatch(updateContactsThunk({ contactId: modalData.id, formData }));
    dispatch(closeModal());
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Box
      component="div"
      sx={{
        zIndex: 999,
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      onClick={handleOverlayClick}
    >
      <Box
        component="div"
        sx={{
          paddingTop: '50px',
          maxWidth: '450px',
          width: '100%',
          minHeight: '450px',
          backgroundColor: 'white',
          borderRadius: '10px',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          '&:hover': {
            cursor: 'auto',
          },
          '& .MuiTextField-root': { m: 3, width: '40ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          onSubmit={onAddSubmit}
          component="form"
          sx={{
            display: 'flex',
            gap: '15px',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            required
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            label="Name"
          />
          <TextField
            required
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            label="Phone"
          />
          <Button type="submit" variant="contained" sx={{ maxWidth: 200 }}>
            Update contact
          </Button>
          <IconButton
            aria-label="close"
            sx={{ position: 'absolute', top: '15px', right: '15px' }}
            onClick={() => dispatch(closeModal())}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
