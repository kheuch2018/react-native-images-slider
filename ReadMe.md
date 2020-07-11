# React Native Swipe Image

A React Native library to swipe image on left and right (Carousel)

## Installation

```bash
npm install react-native-images-slider
```
OR

```bash
yarn add react-native-images-slider
```




## Props


| Props | Type | Default | Description 
| --- | --- | --- | --- | --- |
| images | Array of object | [] | An array containing images url objects
| imageWidthPercentage | int | 90 | The space occupated horizontally by the image in percentage
| imageHeight | int | 200 | The height of the image
| imgStyle | object | {} | Custom styles for the images
| viewStyle | object | {} | Custom styles for the images wrapper

## Usage

```javaScript
import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swipe-image';

export default class App extends React.Component {
     state = {
      images : [
        { url: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name:"shakira" },
        { url: 'https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?cs=srgb&dl=adorable-animal-cat-9413.jpg&fm=jpg', name: "cat" },
        { url: 'https://i.pinimg.com/236x/c6/6b/11/c66b111bf4df809e87a1208f75d2788b.jpg', name: "baby" }
      ]
   }

  bottom(e) {
    alert('Swipe Bottom')
  }

  top(e) {
    alert('Swipe Top')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper
          images={this.state.images}
          swipeBottom={(e) => this.bottom(e)}
          swipeTop={(e) => this.top(e)}
          imageHeight={number}
          textSize={number}
          textBold={boolean}
          textColor={String}
          textUnderline={boolean}
        />
      </View>
    );
  }
}
```
## License
MIT © [Talha](https://github.com/Talha-Jawed) |
[License](https://choosealicense.com/licenses/mit/) 
