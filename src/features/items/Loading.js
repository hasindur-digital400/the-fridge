import { ReactComponent as Dot } from '../../assets/dot.svg';
import './Loading.scss';

function Loading() {
  return (
    <div className='loading'>
      <div className='dot-container'>
        <Dot />
        <Dot />
        <Dot />
      </div>
      <p className='loading__text'>Loading fridge items</p>
    </div>
  );
}

export default Loading;
