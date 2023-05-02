import { Divider } from '@mui/material';
import React from 'react';
import './DividerCustom.css';

export default function DividerCustom({section}) {


    return (
        <>

            <Divider></Divider>
            <Divider><span className='divider-custom '>{section}</span></Divider>
            <Divider></Divider>

        </>
    )
}

