import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import moment from "moment"
import axios from 'axios';
import "./claimlist.css"



function ClaimList() {

  //usestate item,setitems to update item
  const [item, setitems] = useState([]);

  //axios get api to db and res to setitems
  useEffect(() => {
    axios.get("http://localhost:3001/claimlist")
      .then((response) => {
        setitems(response.data);
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
        setitems(prevItems => prevItems.filter(item => item._id !== _id));
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };

  const [status, setStatus] = useState('');

  // Handler function to update selected status
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const editItem = (_id, status) => {
    axios.patch(`http://localhost:3001/claimlist/${_id}/edit`, { status })
      .then((response) => {
        // Update the status of the item locally
        setitems(prevItems => prevItems.map(item => {
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

  // No. run number
  let No = 1


  return (
    <>
      <Nav />
      <div className='container-fluid mt-3'>
        <table className="table table-dark table-striped  table-bordered text-center">
          <thead class="thead-dark">
            <tr >
              <th scope="col" className='w-no'>No.</th>
              <th scope="col" className='w-name'>ชื่อลูกค้า</th>
              <th scope="col" className='w-tel'>เบอร์โทรติดต่อ</th>
              <th scope="col" className='w-tel' >เบอร์โทรที่สั่งซื้อ</th>
              <th scope="col" className='w-product'>Product</th>
              <th scope="col" className='w-from'>ซื้อจาก</th>
              <th scope="col" className='w-date'>วันที่</th>
              <th scope="col" className='w-status'>สถานะการเคลม</th>

            </tr>
          </thead>
          <tbody>
            {item.map((row) => (

              <tr>
                <th scope="row">{No++}</th>
                <td>{row.name}</td>
                <td>{row.tel}</td>
                <td>{row.cTel}</td>
                <td>{<span
                  className="btn w-100 h-100 btn btn-light border-bottom border-dark align-self-center"
                  data-bs-toggle="collapse"
                  href={`#${row._id}`}
                  role="button" aria-expanded="false"
                  aria-controls={row._id}
                >{row.nameProduct}
                  <div className="collapse" id={row._id}>
                    <div className="list-group list-group-flush border border-dark mt-3 rounded " >
                      <li className='list-group-item'>SN  {row.sn}</li>
                      <li className='list-group-item'>อาการ  {row.symp}</li>
                    </div>
                  </div></span>}</td>
                <td>{row.from}</td>
                <td>{moment(row.update_at).format("DD/MM/YY")}</td>
                <td><div>
                  {row.status}

                  {/* edit button */}
                  <button type="button" className="btn btn-light btn-sm mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">🔧</button>
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
                            <option onChange={handleStatusChange} value="ส่งเคลมเเล้ว">ส่งเคลมเเล้ว</option>
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

                  {/* del btn */}
                  <span href="#" className='btn btn-danger btn-sm ms-1' onClick={() => deleteItem(row._id)}>&times;</span>
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