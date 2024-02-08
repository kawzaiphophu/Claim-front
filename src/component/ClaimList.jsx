import React from 'react'
import Nav from './Nav'

function ClaimList() {
  return (
    <>
      <Nav />
      <div className='container-fluid mt-3'>
        <table className="table table-striped  table-bordered text-center">
          <thead >
            <tr >
              <th scope="col">ลำดับที่</th>
              <th scope="col">ชื่อลูกค้า</th>
              <th scope="col">เบอร์โทรติดต่อ</th>
              <th scope="col">เบอร์โทรที่สั่งซื้อ</th>
              <th scope="col">สินค้า</th>
              <th scope="col">SN</th>
              <th scope="col">อาการ</th>
              <th scope="col">ซื้อจาก</th>
              <th scope="col">วันที่</th>
              <th scope="col">สถานะการเคลม</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>อัครเดช</td>
              <td>099999999</td>
              <td>078888888</td>
              <td>Mainboard</td>
              <td>12937890hj1324</td>
              <td>เปิดไม่ติด</td>
              <td>บางพลัด</td>
              <td>25/10/2452</td>
              <td>ส่งเคลมเเล้ว</td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </>)
}

export default ClaimList