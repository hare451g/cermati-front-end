import { useState } from 'react';

function useFormInput(initialState) {
  const [value, setValue] = useState(initialState);

  const handleValueChange = event => {
    setValue(event.target.value);
  };

  return [value, handleValueChange];
}

export default useFormInput;