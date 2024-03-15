import React from 'react';

function Printx({ name, tel, cTel, nameProduct, sn, update_at, from, status }) {
  const grid = {
    fontSize: '1.1rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px'
  };
  const img = {
    width: '200px',
    height: '50px'
  };
  const printStyle = `
    @media print {
      .header {
        margin:0;
        padding:0;
      }
      body {
        display: flex;
        justify-content: center;
      }
      .start {
        border:solid 1px red;
        text-align: start;
      }
      .center {
        border:solid 1px red;
        text-align: center;
        width: 100%; /* Added width property */
      }
      .end {
        border:solid 1px red;
        text-align: end;
      }
      ms {
        margin-left:auto;
        margin-right:auto;
      }
      .w-100 {
        width:auto;
      }
    }
  `;

  return (
    <div>
      <style>{printStyle}</style>
      <div style={grid}>
        <div className='start'>No.</div>
        <div className='center'>
          <img style={img} src="https://www.ihavecpu.com/public/asset/image/logos/NewLogoIHAVECPU.png" alt="" />
        </div>
        <div className='end'>สำหรับลูกค้า</div>
        <div className='start'>
          <span>Name :</span> <span className='center'>{name}</span>
        </div>
        <div className='center'>
          <span>Tel : <span className='center'>{tel}</span></span>
        </div>
        <div className='center'>
          <span>ITEC : <span className='center'>{cTel}</span></span>
        </div>
      </div>
    </div>
  );
}

export default Printx;
