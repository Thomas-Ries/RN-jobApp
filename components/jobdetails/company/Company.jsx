import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './company.style';
import { icons } from '../../../constants';
import { checkImageURL } from '../../../utils';



const Company = ({ companyLogo, jobTitle, companyName, Location  }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
        style={styles.logoImage}
        source={{ 
          uri: checkImageURL(companyLogo)
          ? companyLogo
          : 'https://picsum.photos/200/300/?blur'
        }} />
      </View>

      <View>
        <Text style={styles.jobTitle} > {jobTitle} </Text>
      </View>

    </View>
  )
}

export default Company;