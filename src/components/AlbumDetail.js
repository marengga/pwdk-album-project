import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { WebBrowser } from 'expo';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailStyle, headerContentStyle, headerTextStyle, thumbnailContainerStyle, imageStyle } = style;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>
      <CardSection>
        <Button onPress={() => WebBrowser.openBrowserAsync(url)}>
          <Text>Buy Now</Text>
        </Button>
      </CardSection>
    </Card>
  );
};

const style = StyleSheet.create({
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  headerContentStyle: {
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1
  }
});

export default AlbumDetail;
