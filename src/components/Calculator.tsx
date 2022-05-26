import { useDispatch, useSelector } from 'react-redux';


import { selectCurrentNumber } from 'state/selectors/selectCurrentNumber';
import { selectCurrentStack } from 'state/selectors/selectCurrentStack';
import { addition,
          newValue,
          substraction,
          multiplication,
          divition,
          squareRoot,
          summation,
          intro,
          undo,
          dot } from 'state/actions';


import styles from './Calculator.module.css';

const renderStackItem = (value: number, index: number) => {
  return <div key={index}>{value}</div>;
};

export const Calculator = () => {
  const currentNumber = useSelector(selectCurrentNumber);
  const stack = useSelector(selectCurrentStack);

  const dispatch = useDispatch();
  
  const onClickNumber = (n: number) => {
    const newValueAction = newValue(n);
    dispatch(newValueAction);
  };
  const onDotClick = () => {
    const dotAction = dot();
    dispatch(dotAction);
  };

  const onAddClick = () => {
    const addAction = addition()
    dispatch(addAction)
  };

  const onSubClick = () => {
    const subAction = substraction()
    dispatch(subAction)
  };
  const onMultClick = () => {
    const multAction = multiplication()
    dispatch(multAction)
  }
  const onDivClick = () => {
    const divAction = divition()
    dispatch(divAction)
  }
  const onSqrClick = () => {
    const sqrAction = squareRoot()
    dispatch(sqrAction)
  }
  const onSumClick = () => {
    const sumAction = summation()
    dispatch(sumAction)
  }
  const onUndoClick = () => {
    const undoAction = undo()
    dispatch(undoAction)
  }

  const onIntroClick = () => {
    const introAction = intro()
    dispatch(introAction)
  }



  return (
    <div className={styles.main}>
      <div className={styles.display}>{currentNumber}</div>
      <div className={styles.numberKeyContainer}>
        {[...Array(9).keys()].map((i) => (
          <button key={i} onClick={() => onClickNumber(i + 1)}>
            {i + 1}
          </button>
        ))}
        <button className={styles.zeroNumber} onClick={() => onClickNumber(0)}>
          0
        </button>
        <button onClick={() => onDotClick()}>.</button>
      </div>
      <div className={styles.opKeyContainer}>
        <button onClick={() => onAddClick()}>+</button>
        <button onClick={() => onSubClick()}>-</button>
        <button onClick={() => onMultClick()}>x</button>
        <button onClick={() => onDivClick()}>/</button>
        <button onClick={() => onSqrClick()}>√</button>
        <button onClick={() => onSumClick()}>Σ</button>
        <button onClick={() => onUndoClick()}>Undo</button>
        <button onClick={() => onIntroClick()}>Intro</button>
      </div>
      <div className={styles.stack}>{stack.map(renderStackItem)}</div>
    </div>
  );
};
