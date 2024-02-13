import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import moment from "moment"
import axios from 'axios';

function ClaimList() {
  const [item, setitems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/claimlist")
      .then((response) => {
        setitems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, [])
  // No. run number
  let No = 1

  return (

    <>

      <Nav />
      <div className='container-fluid mt-3'>
        <table className="table table-striped  table-bordered text-center">
          <thead >
            <tr >
              <th scope="col" className='w-auto'>No.</th>
              <th scope="col" className='w-auto'>ชื่อลูกค้า</th>
              <th scope="col" className='w-auto'>เบอร์โทรติดต่อ</th>
              <th scope="col" className='w-auto' >เบอร์โทรที่สั่งซื้อ</th>
              <th scope="col" className='w-10'>Product</th>
              {/* <th scope="col" className='w-auto'>SN</th>
              <th scope="col" className='w-auto'>อาการ</th> */}
              <th scope="col" className='w-auto'>ซื้อจาก</th>
              <th scope="col" className='w-auto'>วันที่</th>
              <th scope="col" className='w-auto'>สถานะการเคลม</th>

            </tr>
          </thead>
          <tbody>
            {item.map((row) => (

              <tr>
                <th scope="row">{No++}</th>
                <td>{row.name}</td>
                <td>{row.tel}</td>
                <td>{row.cTel}</td>
                {<a className="btn w-100 btn btn-outline-dark" data-bs-toggle="collapse" href= `#${row._id}`  role="button" aria-expanded="false" aria-controls={row._id}>
                  {row.nameProduct}
                </a>}
                    <div className="collapse" id={row._id}>
                    <div className="card card-body w-100">
                      SN = {row.sn}
                      <hr />
                      อาการ = {row.symp}
                    </div>
                    </div>
                <td>{row.from}</td>
                <td>{moment(row.update_at).format("DD MMM YY")}</td>
                <td></td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </>)
}

export default ClaimList