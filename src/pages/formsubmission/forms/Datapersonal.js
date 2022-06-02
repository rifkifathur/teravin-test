import { useEffect, useState } from 'react';

const Datapersonal = ({ handlePersonal }) => {

    const inForms = {
        id: '',
        nama: '',
        jk: '',
        ttl: '',
        nohp: '',
        alamat: '',
        kota: '',
        kdpos: ''
    }

    const [forms, setForms] = useState(inForms);
    const date = new Date();
    const handleChange = (e) => {
        setForms({
            ...forms,
            id: date.getTime(),
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        handlePersonal(forms)
    })
    return (
        <>
            <div className='flex flex-wrap flex-col md:flex-row bg-[#ebebeb] p-2'>
                <div className='p-3 basis-full md:basis-1/2'>
                    <label htmlFor="nama" className='mr-14'>Nama</label>
                    <input type='text' name='nama' id='nama' className='border border-gray-400 w-full md:w-auto' onChange={handleChange} required />
                </div>
                <div className='p-3 basis-full md:basis-1/2'>
                    <label htmlFor="jk" className='mr-4 w-full block md:w-auto md:inline'>Jenis Kelamin</label>
                    <input type='radio' name='jk' value='Laki - Laki' className='m-1' onChange={handleChange} required/>
                    <label htmlFor="jk">Laki-laki</label>
                    <input type='radio' name='jk' value='Perempuan' className='m-1' onChange={handleChange} required/>
                    <label htmlFor="jk">Perempuan</label>
                </div>
                <div className='p-3 basis-full md:basis-1/2'>
                    <label htmlFor="ttl" className='mr-2 w-full block md:w-auto md:inline'>Tanggal Lahir</label>
                    <input type='date' name='ttl' id='ttl' className='border border-gray-400' onChange={handleChange} required/>
                </div>
                <div className='p-3 basis-full md:basis-1/2'>
                    <label htmlFor="nohp" className='mr-16 w-full block md:w-auto md:inline'>No Hp</label>
                    <input type='text' name='nohp' id='nohp' className='border border-gray-400 w-full md:w-auto' onChange={handleChange} required/>
                </div>
                <div className='p-3 basis-full md:basis-1/2'>
                    <label htmlFor="alamat" className='mr-12  w-full block md:w-auto md:inline'>Alamat</label>
                    <input type='text' name='alamat' id='alamat' className='border border-gray-400 w-full md:w-auto' onChange={handleChange} required/>
                </div>
                <div className='p-3 basis-full md:basis-1/2'>
                    <label htmlFor="kota" className='mr-20 w-full block md:w-auto md:inline'>Kota</label>
                    <input type='text' name='kota' id='kota' className='border border-gray-400  w-full md:w-auto' onChange={handleChange} required/>
                </div>
                <div className='p-3 basis-full md:basis-1/2'>
                    <label htmlFor="kdpos" className='mr-9 w-full block md:w-auto md:inline'>Kode Pos</label>
                    <input type='text' name='kdpos' id='kdpos' className='border border-gray-400  w-full md:w-auto' onChange={handleChange} required/>
                </div>
            </div>
        </>
    );
};

export default Datapersonal;