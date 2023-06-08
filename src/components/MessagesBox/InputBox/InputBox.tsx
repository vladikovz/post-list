import React, { useState } from 'react';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface InputBoxProps {
  onSubmit: (value: string) => void;
}

const InputBox = (props: InputBoxProps) => {
  const { onSubmit } = props;
  const [value, setValue] = useState<string>('');

  const handleInputChange = (input: string) => {
    setValue(input);
  };

  const handleSubmit = () => {
    value && onSubmit(value);
    setValue('');
  };

  return (
    <div>
      <OutlinedInput
        sx={{ width: '100%', backgroundColor: 'white' }}
        placeholder={'Input text'}
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        id="outlined-adornment-password"
        type={'text'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={handleSubmit} edge="end">
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

export default InputBox;
