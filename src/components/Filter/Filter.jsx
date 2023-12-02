// import { useDispatch, useSelector } from 'react-redux';
// import css from './Filter.module.css';
// import { selectFilterTerm } from 'redux/filter/filterSelectors';
// import { filterChange } from 'redux/filter/filterSlice';

// export const Filter = () => {
//   const value = useSelector(selectFilterTerm);
//   const dispatch = useDispatch();

//   const filterContacts = evt => {
//     const filterValue = evt.target.value.toLowerCase().trim();
//     dispatch(filterChange(filterValue));
//   };

//   return (
//     <div className={css.wrapper}>
//       <label className={css.labelText}>
//         Find contacts by name or number
//         <input
//           className={css.inputAdd}
//           type="text"
//           name="filters"
//           value={value}
//           onChange={filterContacts}
//         />
//       </label>
//     </div>
//   );
// };

import { useDispatch, useSelector } from 'react-redux';
import { selectFilterTerm } from 'redux/filter/filterSelectors';
import { filterChange } from 'redux/filter/filterSlice';
import { Box, TextField } from '@mui/material';

export const Filter = () => {
  const value = useSelector(selectFilterTerm);
  const dispatch = useDispatch();

  const filterContacts = evt => {
    const filterValue = evt.target.value.toLowerCase().trim();
    dispatch(filterChange(filterValue));
  };

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        '& .MuiTextField-root': { m: 3, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Find yout contact"
        type="text"
        name="filters"
        value={value}
        onChange={filterContacts}
        helperText="Filter contact"
        variant="filled"
      />
    </Box>
  );
};
