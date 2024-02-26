import React, { useState } from 'react'
import axios from "axios"


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
        from: { value: '', isValid: true },
    });



    //add value to fromData every change
    const handleChange = async(data, e) => {
        const { value } = e.target;
        if (['name', 'tel', 'cTel', 'nameProduct', 'sn', 'symp', 'from'].includes(data)) {
            const inputElement = document.getElementById(data);
            if (value.trim() === "") {
                inputElement.classList.add('is-invalid');
            } else {
                inputElement.classList.remove('is-invalid');
            }
        }
        setFormData({ ...formData, [data]: e.target.value });
    };


    //confirm yes send req to back /no preventDefault
    const handleSubmit = async (e) => {
        if (window.confirm("ต้องการบันทึกหรือไม่ ?")) {
            try {
                if (formData.tel.length === 10) {

                    const url = "http://localhost:3001/formclaim/add";
                    axios.post(url, formData)
                    // Reset form data after successful submission
                    setFormData({
                        name: { value: '' },
                        tel: { value: '' },
                        cTel: { value: '' },
                        nameProduct: { value: '' },
                        sn: { value: '' },
                        symp: { value: '' },
                        from: { value: 'สาขา ...' },
                    });
                    alert("บันทึกข้อมูลเรียบร้อยแล้ว");
                } else {
                    e.preventDefault();
                    alert("กรุณาใส่เบอร์โทรศัพท์ที่มีความยาวเท่ากับ 10 หลัก");
                }
            } catch (error) {
                console.log(error);
                alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
            }
        }
    };


    return (
        <>

            <div className='container w-100'>

                <form onSubmit={handleSubmit} id='claimform'>
                    <div className="form-floating mb-3 mt-3 " >
                        <input
                            type="text"
                            className={inputClass}
                            id="name"
                            name='name'
                            placeholder="ชื่อลูกค้า"
                            autoComplete="off"
                            // value={formData.name.value}
                            onChange={(e) => handleChange("name", e)}
                        />
                        <label htmlFor="name">ชื่อลูกค้า</label>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <input
                            type="number"
                            className={inputClass}  
                            id="tel"
                            placeholder={formData.tel.value}
                            autoComplete="off"
                            onChange={(e) => handleChange("tel", e)}
                            maxLength={"10"} />
                        <label htmlFor="tel">เบอร์โทรศัพท์</label>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <input
                            type="text"
                            className={inputClass}
                            id="cTel"
                            placeholder={formData.cTel.value}
                            autoComplete="off"
                            onChange={(e) => handleChange("cTel", e)}
                            maxLength="10" />
                        <label htmlFor="cTel">เบอร์โทรศัพท์ที่สั่งซื้อ</label>
                    </div>
                    <div className="form-floating mb-3 mt-3" >
                        <input
                            type="text"
                            className={inputClass}
                            id="nameProduct"
                            placeholder={formData.nameProduct.value}
                            autoComplete="off"
                            onChange={(e) => handleChange("nameProduct", e)} />
                        <label htmlFor="nameProduct">ชื่อสินค้า</label>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <input
                            type="text"
                            className={inputClass}
                            id="sn"
                            placeholder={formData.sn.value}
                            autoComplete="off"
                            onChange={(e) => handleChange("sn", e)} />
                        <label htmlFor="sn">Serail Number สินค้า</label>
                    </div>
                    <div className="form-floating mb-3 mt-3" >
                        <textarea
                            style={{ "height": "100px" }}
                            className="form-control"
                            id="symp"
                            placeholder={formData.symp.value}
                            onChange={(e) => handleChange("symp", e)} />
                        <label htmlFor="symp">อาการเสีย</label>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <select
                            className="form-select form-select-sm "
                            id="from"
                            aria-label="Floating label select example"
                            placeholder={formData.from.value}
                            onChange={((e) => {
                                setFormData({ ...formData, from: e.target.value });
                            })}>
                            <option defaultValue>สาขา ...</option>
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
                        <label htmlFor="from">สั่งซื้อจาก</label>
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