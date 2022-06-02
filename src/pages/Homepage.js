import React, { useState } from 'react';
import Box from '../components/Box';
import Button from '../components/Button';
import Container from '../components/Container';
import DataId from './DataId';
import IndexForms from './formsubmission/IndexForms';

const Homepage = () => {
    const [add, setAdd] = useState(false);
    const [detailData, setDetailData] = useState({});
    const [aksi, setAksi] = useState('');
    const data = JSON.parse(localStorage.getItem('data'));

    const handleView = (id) => {
        const detail = data.find(item => item.id === id);
        setDetailData(detail)
        setAksi('lihat')
    }
    return (
        <Container>
            {add || aksi === 'lihat' ? (
                null
            ) : (
                <Box>
                    <h1 className="text-2xl mb-6">Teravin test React.Js</h1>
                    <Button type="button" onClick={() => setAdd(!add)}>
                        <span className="text-white">+ Add data</span>
                    </Button>
                    <table className="w-[100%]">
                        <thead>
                            <tr className="bg-sky-700 border-2">
                                <th className="border-r border-white">ID No</th>
                                <th className="border-r border-white">Nama</th>
                                <th className="border-r border-white">Alamat</th>
                                <th className="border-r border-white">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className='border-2'>
                            {data?.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="p-1">{i + 1}</td>
                                        <td className="p-1">{item.nama}</td>
                                        <td className="p-1">{item.alamat}</td>
                                        <td className="p-1 text-center cursor-pointer" onClick={() => handleView(item.id)}>
                                            <span className="bg-sky-700 px-2 text-white">Lihat</span>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </Box>
            )}
            {add && <IndexForms add={add => setAdd(add)} />}
            {aksi === 'lihat' && <DataId dataId={detailData} aksi={aksi => setAksi(aksi)}/>}
        </Container>
    );
};

export default Homepage;