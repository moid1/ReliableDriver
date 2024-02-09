import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import Theme from '../../Theme/Theme';

const Chart = () => {
  const radius = 65;
  const circleCircumference = 2 * Math.PI * radius;

  const groceries = 241;
  const bills = 372;
  const regular = 188;
  const total = groceries + bills + regular;

  const groceriesPercentage = (groceries / total) * 100;
  const billsPercentage = (bills / total) * 100;
  const regularPercentage = (regular / total) * 100;

  const groceriesStrokeDashoffset =
    circleCircumference - (circleCircumference * groceriesPercentage) / 100;
  const billsStrokeDashoffset =
    circleCircumference - (circleCircumference * billsPercentage) / 100;
  const regularStrokeDashoffset =
    circleCircumference - (circleCircumference * regularPercentage) / 100;

  const groceriesAngle = (groceries / total) * 360;
  const billsAngle = (bills / total) * 360;
  const regularAngle = groceriesAngle + billsAngle;

  return (
    <View style={styles.container}>
      <View style={styles.graphWrapper}>
        <Svg height="160" width="160" viewBox="0 0 180 180">
          <G rotation={-90} originX="90" originY="90">
            { total === 0 ? (
              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke="#F1F6F9"
                fill="transparent"
                strokeWidth="10"
              />
             ) : (
               <>
                 <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke= '#BA8899'
                  fill="transparent"
                  strokeWidth="10"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={groceriesStrokeDashoffset}
                  rotation={0}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                 />
                 <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke={Theme.colors.primaryColor}
                  fill="transparent"
                  strokeWidth="10"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={billsStrokeDashoffset}
                  rotation={groceriesAngle}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                 />
                 <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke={Theme.colors.primaryColor}
                  fill="transparent"
                  strokeWidth="10"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={regularStrokeDashoffset}
                  rotation={regularAngle}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                />
               </>
             )
            }
          </G>
        </Svg>
        <Text style={styles.label}>{'108'}</Text>
        <Text style={styles.label1}>Orders</Text>
      </View>
    </View>
  );
};

export default Chart;


const styles = StyleSheet.create({
  container: {
    marginVertical:30,
    justifyContent: "center",
    alignItems: "center",
  },
  graphWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    position: "absolute",
    color:Theme.colors.secondaryColor,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 32,
    bottom:50
  },
  label1: {
    position: "absolute",
    color:Theme.colors.secondaryColor,
    textAlign: "center",
    fontSize: 16,
    bottom:30,
    left:55
  }
});