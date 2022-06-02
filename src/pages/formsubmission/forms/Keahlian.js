import { useEffect, useState } from "react";
import Button from "../../../components/Button";

const Keahlian = ({ handleSkills }) => {

    const [keahlian, setKeahlian] = useState([{skill:''}]);

    const handleAdd = () => {
        setKeahlian([...keahlian, {skill:''}])
    }
    const handleRemove = (i) => {
        let newForms = [...keahlian]
        newForms.splice(i, 1);
        setKeahlian(newForms)
    }
    const handleChange = (i, e) => {
        let newForms = [...keahlian]
        newForms[i][e.target.name] = e.target.value
        setKeahlian(newForms)
        handleSkills(keahlian)
    }

    useEffect(() => {
        handleSkills(keahlian)
    },[])
    return (
        <>
            <Button type="button" onClick={handleAdd} cname="my-0">
                <span className="text-white text-2xl p-2">+</span>
            </Button>
            {keahlian.map((item, i) => {
                return (
                    <div key={i} className='flex flex-wrap bg-[#ebebeb] p-2 relative'>
                        <label htmlFor="skill" className='mr-4'>keahlian</label>
                        <input type='text' name='skill' id='skill' className='border border-gray-400' onChange={e => handleChange(i, e)} required/>
                        {i ?
                            <Button type="button" onClick={() => handleRemove(i)} cname="absolute -top-3 left-64 bg-transparent">
                                <span className="text-xl p-2">X</span>
                            </Button> : null}
                    </div>
                )
            })}
        </>
    );
};

export default Keahlian;