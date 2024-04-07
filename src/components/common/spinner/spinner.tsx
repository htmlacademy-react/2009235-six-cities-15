import { TailSpin } from 'react-loader-spinner';
import './styles.css';

type SpinnerProps = {
  variant?: 'screen' | 'button';
};

function Spinner({variant = 'screen'}: SpinnerProps):JSX.Element {
  switch (variant) {
    case('screen'):
      return (
        <TailSpin
          visible
          height="80"
          width="80"
          color="#4481c3"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass="spinner-screen-wrapper"
        />
      );
    case('button'):
      return (
        <TailSpin
          visible
          height="18"
          width="18"
          color="#fff"
          ariaLabel="tail-spin-loading"
          strokeWidth='4'
          wrapperStyle={{}}
          wrapperClass="spinner-button-wrapper"
        />
      );

  }
}

export default Spinner;
