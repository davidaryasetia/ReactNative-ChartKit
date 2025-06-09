import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { barChartData } from "./data";

const BarChartDemo = () => {
  const { width } = useWindowDimensions();
  return (
    <View>
      <View style={styles.ContainerText}>
        <Text style={styles.TextStyles}>Bar Chart react-native-charts</Text>
      </View>
      <BarChart
        data={barChartData}
        yAxisLabel=""
        yAxisSuffix=""
        width={width}
        height={400}
        chartConfig={{
          backgroundGradientFrom: "yellow",
          backgroundGradientToOpacity: 0.5,
          backgroundGradientTo: "lightgreen",
          color: () => "red",
          barPercentage:0.6
        }}
        style={{ borderColor: "black", borderWidth: 0.2 }}
        withInnerLines={false}
        // verticalLabelRotation={50}
        // horizontalLabelRotation={10}
        showValuesOnTopOfBars
        showBarTops={false}
        withCustomBarColorFromData
        flatColor
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ContainerText: {
    alignItems: "center",
    marginTop: 20, 
    marginBottom: 25, 
  },
  TextStyles: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default BarChartDemo;
