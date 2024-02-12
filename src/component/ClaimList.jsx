import React,{useEffect, useState} from 'react'
import Nav from './Nav'


function ClaimList() {
  const [item,setitems] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3001/")
    .then(res=>res.json())
    .then(
      (result)=>{
        setitems(result);
      }
    )
  },[])


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
            {item.map((row)=>(
              <tr>
              <th scope="row">{row.id}</th>
              <td>{row.name}</td>
              <td>{row.tel}</td>
              <td>{row.ctel}</td>
              <td>{row.productName}</td>
              <td>{row.sn}</td>
              <td>{row.sym}</td>
              <td>{row.from}</td>
              <td>{row.update_at}</td>
              <td>ส่งเคลมเเล้ว</td>
            </tr>
            ))}
            
          
          </tbody>
        </table>
      </div>
    </>)
}

export default ClaimList