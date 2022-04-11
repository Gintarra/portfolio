import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import { GrContactInfo } from 'react-icons/gr'
import { HiOutlineMail } from 'react-icons/hi'
import { BsTelephone } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'

const Contacts = () => {
    const { toContact } = useContext(MyContext)

    return (
        <div ref={toContact}>
            <div className='d-flex justify-center align-center'>  <GrContactInfo style={{ fontSize: "3rem" }} /> <h2>Contact Me</h2></div>
            <div className='d-flex space-ev card md-column md-align-center'>
                <p className='align-center d-flex'> <HiOutlineMail style={{ fontSize: "2rem" }} /> gintare.raudziute@gmail.com </p>
                <p className='align-center d-flex'> <BsTelephone style={{ fontSize: "2rem" }} /> +370 627 72448 </p>
                <p className='align-center d-flex'> <IoLocationOutline style={{ fontSize: "2rem" }} /> Kaunas, Lithuania </p>
            </div>
        </div>
    );
};

export default Contacts;