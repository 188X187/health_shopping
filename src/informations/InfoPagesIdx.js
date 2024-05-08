import React, { useState, useEffect } from 'react';
import InfoPages from './InfoPages1';
import { useLocation } from 'react-router';
// import InfoPages from './InfoPages';

export default function InfoPagesIdx() {

    const location = useLocation();
    const item = location.state.item

    
    return (
        <>
            <InfoPages
            image={item.image}
            title={item.title.replace(/[<b></b>]/g, '')}
            price={item.lprice}
            />
        </>
    );
}