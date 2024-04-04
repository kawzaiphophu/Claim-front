import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormClaim from '../component/FormClaim';
import ClaimTable from '../component/ClaimTable';
import HandleSearch from '../component/HandleSearch'
import '../css/claimlist.css'
import exemdata from '../data/claim.list.json'



function ClaimList() {
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [status, setStatus] = useState()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://project-back.vercel.app/claimlist");
      setItems(response.data);
      setOriginalItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className='d-flex justify-content-end'>
        <div className="input-group m-3 w-50">
          <input
            type="text"
            className="form-control"
            onChange={(event) => HandleSearch(event, originalItems, setItems)}
            placeholder="ค้นหา.."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
        </div>
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
      <div className='container-fluid'>
        <table className="table table-dark table-striped table-bordered text-center">
          <thead className="thead-dark">
            <tr>
              <th className='w-no' scope="col">No.</th>
              <th className='w-name' scope="col">ชื่อลูกค้า</th>
              <th className='w-tel' scope="col">เบอร์โทร</th>
              <th className='w-product' scope="col">Product</th>
              <th className='w-date' scope="col">Date</th>
              <th className='w-status' scope="col">Status</th>
              <th className='w-edit' scope="col">Edit</th>
            </tr>
          </thead>
          <ClaimTable items={items} fetchData={fetchData} setItems={setItems} status={status} setStatus={setStatus} />
        </table>
      </div>
    </>
  );
}

export default ClaimList;
