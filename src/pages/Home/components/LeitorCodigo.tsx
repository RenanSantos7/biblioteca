import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import MaterialComIcon from '@expo/vector-icons/MaterialCommunityIcons'

interface LeitorCodigoProps {
    
};

export default function LeitorCodigo({}: LeitorCodigoProps) {
    return (
        <TouchableHighlight>
            <MaterialComIcon
                name='barcode-scan'
                size={24}
            />
        </TouchableHighlight>
    );
};