import React, {StyleSheet, Dimensions} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 30
    },
    "search-form": {
        "width": "100%",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "background": "#f4f4f4",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "border": "1 #ccc solid",
        "borderRadius": 10
    },
    "movie-img": {
        "width": "80%"
    }
});