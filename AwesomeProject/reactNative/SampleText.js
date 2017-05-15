/**
 * Created by admin on 2017/5/8.
 */import React from 'react';


import React from 'react';

import {
    StyleSheet,
    Text,
} from 'react-native';

/**
 * Used across examples as a screen placeholder.
 */
import type { Children } from 'react';

const SampleText = ({children}:{children?: Children}) => (
    <Text style={styles.sampleText}>{children}</Text>
);

export default SampleText;

const styles = StyleSheet.create({
    sampleText: {
        margin: 14,
    },
});