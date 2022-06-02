import React, { useCallback, useEffect, useState } from 'react';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Datapersonal from './forms/Datapersonal';
import Keahlian from './forms/Keahlian';
import Pengalamankerja from './forms/Pengalamankerja';
import Riwayatpendidikan from './forms/Riwayatpendidikan';

const IndexForms = ({ add }) => {
    const [next, setNext] = useState(0);
    const [data, setData] = useState({});
    const [newData, setNewData] = useState([]);

    const handlePersonal = (personal) => {
        setData(personal)
    }

    const handlePend = useCallback((pend) => {
        setData({ ...data, pend })
    },[data])

    const handleKerja = (kerja) => {
        setData({ ...data, kerja })
    }

    const handleSkills = (skill) => {
        setData({ ...data, skill })
    }

    useEffect(() => {
        if (localStorage.getItem('data')) {
            let dataStorage = (JSON.parse(localStorage.getItem('data')));
            setNewData(dataStorage)
        }
    }, [])

    const handlePrev = () => {
        if (next > 0) {
            setNext(next - 1)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (next < 3) {
            setNext(next + 1);
        } else {
            localStorage.setItem('data', JSON.stringify([...newData, data]));
            add(!add)
        }

    }

    return (
        <>
            <Box>
                <div className="flex relative">
                    <div className="px-2 rounded-[50%] absolute -top-[28px] cursor-pointer" onClick={() => add(!add)}>
                        <p className="text-[50px] text-sky-700">{'<'}</p>
                    </div>
                    <h2 className="mb-6 mx-12">Form Submissions</h2>
                </div>
                <ul className="flex justify-between px-2 md:px-24 my-8">
                    <li className="flex flex-col justify-center items-center relative">
                        <div className={`${next === 0 ? `bg-sky-700` : `bg-green-800`} w-4 h-4 rounded-[50%] z-10`}></div>
                        <div className="bg-slate-400 w-[120%] md:w-[190%] h-1 absolute -right-12 md:-right-32 top-[10%] md:top-[18%]"></div>
                        <span>Data Personal</span>
                    </li>
                    <li className="flex flex-col justify-center items-center relative" >
                        <div className={`${next === 1 ? `bg-sky-700` : `bg-slate-400` && next > 1 ? `bg-green-800` : `bg-slate-400`} w-4 h-4 rounded-[50%] z-10`}></div>
                        <div className="bg-slate-400 w-[120%] md:w-[150%] h-1 absolute -right-12 md:-right-32 top-[10%] md:top-[18%]"></div>
                        <span>Riwayat pendidikan</span>
                    </li>
                    <li className="flex flex-col justify-center items-center relative">
                        <div className={`${next === 2 ? `bg-sky-700` : `bg-slate-400` && next > 2 ? `bg-green-800` : `bg-slate-400`} w-4 h-4 rounded-[50%] z-10`}></div>
                        <div className="bg-slate-400 w-[90%] md:w-[150%] h-1 absolute -right-8 md:-right-24 top-[10%] md:top-[18%]"></div>
                        <span>Pengalaman Kerja</span>
                    </li>
                    <li className="flex flex-col justify-center items-center relative">
                        <div className={`${next === 3 ? `bg-sky-700` : `bg-slate-400` && next > 3 ? `bg-green-800` : `bg-slate-400`} w-4 h-4 rounded-[50%] z-10`}></div>
                        <span>Keahlian anda</span>
                    </li>
                </ul>
                <form onSubmit={handleSubmit} className="relative">
                    {next === 0 && <Datapersonal handlePersonal={handlePersonal} />}
                    {next === 1 && <Riwayatpendidikan handlePend={handlePend} next={next}/>}
                    {next === 2 && <Pengalamankerja handleKerja={handleKerja} />}
                    {next === 3 && <Keahlian handleSkills={handleSkills} />}
                    <div className="absolute right-0 -bottom-12">
                        {next > 0 &&
                            <Button type="button" onClick={handlePrev} cname="mx-2">
                                <span className="text-white p-4">Prev</span>
                            </Button>
                        }
                        <Button type="submit">
                            <span className="text-white p-4">{next < 3 ? "Next" : "Simpan"}</span>
                        </Button>
                    </div>
                </form>
            </Box>
        </>
    );
};

export default IndexForms;