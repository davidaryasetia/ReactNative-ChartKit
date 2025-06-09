import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { StackedBarChart } from "react-native-chart-kit";
import { stackedBarChartData } from "./data";

const StackedBarChartDemo = () => {
  const { width } = useWindowDimensions();
  return (
    <View>
      <View style={styles.ContainerText}>
        <Text style={styles.TextStyles}>Stock-Market Stacked Bar Charts</Text>
      </View>
      <StackedBarChart
        hideLegend={false}
        data={stackedBarChartData}
        yAxisLabel=""
        yAxisSuffix=""
        width={width}
        height={400}
        chartConfig={{
          backgroundGradientFrom: "yellow",
          backgroundGradientToOpacity: 0.5,
          backgroundGradientTo: "lightgreen",
          color: () => 'black',
          barPercentage: 0.6,
        //   propsForBackgroundLines:{
        //     stroke: 0, 
        //   }
        }}
        style={{ borderColor: "black", borderWidth: 0.2 }}
        // withInnerLines={false}
        // verticalLabelRotation={50}
        // horizontalLabelRotation={10}
       
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ContainerText: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  TextStyles: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default StackedBarChartDemo;