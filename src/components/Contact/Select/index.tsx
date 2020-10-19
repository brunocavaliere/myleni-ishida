import React, { useState, InputHTMLAttributes } from 'react';
import Select from 'react-select';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  value: string;
  setValue: any;
  onChange?: any;
}

const SelectInput: React.FC<Props> = ({ value, setValue }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputBlur(): void {
    setIsFocused(false);

    setIsFilled(!!value);
  }

  const selectOptions = [
    { value: 'Business English', label: 'Business English' },
    { value: 'TOEIC', label: 'TOEIC' },
    { value: 'IELTS', label: 'IELTS' },
    { value: 'TOEFL', label: 'TOEFL' },
  ];

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      font: 'var(--textLarge)',
      backgroundColor: 'none',
      color: state.isFocused
        ? 'var(--brandPrimary)'
        : 'var(--neutralPrimaryDark)',
    }),
    menuList: (provided: any) => ({
      ...provided,
      paddingTop: '2rem',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      margin: 0,
      font: 'var(--textLarge)',
      color: 'var(--neutralPrimaryDark)',
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: 0,
      margin: 0,
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: 'none',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      font: 'var(--textLarge)',
    }),
    control: (provided: any) => ({
      ...provided,
      borderRadius: 0,
      outline: 0,
      border: 'none',
      borderBottom: '1px solid var(--neutralPrimaryDark)',
      boxShadow: 'none',
      minHeight: '2.5rem',
    }),
  };

  function handleChange(event: any): void {
    setValue(event.value);
  }

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <Select
        onFocus={() => setIsFocused(true)}
        onBlur={handleInputBlur}
        className="select"
        placeholder="Escolha uma opção"
        options={selectOptions}
        styles={customStyles}
        value={selectOptions.find((obj) => obj.value === setValue)}
        onChange={handleChange}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: 'black',
          },
        })}
      />
      <label htmlFor="subject">Assunto</label>
    </Container>
  );
};

export default SelectInput;
