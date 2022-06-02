import Box from "../components/Box";

const DataId = ({ dataId, aksi }) => {
    return (
        <Box>
            <div className="cursor-pointer" onClick={() => aksi("exit")}>
                <p className="text-[20px] text-sky-700">{"< Kembali"}</p>
            </div>
            <div className="mb-2">
                <h2 className="text-xl bg-sky-700 text-white">Personal</h2>
                <div className="flex mb-4 mt-2">
                    <span className="basis-1/4">Nama</span>
                    <span className="px-2">:</span>
                    <span>{dataId.nama}</span>
                </div>
                <div className="flex mb-4 mt-2">
                    <span className="basis-1/4">Jenis Kelamin</span>
                    <span className="px-2">:</span>
                    <span>{dataId.jk}</span>
                </div>
                <div className="flex mb-4 mt-2">
                    <span className="basis-1/4">No Telepon</span>
                    <span className="px-2">:</span>
                    <span>{dataId.nohp}</span>
                </div>
                <div className="flex mb-4 mt-2">
                    <span className="basis-1/4">Tanggal Lahir</span>
                    <span className="px-2">:</span>
                    <span>{dataId.ttl}</span>
                </div>
                <div className="flex mb-4 mt-2">
                    <span className="basis-1/4">Alamat</span>
                    <span className="px-2">:</span>
                    <span>{dataId.alamat}</span>
                </div>
                <div className="flex mb-4 mt-2">
                    <span className="basis-1/4">Kota</span>
                    <span className="px-2">:</span>
                    <span>{dataId.kota}</span>
                </div>
                <div className="flex mb-4 mt-2">
                    <span className="basis-1/4">Kode Pos</span>
                    <span className="px-2">:</span>
                    <span>{dataId.kdpos}</span>
                </div>
            </div>
            <div className="mb-2">
                <h2 className="text-xl bg-sky-700 text-white">Pendidikan</h2>
                {dataId.pend?.map((item, i) => {
                    return (
                        <div key={i} className="mb-8 mt-2 border-b border-slate-700">
                            <span className="border-b border-slate-700">Pendidikan {i + 1}</span>
                            <div className="flex mb-4 mt-2">
                                <span className="basis-1/4">Nama Tempat Pendidikan</span>
                                <span className="px-2">:</span>
                                <span>{item.institusi}</span>
                            </div>
                            <div className="flex mb-4 mt-2">
                                <span className="basis-1/4">Jenjang Pendidikan</span>
                                <span className="px-2">:</span>
                                <span>{item.jenjang}</span>
                            </div>
                            <div className="flex mb-4 mt-2">
                                <span className="basis-1/4">Jurusan Pendidikan</span>
                                <span className="px-2">:</span>
                                <span>{item.jurusan}</span>
                            </div>
                            <div className="flex mb-4 mt-2">
                                <span className="basis-1/4">Tahun Lulus</span>
                                <span className="px-2">:</span>
                                <span>{item.lulus}</span>
                            </div>
                            <div className="flex mb-4 mt-2">
                                <span className="basis-1/4">Nilai Akhir</span>
                                <span className="px-2">:</span>
                                <span>{item.nilai}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="mb-2">
                <h2 className="text-xl bg-sky-700 text-white">Pengalaman Kerja</h2>
                {dataId.kerja?.map((item, i) => {
                    return (
                        <div key={i} className="mb-8 mt-2 border-b border-slate-700">
                            <span className="border-b border-slate-700">Pengalaman kerja {i + 1}</span>
                            <div className="flex mb-4 mt-2">
                                <span className="basis-1/4">Posisi / Jabatan</span>
                                <span className="px-2">:</span>
                                <span>{item.posisi}</span>
                            </div>
                            <div className="flex mb-4 mt-2">
                                <span className="basis-1/4">Nama perusahaan</span>
                                <span className="px-2">:</span>
                                <span>{item.perusahaan}</span>
                            </div>
                            <div className="flex mb-4 mt-2">
                                <span className="basis-1/4">Industri</span>
                                <span className="px-2">:</span>
                                <span>{item.industri}</span>
                            </div>
                            <div className="flex mb-4 mt-2">
                                <span className="basis-1/4">Tahun Kerja</span>
                                <span className="px-2">:</span>
                                <span>{item.tahun_mulai} - {item.tahun_akhir}</span>
                            </div>
                            <div className="flex mb-4 mt-2">
                                <span className="basis-1/4">Gaji</span>
                                <span className="px-2">:</span>
                                <span>{item.gaji}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="mb-2">
                <h2 className="text-xl bg-sky-700 text-white">Keahlian</h2>
                <div className="mb-8 mt-2 border-b border-slate-700">
                    <span className="border-b border-slate-700">Keahlian</span>
                    <div className="flex mb-4 mt-2">
                        <span className="basis-1/4">Keahlian</span>
                        <span className="px-2">:</span>
                        {dataId.skill?.map((item, i) => {
                            return (
                                <span key={i}>{`${item.skill}${i+1 < dataId.skill.length ? ',' : ' '}`}</span>
                            )
                        })}
                    </div>
                </div>

            </div>
        </Box>
    );
};

export default DataId;