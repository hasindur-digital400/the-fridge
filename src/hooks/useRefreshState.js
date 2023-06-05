import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setItems, removeItems } from '../features/items/itemsSlice';
import { getAllItems } from '../apis/items';

export function useRefreshState() {
  const [refreshState, setRefreshState] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const { data, status } = await getAllItems();

      if (status === 200) {
        dispatch(setItems(data));
      } else {
        console.log(`Error: ${status}`);
      }

      setRefreshState(false);
    }

    if (refreshState) {
      dispatch(removeItems());
      fetchData();
    }
  }, [dispatch, refreshState]);

  return () => setRefreshState(true);
}
