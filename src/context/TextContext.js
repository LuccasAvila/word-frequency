import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TextContext = createContext({
  text: '',
  setText: () => {},
  countWords: () => {},
  countChars: () => {},
});

const TextProvider = ({ children }) => {
  const [text, setText] = useState('');
  const countWords = () => {
    const words = text.split(/[\s,]+/).filter(w => w !== '');
    return words.length;
  };
  const countChars = () => text.length;

  return (
    <TextContext.Provider value={{ text, setText, countWords, countChars }}>
      {children}
    </TextContext.Provider>
  );
};

TextProvider.propTypes = { children: PropTypes.node.isRequired };

export default TextProvider;
