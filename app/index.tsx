import BarChartDemo from "@/src/BarChartDemo";
import ContributionGraphDemo from "@/src/ContributionGraphDemo";
import LineChartDemo from "@/src/LineChartDemo";
import StackedBarChartDemo from "@/src/StackedBarChartDemo";

import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
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
});

export default App;
