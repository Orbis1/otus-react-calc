import React from 'react';
import './inputBox.css';

const onInput = (event) => {
  const { target } = event;
  const typed = target.value;
  const lastChar = typed.slice(-1);
  if (lastChar !== ' ') target.value += ' ';
}

const InputBox = () => {
  return (
    <form>
      <input className = 'inputBox' type="text" onInput={onInput} />
    </form>
  )
}

export default InputBox;