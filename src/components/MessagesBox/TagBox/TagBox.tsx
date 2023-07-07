import React, { useState } from 'react';

import SendIcon from '@mui/icons-material/Send';
import { Autocomplete, IconButton, InputAdornment, TextField } from '@mui/material';

import { INPUT_BACKGROUND_COLOR } from '../../../constants/colors';

const TAGS = ['animals', 'cars', 'sport', 'gym', 'movies'];

interface TagBoxProps {
  onSubmit: (value: string) => void;
}
const TagBox = (props: TagBoxProps) => {
  const { onSubmit } = props;

  const [value, setValue] = useState<string>('');

  const handleInputChange = (value: string | null) => {
    value && setValue(value);
  };

  const handleSubmit = () => {
    value && onSubmit(value);
    setValue('');
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        id="tags"
        options={TAGS}
        value={value}
        onChange={(e, v) => handleInputChange(v)}
        onInputChange={(e, v) => handleInputChange(v)}
        freeSolo
        sx={{ backgroundColor: INPUT_BACKGROUND_COLOR }}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              style: { paddingRight: '14px' },
              placeholder: 'Input any tag',
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleSubmit}
                    edge="end"
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default TagBox;
