import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions, Text, StatusBar, Platform } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function Swiper({images=[],imageWidthPercentage=90 ,imageHeight=200, imgStyle={}, viewStyle={},swipeBottom,swipeTop }) {
    const handleClick = (e, item) => {
        
        if (e.nativeEvent.contentOffset.y < 0) {
            swipeBottom(item)
        } else {
            swipeTop(item)
        }
    }
   
    // const height = imageHeight && imageHeight > (screenHeight - Platform.OS === 'ios' ? 0
    //     : StatusBar.currentHeight) ? (screenHeight - Platform.OS === 'ios' ? 0 : StatusBar.currentHeight) : imageHeight;
    let myImgStyle = {height: parseInt(imageHeight), width: screenWidth * imageWidthPercentage/100,...imgStyle }
    let myViewStyle={ width: screenWidth, alignItems: "center",...viewStyle }
    return (
        <View style={{height: imageHeight}}>
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} >
            {images &&
                images.map((item, index) => {
                    return (typeof item.url === 'string'|| item.local ?
                        <ScrollView
                        key={index} onScrollEndDrag={(e) => handleClick(e, item)}>
                            <View style={myViewStyle}>
                            
                         
                            {
                                item.local ? 
                                <Image
                                style={myImgStyle}
                                source={item.local}
                            /> :
                            <Image
                                style={myImgStyle}
                                source={{ uri: item.url }}
                            />
                            }
                           
                            </View>
                        </ScrollView>
                        :
                        null
                    )
                })
            }
        </ScrollView>
        </View>
    );
}

export default Swiper;

