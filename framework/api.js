import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

export const useHolidayJson = () => {
    const [ resp, setResp ] = useState();

    useEffect(() => {
        axios.get('https://culture.amrhammam.com/api/main').then((response) => {
            setResp(response.data);
        });
    }, []);

    if(resp) return resp;
}