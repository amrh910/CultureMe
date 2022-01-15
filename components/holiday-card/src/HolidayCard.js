import { StyleSheet, View } from 'react-native';
import { Card } from "@paraboly/react-native-card";
import Flag from 'react-native-flags';
import { useState, useEffect } from 'react';

export const HolidayCard = ({ ccode, hname }) => {
    const [ country, setCountry ] = useState();
    const [ name, setName ] = useState();
    
    useEffect(() => {
        setCountry(ccode);
        setName(hname);
    }, [ccode, hname]);
    
    return(
            <Card
                iconDisable
                iconBackgroundColor={'#384660'}
                title={name}
                description="Main Content"
                bottomRightText="30"
                topRightText="Top Right"
                topRightTextStyle={{color: 'white'}}
                bottomRightText={<Flag
                    code={country}
                    size={24}
                />}
                bottomRightTextStyle={{color: 'white'}}
                description="Short Description"
                style={styles.card}
                onPress={() => {}}
                setName={setName}
                setCountry={setCountry}
            />
        // }
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1b2a46',
    }
});