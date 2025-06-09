import BarChartDemo from "@/src/BarChartDemo";
import ContributionGraphDemo from "@/src/ContributionGraphDemo";
import LineChartDemo from "@/src/LineChartDemo";
import StackedBarChartDemo from "@/src/StackedBarChartDemo";

import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.containerText}>
          <Text style={styles.textStyles}>Implementing of package react-native-chart-kit</Text>
        </View>
        <BarChartDemo />
        <LineChartDemo />
        <StackedBarChartDemo />
        <ContributionGraphDemo />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    minHeight: "100%",
    paddingBottom: 20,
  },
  containerText: {
    alignItems: 'center', 
  }, 
  textStyles: {
    fontWeight: '500', 
    fontSize: 16,
  }

});

export default App;
