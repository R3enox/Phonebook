// import { loginThunk } from 'redux/auth/authThunk';
// import { useDispatch } from 'react-redux';
// import css from './LogInPage.module.css';
// import toast from 'react-hot-toast';

// const LogInPage = () => {
//   const dispatch = useDispatch();

//   const onSubmit = evt => {
//     evt.preventDefault();

//     const email = evt.currentTarget.elements.userEmail.value;
//     const password = evt.currentTarget.elements.userPassword.value;

//     const formData = {
//       email,
//       password,
//     };

//     dispatch(loginThunk(formData))
//       .unwrap()
//       .catch(() =>
//         toast.error('Incorrect e-mail address or password. Try again.')
//       );
//   };

//   return (
//     <form onSubmit={onSubmit} className={css.formWrapper}>
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

// export default LogInPage;

import { loginThunk } from 'redux/auth/authThunk';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { Box, Button, TextField } from '@mui/material';

const LogInPage = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();

    const email = evt.currentTarget.elements.userEmail.value;
    const password = evt.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginThunk(formData))
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
        name="userEmail"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        label="Name"
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

export default LogInPage;
