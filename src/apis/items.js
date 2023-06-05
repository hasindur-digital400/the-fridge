import axios from './axios';

// @desc Retrieve all items
// @route GET /
export async function getAllItems() {
  const { data, status } = await axios.get('/');
  return { data, status };
}

// @desc Create a new item
// @route POST /
export async function createItem(item) {
  const { data, status } = await axios.post('/', item, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return { data, status };
}

// @desc Retrieve a single item
// @route GET /:id
export async function getItem(id) {
  const { data, status } = await axios.get(`/${id}`);
  return { data, status };
}

// @desc Retrieve a single item
// @route PUT /:id
export async function updateItem(id, item) {
  const { data, status } = await axios.put(`/${id}`, item);
  return { data, status };
}

// @desc Delete a single item
// @route DELETE /:id
export async function deleteItem(id) {
  const { data, status } = await axios.delete(`/${id}`);
  return { data, status };
}
