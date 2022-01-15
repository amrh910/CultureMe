import HolidayCard from '../../holiday-card/src/HolidayCard.js';
import { useHolidayJson } from '../../../framework/api.js';
import { useEffect, useState } from 'react';

export const HolidayTable = () => {
    const holidays = useHolidayJson();
    
    useEffect(() => {
        if(holidays)
        {
            holidays.map((holiday) => {
                console.log(holiday.country);
            })
        }
    }, [holidays])
    
    return(
        <>
            {/* { (holidays) ?
                holidays.map((holiday) => {
                    return(
                        <HolidayCard setName={holiday.name} setCountry={holiday.country} />
                    );
                })
                :
                <></>
            } */}
        </>
    );
}
