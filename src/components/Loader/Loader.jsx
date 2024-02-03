import { InfinitySpin } from 'react-loader-spinner';
//
import { Backdrop } from 'components/Backdrop/Backdrop.styled';

const Loader = () => {
  return (
    <Backdrop>
      <InfinitySpin
        visible={true}
        width="300"
        color="#0e449c"
        ariaLabel="infinity-spin-loading"
      />
    </Backdrop>
  );
};

export default Loader;
