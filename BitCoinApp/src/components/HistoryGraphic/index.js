import { Dimensions } from "react-native";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "../CurrentPrice/styles";

export default function HistoryGraphic(props){
    return(
        <View>
            <LineChart data={{datasets:[
                {
                data: props.infoDataGraphic
            },
            ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
        backgroundColor: "#000",
        backgroundGradientFrom: "#000",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
        }}
        bezier
        style={{
        marginVertical: 8,
        borderRadius: 0
    }}
        >
            </LineChart>  
        </View>
    )
}