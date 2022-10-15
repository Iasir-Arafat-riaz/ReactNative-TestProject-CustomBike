import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Text from "../components/text";
import { SafeAreaView } from "react-native-safe-area-context";
import GalaxyHeader from "../components/GalaxyHeader";
import { colors } from "../theme/colors";
import { PLANET_LIST } from "../data/planetList";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
export const SingleItem = ({ navigation, model }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("Details")}
      style={styles.item}
    >
      <View style={styles.firstItemDiv}>
        <View style={styles.circle} />
        <Text preset="h4" style={styles.itemName}>
          {model}
        </Text>
      </View>
      <View>
        <AntDesign name="right" size={14} color="white" />
      </View>
    </Pressable>
  );
};

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://serene-chamber-45441.herokuapp.com/products"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  const renderItem = ({ item }) => {
    const { model } = item;
    return <SingleItem navigation={navigation} model={model} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <GalaxyHeader></GalaxyHeader>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  list: {
    padding: spacing[5],
  },
  circle: {
    width: 20,
    height: 20,
    backgroundColor: colors.red,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: colors.gray,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing[4],
    justifyContent: "space-between",
  },
  firstItemDiv: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.2,
  },
});
