import React, { useState } from 'react'
import Nav from './Nav'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'

function FormClaim() {
    const handleSubmit = event =>{
        
    }
    const [name, setName] = userState('');
    const [tel, setTel] = userState('');
    const [cTel, setCtel] = userState('');
    const [nameProduct, setNameProduct] = userState('');
    const [sn, setSn] = userState('');
    const [sypm, setSypm] = userState('');
    const [from, setFrom] = userState('บางพลัด');
    return (
        <>
            <Nav />
            <div className='container'>
                <div className='d-flex justify-content-center' style={{ "margin": "50px" }} >
                    <h1>แบบฟอร์มเคลมสินค้า</h1>
                </div>
                <from onSubmit={handleSubmit}>
                    <div class="form-floating mb-3 mt-3 " >
                        <input type="text" class="form-control" id="" placeholder=""
                            onChange={(e) => setName(e.target.value)} />
                        <label for="">ชื่อลูกค้า</label>
                    </div>
                    <div class="form-floating">
                        <input type="number" class="form-control" id="" placeholder=""
                            onChange={(e) => setTel(e.target.value)} />
                        <label for="">เบอร์โทรศัพท์</label>
                    </div>
                    <div class="form-floating">
                        <input type="number" class="form-control" id="" placeholder=""
                            onChange={(e) => setCtel(e.target.value)} />
                        <label for="">เบอร์โทรศัพท์ที่สั่งซื้อ</label>
                    </div>
                    <div class="form-floating mb-3 mt-3" >
                        <input type="text" class="form-control" id="" placeholder=""
                            onChange={(e) => setNameProduct(e.target.value)} />
                        <label for="">ชื่อสินค้า</label>
                    </div>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="" placeholder=""
                            onChange={(e) => setSn(e.target.value)} />
                        <label for="">Serail Number สินค้า</label>
                    </div>
                    <div class="form-floating mb-3 mt-3" >
                        <textarea style={{ "height": "100px" }} class="form-control" id="" placeholder=""
                            onChange={(e) => setSypm(e.target.value)} />
                        <label for="floatingTextarea2">อาการเสีย</label>
                    </div>
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example"
                            onChange={(e) => setFrom(e.target.value)}>
                            <option selected>บางพลัด</option>
                            <option value="นครนายก">นครนายก</option>
                            <option value="รามอินทรา">รามอินทรา</option>
                            <option value="สายสี่">สายสี่</option>
                            <option value="รังสิต">รังสิต</option>
                            <option value="พระราม 2">พระราม 2</option>
                            <option value="บางนา">บางนา</option>
                            <option value="โคราช">โคราช</option>
                            <option value="บางใหญ่">บางใหญ่</option>
                        </select>
                        <label for="floatingSelect">สั่งซื้อจาก</label>
                    </div>
                    <div class="d-flex justify-content-center m-1" >
                        <button type='submit' className=' m-1 btn btn-success btn-lg'>ส่งข้อมูล</button>
                    </div>
                </from>
            </div>
        </>)
}

export default FormClaim