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
        paddingBottom: 32,

    },

    heading: {
        fontSize: '2.55em',
        fontWeight: 500,
        paddingBottom: 5,
        paddingTop: 40,
        color: '#103B81',
    },

    list: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingBottom: 32,
        //justifyContent: 'center'  uncomment this section for center alignment

    },

    imageThumbnail: {
        height: '5.063em',
        width: '5.063em',
        borderRadius: '0.5em'
    },


    lineStyle: {
        borderWidth: '0.05em',
        borderColor: '#C0C0C0',
    }


});

export default styles;