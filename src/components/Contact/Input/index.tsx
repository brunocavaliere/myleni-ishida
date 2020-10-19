import React, { useRef, useState, InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  onChange: any;
}

const Input: React.FC<Props> = ({ id, label, placeholder, type, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputBlur(): void {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={handleInputBlur}
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
};

export default Input;
