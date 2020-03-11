import React, { FC } from 'react';
import { connect } from 'react-redux';

interface OwnProps {
  inc(): void;
  dec(): void;
  rnd(): void;
}


interface StateProps {
  counter: number;
}

type Props = OwnProps & StateProps;

const CounterTemplate: FC<Props> = ({
  inc,
  dec,
  rnd,
  counter,
}) => {
  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h1>{counter}</h1>
        <button
          type="button"
          onClick={() => inc()}
        >
          INC
        </button>
        <button
          type="button"
          onClick={() => dec()}
        >
          DEC
        </button>
        <button
          type="button"
          onClick={() => rnd()}
        >
          RND
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: StateProps) => {
  return ({
    counter: state,
  });
};

// const mapDispatchToProps = (dispatch: Dispatch<T>) => {
//   // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//   // @ts-ignore
//   const { inc, dec, rnd } = bindActionCreators(actions, dispatch as (value: A) => void);
//
//   return {
//     inc,
//     dec,
//     rnd: () => {
//       const payload: number = Math.floor(Math.random() * 10);
//
//       rnd(payload);
//     },
//   };
// };

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export const Counter = connect<StateProps, {}, OwnProps, {}>(mapStateToProps)(CounterTemplate);
