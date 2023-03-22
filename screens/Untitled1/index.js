import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({
  route
}) => {
  const {
    parameter_test = 1
  } = route.params || {};
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} style={styles.AysmVStU}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#f10a0a"
  },
  AysmVStU: {
    borderRadius: 62,
    position: "absolute",
    left: 50,
    width: 50,
    height: 50,
    transform: "rotate(36deg)",
    top: 50,
    backgroundColor: "#f80202"
  }
});
export default Untitled1;