const SearchChange = async(event, originalItems, setItems) => {
    const searchTerm = await event.target.value.trim(); 
    if (!searchTerm) {
      setItems(originalItems);
      return;
    }
    const filteredItems = originalItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.cTel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nameProduct.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredItems);
  };
  
  export default SearchChange;
  