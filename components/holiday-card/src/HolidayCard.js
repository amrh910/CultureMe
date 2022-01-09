import { StyleSheet } from 'react-native';
import { Card } from "@paraboly/react-native-card";
import Flag from 'react-native-flags';

const HolidayCard = () => {
    return(
        <Card
            //need to put flag icon
            // iconDisable
            icon={<Flag code="DE" size={32}/>}
            // iconName="DE"
            // iconType="Flag"
            // iconColor={'white'}
            iconBackgroundColor={'#384660'}
            title="Title"
            description="Main Content"
            bottomRightText="30"
            topRightText="Top Right"
            topRightTextStyle={{color: 'white'}}
            bottomRightText="Bottom Right"
            bottomRightTextStyle={{color: 'white'}}
            description="Short Description"
            style={styles.card}
            onPress={() => {}}
        />
    );
}

export default HolidayCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1b2a46',
    }
});