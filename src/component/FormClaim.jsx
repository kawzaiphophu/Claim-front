import React, { useState } from 'react'
import Nav from './Nav'
import axios from "axios"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'

function FormClaim() {
    
    

    //Class Control
    const [inputClass] = useState('form-control');
   
    //create formData add state name,tel,...
    const [formData, setFormData] = useState({
        name: { value: '', isValid: true },
        tel: { value: '', isValid: true },
        cTel: { value: '', isValid: true },
        nameProduct: { value: '', isValid: true },
        sn: { value: '', isValid: true },
        symp: { value: '', isValid: true },
        from: { value: '',isValid: true}
    });
    
    //add value to fromData every change
    const handleChange = (data, e) => {
        const { value } = e.target;
        
        if (['name', 'tel', 'cTel', 'nameProduct', 'sn', 'symp','from'].includes(data)) {
            const inputElement = document.getElementById(data);
            if (value.trim() ==="" ) {
                inputElement.classList.add('is-invalid');
            }else {
                inputElement.classList.remove('is-invalid');
            }
        }
        setFormData({ ...formData, [data]: e.target.value });
    };
    //confirm yes send req to back /no preventDefault
    const handleSubmit = async(e) => {
        e.preventDefault();
    if (window.confirm("ต้องการบันทึกหรือไม่ ?")) {
        try {
            const url = "http://localhost:3001/formclaim";
            await axios.post(url, formData);
            // Reset form data after successful submission
            setFormData({
                name: { value: '', isValid: true },
                tel: { value: '', isValid: true },
                cTel: { value: '', isValid: true },
                nameProduct: { value: '', isValid: true },
                sn: { value: '', isValid: true },
                symp: { value: '', isValid: true },
                from: { value: '', isValid: true }
            });
            // You can optionally display a success message or perform other actions here
            alert("บันทึกข้อมูลเรียบร้อยแล้ว");
        } catch (error) {
            console.log(error);
            alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
        }
    } else {
        // Handle cancellation here if needed
    }
    }

    return (
        <>
            <Nav />
            <div className='container'>
                <div className='d-flex justify-content-center' style={{ "margin": "50px" }} >
                    <h1>แบบฟอร์มเคลมสินค้า</h1>
                </div>
                <form onSubmit={handleSubmit} id='claimform'>
                    <div className="form-floating mb-3 mt-3 " >
                        <input
                            type="text"
                            className={inputClass}
                            id="name"
                            name='name'
                            placeholder=""
                            value={formData.name.value}
                            onChange={(e) => handleChange("name", e)} />
                        <label for="name">ชื่อลูกค้า</label>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <input
                            type="text"
                            className={inputClass}
                            id="tel"
                            onChange={(e) => handleChange("tel", e)} 
                            maxLength={"10"}/>
                        <label for="tel">เบอร์โทรศัพท์</label>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <input
                            type="text"
                            className={inputClass}
                            id="cTel"
                            placeholder=""
                            onChange={(e) => handleChange("cTel", e)}
                            maxLength="10" />
                        <label for="cTel">เบอร์โทรศัพท์ที่สั่งซื้อ</label>
                    </div>
                    <div className="form-floating mb-3 mt-3" >
                        <input
                            type="text"
                            className={inputClass}
                            id="nameProduct"
                            placeholder=""
                            onChange={(e) => handleChange("nameProduct", e)} />
                        <label for="nameProduct">ชื่อสินค้า</label>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <input
                            type="text"
                            className={inputClass}
                            id="sn"
                            placeholder=""
                            onChange={(e) => handleChange("sn", e)} />
                        <label for="sn">Serail Number สินค้า</label>
                    </div>
                    <div className="form-floating mb-3 mt-3" >
                        <textarea
                            style={{ "height": "100px" }}
                            className="form-control"
                            id="symp"
                            placeholder=""
                            onChange={(e) => handleChange("symp", e)} />
                        <label for="symp">อาการเสีย</label>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <select
                            className="form-select form-select-sm "
                            id="from"
                            aria-label="Floating label select example"
                            placeholder=""
                            onChange={((e) => {
                                setFormData({ ...formData, from: e.target.value });
                            })}>
                            <option selected>สาขา ...</option>
                            <option value="บางพลัด">บางพลัด</option>
                            <option value="นครนายก">นครนายก</option>
                            <option value="รามอินทรา">รามอินทรา</option>
                            <option value="สายสี่">สายสี่</option>
                            <option value="รังสิต">รังสิต</option>
                            <option value="พระราม 2">พระราม 2</option>
                            <option value="บางนา">บางนา</option>
                            <option value="โคราช">โคราช</option>
                            <option value="บางใหญ่">บางใหญ่</option>
                        </select>
                        <label for="from">สั่งซื้อจาก</label>
                    </div>
                    <div className="d-flex justify-content-center m-1" >
                        <button 
                        type='submit' 
                        className=' m-1 btn btn-success btn-lg'>ส่งข้อมูล</button>
                    </div>
                </form>
            </div>

        </>)
}

export default FormClaim