import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';


export const barChartData: ChartData = { 
    labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6'], 
    datasets: [
        {
            data:[28, 45, 60, 70, 30],
            colors:
            [
                (opacity) => 'green', 
                (opacity=1) => 'green', 
                (opacity1) => 'lightgrey', 
                (opacity1) => 'green'
            ]
        }
    ]
}