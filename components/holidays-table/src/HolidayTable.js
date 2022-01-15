import { HolidayCard } from '../../holiday-card/src/HolidayCard.js';
import { useHolidayJson } from '../../../framework/api.js';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export const HolidayTable = () => {
    const holidays = useHolidayJson();
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        if(holidays)
        {
            setLoading(false);
        }
    }, [holidays]);
    
    return(
        <View>
            { (!loading) ?
                holidays.map((holiday) => {
                    return(
                        <HolidayCard holiday={holiday} />
                    );
                })
                :
                <Text style={{color:'white'}}>Loading...</Text>
            }
        </View>
    );
}
