import { StyleSheet, View } from 'react-native';
import { Card } from "@paraboly/react-native-card";
import Flag from 'react-native-flags';
import { useState, useEffect } from 'react';

export const HolidayCard = ({ holiday }) => {
    const [ country, setCountry ] = useState();
    const [ name, setName ] = useState();
    
    useEffect(() => {
        setCountry(holiday.country);
        setName(holiday.name);
    }, [])
    
    return(
        <>
            { (country && name) &&
                <Card
                    iconDisable
                    iconBackgroundColor={'#384660'}
                    title={name}
                    titleTextStyle={{width: '100%'}}
                    description="Main Content"
                    bottomRightText="30"
                    topRightText={country.length}
                    topRightTextStyle={{color: 'white'}}
                    bottomRightText={
                        country.map((flag) => {
                            return (
                                <Flag
                                    code={flag}
                                    size={24}
                                />
                            );
                        })
                    }
                    bottomRightTextStyle={{color: 'white'}}
                    description=""
                    style={styles.card}
                    shadowStyle={{shadowColor: 'black'}}
                    onPress={() => {}}
                />
            }
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1b2a46',
        marginBottom: 10
    }
});