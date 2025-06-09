import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { barChartData } from "./data";

const BarChartDemo = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.ContainerText}>
        <Text style={styles.TextStyles}>Stock-Market Bar Charts</Text>
      </View>
      <BarChart
        data={barChartData}
        yAxisLabel=""
        yAxisSuffix=""
        width={width}
        height={600}
        chartConfig={{
          backgroundGradientFrom: "yellow",
          backgroundGradientToOpacity: 1,
          backgroundGradientTo: "lightgreen",
          color: () => "black",
          barPercentage: 1.2,
        }}
        style={{ borderColor: "black", borderWidth: 0.5 }}
        withInnerLines={false}
        // verticalLabelRotation={40}
        horizontalLabelRotation={10}
        showValuesOnTopOfBars
        showBarTops={false}
        withCustomBarColorFromData
        flatColor
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  ContainerText: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  TextStyles: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default BarChartDemo;
