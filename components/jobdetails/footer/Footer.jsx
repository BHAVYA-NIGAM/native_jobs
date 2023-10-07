import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

import styles from './footer.style';
import { icons } from '../../../constants';

const Footer = ({ url }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = () => {
    // Toggle the liked state when the button is pressed
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.likeBtn,
          isLiked && { borderColor: '#F37453' }, // Change border color when liked
        ]}
        onPress={handleLikePress}
      >
        <Image
          source={isLiked ? icons.heart : icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
