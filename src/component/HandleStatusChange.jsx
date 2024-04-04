import axios from 'axios';

const HandleStatusChange = (event,setStatus) => {
  setStatus(event.target.value);
  console.log("setstatus");
};

const EditItem = (_id, status,setItems) => {
  axios.patch(`https://project-back.vercel.app/claimlist/${_id}/edit`, { status })
    .then((response) => {
      // Update the status of the item locally
      setItems(prevItems => prevItems.map(item => {
        if (item._id === _id) {
          return { ...item, status }
        }
        return item;
      }));
    })
    .catch((error) => {
      console.error('Error updating item:', error);
    });
}
export {HandleStatusChange,EditItem}