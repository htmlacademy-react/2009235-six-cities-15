import { TailSpin } from 'react-loader-spinner';
import './styles.css';

function Spinner():JSX.Element {
  return (
    <TailSpin
      visible
      height="80"
      width="80"
      color="#4481c3"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass="spinner-wrapper"
    />
  );
}

export default Spinner;
