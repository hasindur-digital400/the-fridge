import { differenceInCalendarDays } from 'date-fns';
import { ReactComponent as DeleteButton } from '../../assets/deleteIcon.svg';
import { useRefreshState } from '../../hooks/useRefreshState';
import { deleteItem } from '../../apis/items';
import './Item.scss';

function Item({ item }) {
  const refreshState = useRefreshState();

  const today = new Date();
  const expiringDate = new Date(item.expiry);
  let badgeText = '';
  let badgeModifierClass = '';
  let deleteButtonModifierClass = '';

  const daysToExpire = differenceInCalendarDays(expiringDate, today);

  if (daysToExpire <= 0) {
    badgeText = 'Expired';
    badgeModifierClass = 'badge--expired';
    deleteButtonModifierClass = 'item__delete-button--expired';
  } else if (daysToExpire < 7) {
    badgeText = 'Expiring soon';
    badgeModifierClass = 'badge--expiring-soon';
  } else {
    badgeText = 'Healthy';
    badgeModifierClass = 'badge--healthy';
  }

  const title = item.title.charAt(0).toUpperCase() + item.title.slice(1);
  const expiry = expiringDate.toLocaleDateString('en-GB');

  function handleDeleteClick() {
    deleteItem(item._id)
      .then(({ status }) => {
        if (status === 200) {
          refreshState();
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className='item'>
      <p className='item__title'>{title}</p>
      <p className='item__expiry'>Expiry date — {expiry}</p>

      <div className={`badge ${badgeModifierClass}`}>
        <p className='badge__text'>{badgeText}</p>
      </div>

      {/* <button
        className={`item__delete-button ${deleteButtonModifierClass}`}
        onClick={handleDeleteClick}
      > */}
      <DeleteButton
        className={`item__delete-button ${deleteButtonModifierClass}`}
        onClick={handleDeleteClick}
      />
      {/* </button> */}
    </div>
  );
}

export default Item;
