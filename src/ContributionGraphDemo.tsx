import { Alert, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { ContributionGraph } from "react-native-chart-kit";

const commitsData = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 },
];

const ContributionGraphDemo = () => {
  const { width: screenWidth } = useWindowDimensions();
  return (
    <View>
      <View style={styles.ContainerText}>
        <Text style={styles.TextStyles}>Contribution Graph</Text>
      </View>
      <ContributionGraph
        values={commitsData}
        endDate={new Date("2017-04-01")}
        numDays={105}
        width={screenWidth}
        height={220}
        squareSize={20}
        gutterSize={2}
        onDayPress={({count, date}) => Alert.alert(`Count : ${count}`, `Date ${date}`)}
        chartConfig={{
          backgroundGradientFrom: "yellow",
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: "lightgreen",
          backgroundGradientToOpacity: 0.3,
          color: (opacity) => `rgba(0,0,0,${opacity})`,
          propsForLabels: {
            fill: "green",
            fontWeight: "bold",
          },
        }}
        // accessor="value"
        tooltipDataAttrs={(value) => {
          console.log({ value });
          return { rx: value.count ? 9 : 4, ry: value.count ? 9 : 4 };
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    ContainerText: {
        flex: 1, 
        alignItems: 'center', 
        marginTop: 20, 
        marginBottom: 10, 
    }, 
    TextStyles: {
        alignItems: 'center', 
        fontSize: 18, 
        fontWeight: '600', 
    }
})

export default ContributionGraphDemo;
