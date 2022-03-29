import { StyleSheet } from 'react-native';
import color from './../../contains/color';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
    
      },
      square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#21a3d0'
      },
      number: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
      },
      content: {
        width: '80%',
        fontSize: 16,
        fontFamily: 'SVN-Poppins',
      }
});
export default styles;