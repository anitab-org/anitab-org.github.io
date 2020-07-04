import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        width: '100%',
        padding: 32,

    },

    description: {
        fontSize: '1.5em',
        fontWeight: 300,
        color: '#103B81',


    },

    heading: {
        fontSize: '2.55em',
        fontWeight: 500,
        paddingBottom: 16,
        paddingTop: 64,
        color: '#103B81',
    },
    list: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    imageThumbnail: {
        height: '81px',
        width: '81px'
    }

});

export default styles;