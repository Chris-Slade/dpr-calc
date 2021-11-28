interface ControlledInputProps<T> {
  value: T;
  onChange: (newValue: T) => unknown;
}

export default ControlledInputProps;
