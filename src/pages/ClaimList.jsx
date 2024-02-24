import React, { useEffect, useState } from 'react'
import Nav from '../component/Nav'
import moment from "moment"
import axios from 'axios';
import FormClaim from '../component/FormClaim';
import ReactDOMServer from 'react-dom/server';
import Printx from '../component/Printx';

function ClaimList() {

  //usestate item,setitems to update item
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('');
  const [originalItems, setOriginalItems] = useState([]);

  //axios get api to db and res to setitems
  useEffect(() => {
    axios.get("http://localhost:3001/claimlist")
      .then((response) => {
        setItems(response.data);
        setOriginalItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [])

  //delete item
  const deleteItem = (_id) => {
    axios.delete(`http://localhost:3001/claimlist/del/${_id}`)
      .then((response) => {
        // Filter out the deleted item from the items array
        setItems(prevItems => prevItems.filter(item => item._id !== _id));
        setOriginalItems(prevItems => prevItems.filter(item => item._id !== _id));
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };
  // onchange status
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  // onsubmit status
  const editItem = (_id, status) => {
    axios.patch(`http://localhost:3001/claimlist/${_id}/edit`, { status })
      .then((response) => {
        // Update the status of the item locally
        setItems(prevItems => prevItems.map(item => {
          if (item._id === _id) {
            return { ...item, status }
          }
          return item;
        }));
        setOriginalItems(prevItems => prevItems.map(item => {
          if (item._id === _id) {
            return { ...item, status };
          }
          return item;
        }));
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  }

  const handleSearchChange = async(event) => {
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


  const print = (rowData) => {
   
    if (!rowData || !rowData.name || !rowData.tel || !rowData.cTel || !rowData.nameProduct || !rowData.sn || !rowData.update_at || !rowData.from) {
      console.error('Invalid rowData:', rowData);
      return;
    }
    // Create a new window
    const printWindow = window.open('', '_blank');
    // Write the printable content to the new window
    printWindow.document.open();
    const htmlString = ReactDOMServer.renderToString(<Printx name={rowData.name} />);
    printWindow.document.write(htmlString);
    printWindow.document.close();
    // Print the new window
    printWindow.print();
  };


  return (
    <>
      <Nav />
      {/* ปุ่มค้นหา */}
      <div className='d-flex justify-content-end'>
        <div className="input-group m-3 w-50" >
          <input type="text" className="form-control" onChange={(e)=>handleSearchChange(e)} placeholder="ค้นหา.." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
        </div>
        {/* ปุ่มสร้างเคลมใหม่ */}
        <button type="button" className="btn btn-success m-3 " data-bs-toggle="modal" data-bs-target="#createclaim" data-bs-whatever="@mdo">New Claim</button>
        <div className="modal fade" id="createclaim" tabIndex="-1" aria-labelledby="editbtn" aria-hidden="true">
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="editbtn">New Claim</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <FormClaim />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* หัวตาราง */}
      <div className='container-fluid'>
        <table className="table table-light table-striped  table-bordered text-center">
          <thead className="thead-dark">
            <tr >
              <th scope="col" className='w-no'>No.</th>
              <th scope="col" className='w-name'>ชื่อลูกค้า</th>
              <th scope="col" className='w-tel'>เบอร์โทรติดต่อ</th>
              <th scope="col" className='w-product'>Product</th>
              <th scope="col" className='w-date'>วันที่</th>
              <th scope="col" className='w-status'>สถานะการเคลม</th>
            </tr>
          </thead>
          {/* ตัวตาราง */}
          <tbody>
            {items.map((row, index) => (
              <tr key={index} >
                <th scope="row" data-cell="No.">{index+1}</th>
                <td data-cell="Name">{row.name}</td>
                <td data-cell="Tel">{row.tel}</td>
                <td data-cell="Product">{<span
                  className="btn w-100 btn btn-light border-bottom border-dark align-self-center"
                  data-bs-toggle="collapse"
                  href={`#${row._id}`}
                  role="button" aria-expanded="false"
                  aria-controls={row._id}
                >{row.nameProduct}</span>}
                  <div className="collapse" id={row._id}>
                    <div className="list-group list-group-flush border border-dark mt-2 rounded " >
                      <li className='list-group-item d-flex justify-content-between'><div>ITEC :</div>  {row.cTel}</li>
                      <li className='list-group-item d-flex justify-content-between'><div>SN : </div>  {row.sn}</li>
                      <li className='list-group-item d-flex justify-content-between'><div>From :</div>  {row.from}</li>
                      <li className='list-group-item d-flex justify-content-between'><div>อาการ :</div>  {row.symp}</li>
                    </div>
                  </div></td>
                <td data-cell="Date">{moment(row.update_at).format("DD/MM/YY")}</td>
                <td data-cell="Status">
                  <div className='d-flex bd-highlight'>
                    <div className="flex-grow-1 bd-highlight">{row.status}</div>
                    {/* edit button */}
                    <button type="button" className="btn btn-light btn-sm ms-1" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">🔧</button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="editbtn" aria-hidden="true">
                      <div className="modal-dialog ">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="editbtn">EDIT</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <select className="form-select form-select-sm" aria-label="Small select example" onChange={handleStatusChange}>
                              <option defaultValue>รับเข้าสาขา</option>
                              <option onChange={handleStatusChange} value="ส่งเคลมเเล้ว">ส่งเคลมเเล้ว</option>
                              <option onChange={handleStatusChange} value="ส่งเคลมเเล้ว">กำลังเคลม</option>
                              <option onChange={handleStatusChange} value="เคลมผ่าน">เคลมผ่าน</option>
                              <option onChange={handleStatusChange} value="เคลมไม่ผ่าน">เคลมไม่ผ่าน</option>
                            </select>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => editItem(row._id, status)} data-bs-dismiss="modal">Update Status</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span href="#" src='' className='btn btn-info btn-sm ms-1' onClick={() => print(row)}>🖨️</span>
                    {/* del btn */}
                    <span href="#" className='btn btn-danger btn-sm ms-1 ' onClick={() => deleteItem(row._id)}>&times;</span>
                  </div>
                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </>)
}

export default ClaimList