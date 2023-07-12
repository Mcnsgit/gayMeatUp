import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    errorText: {
        color: '#FF0000',
        fontSize: 16,
        marginBottom: 10,
    },
});

export default AppStyles;
