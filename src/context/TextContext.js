import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TextContext = createContext({
  text: '',
  setText: () => {},
  countWords: () => {},
  countChars: () => {},
  wordFrequency: () => {},
});

const TextProvider = ({ children }) => {
  const [text, setText] = useState('');

  const countWords = () => {
    const words = text.split(/[\s,]+/).filter(w => w !== '');
    return words.length;
  };

  const countChars = () => text.length;

  const wordFrequency = () => {
    let words = text.split(/[\s,]+/).filter(w => w !== '');
    words = words.reduce((output, word) => {
      return { ...output, ...{ [word]: output[word] ? output[word] + 1 : 1 } };
    }, {});
    const sortable = [];

    Object.keys(words).forEach(word => {
      sortable.push([word, words[word]]);
    });

    return sortable.sort((a, b) => {
      return b[1] - a[1];
    });
  };

  return (
    <TextContext.Provider
      value={{ text, setText, countWords, countChars, wordFrequency }}
    >
      {children}
    </TextContext.Provider>
  );
};

TextProvider.propTypes = { children: PropTypes.node.isRequired };

export default TextProvider;
