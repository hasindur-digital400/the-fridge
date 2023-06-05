import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from './itemsSlice';
import Item from './Item';
import Loading from './Loading';
import { useRefreshState } from '../../hooks/useRefreshState';
import './ItemsSection.scss';

function ItemsSection() {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  const refreshState = useRefreshState();

  useEffect(() => {
    if (!items.length) {
      refreshState();
    }
  }, [items, dispatch, refreshState]);

  return (
    <div className='item-section'>
      {items.length ? (
        <div className='item-container'>
          <p className='item-container__count'>Total items — {items.length}</p>
          <div className='item-list'>
            {items.map((item) => (
              <Item item={item} key={item._id} />
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ItemsSection;
