// components/ClaimTable.js
import React from 'react';
import moment from 'moment';
import Print from './Print';
import DeleteItem from './DeleteItem';
import {HandleStatusChange,EditItem} from './HandleStatusChange'

const ClaimTable = ({ items, setItems,status,setStatus}) => {

  return (
    <tbody>
      { items.map((row, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{row.name}</td>
          <td>{row.tel}</td>
          <td>
            <span
              className="btn w-100 btn btn-light border-bottom border-dark align-self-center"
              data-bs-toggle="collapse"
              href={`#${row._id}`}
              role="button"
              aria-expanded="false"
              aria-controls={row._id}
            >
              {row.nameProduct}
            </span>
            <div className="collapse" id={row._id}>
              <div className="list-group list-group-flush border border-dark mt-2 rounded">
                <li className="list-group-item d-flex justify-content-between">
                  <div>ITEC :</div> {row.cTel}
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <div>SN : </div> {row.sn}
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <div>From :</div> {row.from}
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <div>อาการ :</div> {row.symp}
                </li>
              </div>
            </div>
          </td>
          <td>{moment(row.update_at).format("DD/MM/YY")}</td>

          <td>
            <div className="d-flex bd-highlight">
              <div className="flex-grow-1 bd-highlight">{row.status}</div>
            </div>
          </td>
          <td>
            <button type="button" className="btn btn-light btn-sm ms-1" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">🔧</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="editbtn" aria-hidden="true">
              <div className="modal-dialog ">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="editbtn">EDIT</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  <select className="form-select form-select-sm" aria-label="Small select example" value={status} onChange={(e) => HandleStatusChange(e, setStatus)}>
                      <option>รับเข้าสาขา</option>
                      <option value="ส่งเคลมเเล้ว">ส่งเคลมเเล้ว</option>
                      <option value="กำลังเคลม">กำลังเคลม</option>
                      <option value="เคลมผ่าน">เคลมผ่าน</option>
                      <option value="เคลมไม่ผ่าน">เคลมไม่ผ่าน</option>
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={() => EditItem(setStatus=row._id, status,setItems)} data-bs-dismiss="modal">Update Status</button>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-light btn-sm ms-1"
              onClick={() => Print(row)}
            >🖨️</button>
            <button
              type="button"
              className="btn btn-danger btn-sm ms-1"
              onClick={() => DeleteItem(row._id, setItems)}
            >&times;</button>

          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default ClaimTable;
