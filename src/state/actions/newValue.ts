type newValueAction = {
    type: 'NEW_VALUE';
    payload: number;
  };
  
  export const newValue = (n: number): newValueAction => ({
    type: 'NEW_VALUE',
    payload: n
  });
  