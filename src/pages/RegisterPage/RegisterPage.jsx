// import { useDispatch } from 'react-redux';
// import css from './RegisterPage.module.css';
// import { registerThunk } from 'redux/auth/authThunk';
// import toast from 'react-hot-toast';
// const RegisterPage = () => {
//   const dispatch = useDispatch();

//   const onSubmit = evt => {
//     evt.preventDefault();

//     const name = evt.currentTarget.elements.userName.value;
//     const email = evt.currentTarget.elements.userEmail.value;
//     const password = evt.currentTarget.elements.userPassword.value;

//     const formData = {
//       name,
//       email,
//       password,
//     };

//     dispatch(registerThunk(formData))
//       .unwrap()
//       .catch(() =>
//         toast.error('Incorrect e-mail address or password. Try again.')
//       );
//   };
//   return (
//     <form onSubmit={onSubmit} className={css.formWrapper}>
//       <label className={css.labelText}>
//         Name
//         <input
//           className={css.inputAdd}
//           type="text"
//           name="userName"
//           placeholder="Name"
//           required
//         />
//       </label>
//       <label className={css.labelText}>
//         Email
//         <input
//           className={css.inputAdd}
//           type="email"
//           name="userEmail"
//           placeholder="example@example.com"
//           required
//         />
//       </label>
//       <label className={css.labelText}>
//         Password
//         <input
//           className={css.inputAdd}
//           type="password"
//           name="userPassword"
//           placeholder="*******"
//           required
//         />
//       </label>
//       <button type="submit" className={css.btnSbm}>
//         Submit
//       </button>
//     </form>
//   );
// };

// export default RegisterPage;

import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authThunk';
import toast from 'react-hot-toast';
import { Box, Button, TextField } from '@mui/material';
const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();

    const name = evt.currentTarget.elements.userName.value;
    const email = evt.currentTarget.elements.userEmail.value;
    const password = evt.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(registerThunk(formData))
      .unwrap()
      .catch(() =>
        toast.error('Incorrect e-mail address or password. Try again.')
      );
  };
  return (
    <Box
      onSubmit={onSubmit}
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
        name="userName"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        label="Name"
      />
      <TextField
        required
        type="email"
        name="userEmail"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        label="E-mail"
      />
      <TextField
        required
        type="password"
        name="userPassword"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        label="Password"
      />
      <Button type="submit" variant="contained" sx={{ maxWidth: 150 }}>
        Submit
      </Button>
    </Box>
  );
};

export default RegisterPage;
