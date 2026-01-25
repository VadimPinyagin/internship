const findAnElement = (elements) =>
  Array.from(elements).map((value, index) => ({ value, index }));

const processElements = (elements, callback) => {
  elements.forEach((item) => {
    const resultingElement = item.value;
    callback(resultingElement);
  });
};

export {findAnElement, processElements};
