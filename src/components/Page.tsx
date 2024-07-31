import { StyleSheet, Text, View } from 'react-native';
import defaultStyles from '../styles/defaultStyles';
import FlexLine from './FlexLine';
import BtDrawer from './BtDrawer';
import { defaultGap } from '../constants';
import { ReactNode } from 'react';

interface PageProps {
    title: string;
    children: ReactNode;
};

export default function Page(props: PageProps) {
    return (
        <View style={styles.containerPag}>
			<View style={styles.tituloContainer}>
				<FlexLine style={{gap: defaultGap}}>
					<BtDrawer />
					<Text style={styles.titulo1}>{props.title}</Text>
                </FlexLine>               
            </View>

            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    ...defaultStyles,
    tituloContainer: {
        // height: 150,
        justifyContent: 'flex-end',
        paddingVertical: 25,
    },
});