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
    axios.delete(`http://localhost:3001/claimlist/${_id}`)
      .then((response) => {
        // Filter out the deleted item from the items array
        setitems(prevItems => prevItems.filter(item => item._id !== _id));
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };


  const editItem = (_id)=>{
  
  }

  // No. run number
  let No = 1


  return (
    <>
      <Nav />
      <div className='container-fluid mt-3'>
        <table className="table table-light  table-bordered text-center">
          <thead >
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
                {<a
                  className="btn w-100 btn btn-dark border border-dark align-self-center"
                  data-bs-toggle="collapse"
                  href={`#${row._id}`}
                  role="button" aria-expanded="false"
                  aria-controls={row._id}
                >{row.nameProduct}</a>}
                <div className="collapse" id={row._id}>
                  <div className="list-group list-group-flush border border-dark" >
                    <li className='list-group-item'>SN  {row.sn}</li>
                    <li className='list-group-item'>อาการ  {row.symp}</li>
                  </div>
                </div>
                <td>{row.from}</td>
                <td>{moment(row.update_at).format("DD/MM/YY")}</td>
                <td>กำลังส่งเคลม  
                  <span href="#" className='btn btn-light btn-sm ms-1' onClick={() => editItem(row._id)}>🔧</span>  
                  <span href="#" className='btn btn-danger btn-sm ms-1' onClick={() => deleteItem(row._id)}>&times;</span></td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </>)
}

export default ClaimList