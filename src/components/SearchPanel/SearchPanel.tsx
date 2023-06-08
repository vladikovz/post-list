import React, { useState } from 'react';
import styles from './SearchPanel.module.css';
import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Filter } from '../../interfaces/Filter';

interface SearchPanelProps {
  onSubmit: (inputValue: string, filter: Filter) => void;
}
const SearchPanel = (props: SearchPanelProps) => {
  const { onSubmit } = props;
  const [inputValue, setInputValue] = useState<string>('');
  const [filter, setFilter] = useState<Filter>('username');

  const handleInputChange = (value: string) => {
    if (inputValue !== value) {
      setInputValue(value);

      onSubmit(value, filter);
    }
  };

  const handleToggleButtonChange = (filterValue: Filter) => {
    if (filterValue && filterValue !== filter) {
      setFilter(filterValue);
      onSubmit(inputValue, filter);
    }
  };

  return (
    <div className={styles.container}>
      <TextField
        sx={{ backgroundColor: 'white' }}
        placeholder={'What are you looking for?'}
        variant="outlined"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <ToggleButtonGroup
        sx={{ backgroundColor: 'white' }}
        size={'small'}
        color="primary"
        value={filter}
        exclusive
        onChange={(e, value) => handleToggleButtonChange(value)}
      >
        <ToggleButton value="username">Username</ToggleButton>
        <ToggleButton value="userId">User id</ToggleButton>
        <ToggleButton value="body">Body</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default SearchPanel;
