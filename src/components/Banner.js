import AddItem from '../features/items/AddItem';
import './Banner.scss';

function Banner() {
  return (
    <div className='banner'>
      <div className='heading-container'>
        <h1 className='heading-container__heading'>Good Morning, Johnny!</h1>
        <p className='heading-container__tagline'>
          🌥️ It's better to go shopping before this friday
        </p>
      </div>
      <AddItem />
    </div>
  );
}

export default Banner;
