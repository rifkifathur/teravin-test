import { useEffect, useState } from "react";
import Button from "../../../components/Button";

const Riwayatpendidikan = ({ handlePend }) => {

    const inForms = {
        institusi: '',
        lulus: '',
        jenjang: '',
        jurusan: '',
        nilai: ''
    }

    const [pendidikan, setPendidikan] = useState([inForms]);

    const handleAdd = () => {
        setPendidikan([...pendidikan, inForms])
    }
    const handleRemove = (i) => {
        let newForms = [...pendidikan]
        newForms.splice(i, 1);
        setPendidikan(newForms)
    }
    const handleChange = (i, e) => {
        let newForms = [...pendidikan]
        newForms[i][e.target.name] = e.target.value
        setPendidikan(newForms)
        handlePend(pendidikan)

    }

    useEffect(() => {
        handlePend(pendidikan)
    }, [])

    return (
        <>
            <Button type="button" onClick={handleAdd} cname="my-0">
                <span className="text-white text-2xl p-2">+</span>
            </Button>
            {pendidikan.map((item, i) => {
                return (
                    <div key={i} className='flex flex-wrap bg-[#ebebeb] p-2 my-4 relative'>
                        {i ?
                            <Button type="button" onClick={() => handleRemove(i)} cname="absolute -top-4 right-0 bg-transparent">
                                <span className="text-xl p-2">X</span>
                            </Button> : null}
                        <div className='p-3 basis-full md:basis-1/2'>
                            <label htmlFor="institusi" className='mr-4'>Sekolah / Perguruan Tinggi</label>
                            <input type='text' name='institusi' id='institusi' className='border border-gray-400 w-full md:w-auto' onChange={e => handleChange(i, e)} required/>
                        </div>
                        <div className='p-3 basis-1/2'>
                            <label htmlFor="lulus" className='mr-[21px]'>Tahun Lulus</label>
                            <input type='date' name='lulus' id='lulus' className='border border-gray-400' onChange={e => handleChange(i, e)} required/>
                        </div>
                        <div className='p-3 basis-full md:basis-1/2'>
                            <label htmlFor="jenjang" className='mr-[70px]'>Jenjang pendidikan</label>
                            <input type='text' name='jenjang' id='jenjang' className='border border-gray-400 w-full md:w-auto' onChange={e => handleChange(i, e)} required/>
                        </div>
                        <div className='p-3 basis-full md:basis-1/2'>
                            <label htmlFor="jurusan" className='mr-12'>Jurusan</label>
                            <input type='text' name='jurusan' id='jurusan' className='border border-gray-400 w-full md:w-auto' onChange={e => handleChange(i, e)} required/>
                        </div>
                        <div className='p-3 basis-full md:basis-1/2'>
                            <label htmlFor="nilai" className='mr-[130px]'>Nilai Akhir</label>
                            <input type='text' name='nilai' id='nilai' className='border border-gray-400 w-full md:w-auto' onChange={e => handleChange(i, e)} required/>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default Riwayatpendidikan;