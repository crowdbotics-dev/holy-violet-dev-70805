import { Text } from "react-native";
import { Switch } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.iXXtwQvx}></TextInput><Switch style={styles.XRyrafEB}></Switch><Text style={styles.bSPaFkxR}>Lorem ipsum…</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  iXXtwQvx: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 276,
    height: 30
  },
  XRyrafEB: {
    width: 50,
    height: 25
  },
  bSPaFkxR: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "relative"
  }
});
export default Untitled4;