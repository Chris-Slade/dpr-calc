import { Dispatch, SetStateAction } from 'react';

interface ControlledInputProps<T> {
  value: T;
  onChange: Dispatch<SetStateAction<T>>;
}

export default ControlledInputProps;
