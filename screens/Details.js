import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GalaxyHeader from "../components/GalaxyHeader";
import Text from "../components/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Details({ navigation, route }) {
  const itemDetail = route.params.single;
  console.log(itemDetail);
  const { model, image, detail, link, origin, price } = itemDetail;
  return (
    <SafeAreaView style={styles.container}>
      <GalaxyHeader navigation={navigation} backBtn={true}></GalaxyHeader>
      <ScrollView>
        <View style={styles.imageView}>
          <Image source={{ uri: image, width: 250, height: 200 }} />
        </View>
        <View style={styles.details}>
          <Text preset="h3">{model}</Text>
          <Text preset="h5">{detail}</Text>
        </View>
        <Pressable style={styles?.link} onPress={() => Linking.openURL(link)}>
          <Text>Source :</Text>
          <Text
            preset="h4"
            style={{
              textTransform: "uppercase",
              textDecorationLine: "underline",
            }}
          >
            Wiki Link
          </Text>
        </Pressable>
        <View style={styles.priceOrigin}>
          <Text>{origin}</Text>
          <Text>{price} BDT</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    padding: spacing[4],
  },
  details: {
    justifyContent: "center",
    alignItems: "center",
    padding: spacing[4],
  },
  link: {
    flexDirection: "row",
    justifyContent: "center",
    margin: spacing[4],
    alignItems: "center",
  },
  priceOrigin: {
    padding: spacing[5],
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "gray",
    margin: spacing[4],
  },
});
