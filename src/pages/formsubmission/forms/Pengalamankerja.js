import { useEffect, useState } from "react";
import Button from "../../../components/Button";

const Pengalamankerja = ({ handleKerja }) => {
    const inForms = {
        posisi: '',
        tahun_mulai: '',
        tahun_akhir: '',
        perusahaan: '',
        gaji: '',
        industri: ''
    }

    const [pkerja, setPkerja] = useState([inForms]);

    const handleAdd = () => {
        setPkerja([...pkerja, inForms])
    }
    const handleRemove = (i) => {
        let newForms = [...pkerja]
        newForms.splice(i, 1);
        setPkerja(newForms)
    }
    const handleChange = (i, e) => {
        let newForms = [...pkerja]
        newForms[i][e.target.name] = e.target.value
        setPkerja(newForms)
        handleKerja(pkerja)
    }

    useEffect(() => {
        handleKerja(pkerja)
    }, [])
    return (
        <>
            <Button type="button" onClick={handleAdd} cname="my-0">
                <span className="text-white text-2xl p-2">+</span>
            </Button>
            {pkerja.map((item, i) => {
                return (
                    <div key={i} className='flex flex-wrap bg-[#ebebeb] p-2 my-4 relative'>
                        {i ?
                            <Button type="button" onClick={() => handleRemove(i)} cname="absolute -top-4 right-0 bg-transparent">
                                <span className="text-xl p-2">X</span>
                            </Button> : null}
                        <div className='p-3 basis-full md:basis-1/2'>
                            <label htmlFor="posisi" className='mr-10'>Posisi / Jabatan</label>
                            <input type='text' name='posisi' id='posisi' className='border border-gray-400 w-full md:w-auto' onChange={e => handleChange(i, e)} required/>
                        </div>
                        <div className='p-3 basis-1/2'>
                            <label htmlFor="tahun_kerja" className='mr-[21px]'>Tahun bekerja</label>
                            <input type='date' name='tahun_mulai' id='tahun_kerja' className='border border-gray-400 w-auto md:w-20' onChange={e => handleChange(i, e)} required/>
                            <input type='date' name='tahun_akhir' id='tahun_kerja' className='border border-gray-400 w-auto md:w-20' onChange={e => handleChange(i, e)} required/>
                        </div>
                        <div className='p-3 basis-full md:basis-1/2'>
                            <label htmlFor="perusahaan" className='mr-4'>Nama perusahaan</label>
                            <input type='text' name='perusahaan' id='perusahaan' className='border border-gray-400 w-full md:w-auto' onChange={e => handleChange(i, e)} required/>
                        </div>
                        <div className='p-3 basis-full md:basis-1/2'>
                            <label htmlFor="gaji" className='mr-[90px]'>Gaji</label>
                            <input type='text' name='gaji' id='gaji' className='border border-gray-400 w-full md:w-auto' onChange={e => handleChange(i, e)} required/>
                        </div>
                        <div className='p-3 basis-full md:basis-1/2'>
                            <label htmlFor="industri" className='mr-[90px]'>Industri</label>
                            <input type='text' name='industri' id='industri' className='border border-gray-400 w-full md:w-auto' onChange={e => handleChange(i, e)} required/>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default Pengalamankerja;