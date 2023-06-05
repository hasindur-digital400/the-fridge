import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from '../../components/FormInput';
import { createItem } from '../../apis/items';
import { useRefreshState } from '../../hooks/useRefreshState';
import './AddItem.scss';

const initialValues = {
  title: '',
  expiry: '',
};

// const tomorrow = new Date();
// tomorrow.setDate(tomorrow.getDate() + 1);

const validationSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too short!').required('Required'),
  expiry: Yup.date()
    // .min(tomorrow, "Don't add expired items!")
    .required('Required'),
});

function AddItem() {
  const refreshState = useRefreshState();

  async function addItem(values) {
    const item = JSON.stringify({
      ...values,
    });

    const { status } = await createItem(item);

    return status;
  }

  return (
    <div className='add-item'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addItem(values).then((status) => {
            if (status === 200) {
              alert('Item successfully added to the fridge');
              resetForm();
              refreshState();
            }
          });
          setSubmitting(false);
        }}
      >
        <Form className='add-item-form'>
          <FormInput label='🍉 Item Name' name='title' />
          <FormInput label='⏰ Expiry Date' name='expiry' type='date' />
          <button className='add-item-form__button' type='submit'>
            ADD TO FRIDGE
          </button>
        </Form>
      </Formik>
      <p className='add-item__info'>
        ⚠️ We don't want more than one piece of the same food in our fridge.
      </p>
    </div>
  );
}

export default AddItem;
