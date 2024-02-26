import axios from 'axios';

const DeleteItem = (_id, setItems) => {
  if (window.confirm("ต้องการลบหรือไม่ ?")) {
    try { axios.delete(`http://localhost:3001/claimlist/del/${_id}`)
    .then((response) => {
      // Update the items after successful deletion
      setItems(prevItems => prevItems.filter(item => item._id !== _id));
    })
    .catch((error) => {
      console.error('Error deleting item:', error);
    });

} catch (error) {
  // Handle error if deletion fails
  console.log(error);
  alert("An error occurred while deleting the data");
}}};
 
export default DeleteItem;

