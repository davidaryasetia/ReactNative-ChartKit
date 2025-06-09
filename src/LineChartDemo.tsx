import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { lineChartData } from "./data";

const LineChartDemo = () => {
  const { width } = useWindowDimensions();
  return (
    <View>
      <View style={styles.containerText}>
        <Text style={styles.Text}>Stock-Market Line Charts</Text>
      </View>
      <LineChart
        data={lineChartData}
        yAxisLabel=""
        yAxisSuffix=""
        width={width}
        height={400}
        chartConfig={{
          backgroundGradientFrom: "yellow",
          backgroundGradientToOpacity: 0.5,
          backgroundGradientTo: "lightgreen",
          color: () => "red",
          barPercentage: 0.6,
          propsForDots:{
            r:'3', 
            strokeWidth:'2', 
            stroke:'black'
          }
        }}
        style={{ borderColor: "black", borderWidth: 0.2 }}
        withInnerLines={false}
        withShadow={false}
        getDotColor={() => 'yellow'}
        hidePointsAtIndex={[3]} 
        // verticalLabelRotation={50}
        // horizontalLabelRotation={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerText: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10, 
  },
  Text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LineChartDemo;
