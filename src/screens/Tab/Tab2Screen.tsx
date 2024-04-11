import { View, Text, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { LineChart, ProgressChart, PieChart, BarChart } from 'react-native-chart-kit';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const Tab2Screen = () => {
    const chartConfig = {
        backgroundColor: 'white',
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 20,
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#4aab27",
        },
        propsForBackgroundLines: {
            stroke: "#4aab27",
            strokeWidth: 1,
        },
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView contentContainerStyle={{ alignItems: "center", paddingTop: 50 }}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>Gráfico de Temperatura (Mínima y Máxima)</Text>
                    <LineChart
                        data={{
                            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                            datasets: [
                                {
                                    data: [18, 20, 22, 25, 28, 30, 32, 30, 28, 25, 22, 20],
                                    color: (opacity = 1) => `rgba(74, 171, 39, ${opacity})`, // Verde para mínima
                                    strokeWidth: 2,
                                },
                                {
                                    data: [25, 27, 29, 32, 34, 36, 35, 34, 32, 30, 28, 25],
                                    color: (opacity = 1) => `rgba(11, 77, 160, ${opacity})`, // Azul para máxima
                                    strokeWidth: 2,
                                }
                            ]
                        }}
                        chartConfig={chartConfig}
                        width={width * 0.9}
                        height={height * 0.3}
                        yAxisSuffix="°C"
                        style={{ borderRadius: 20 }}
                    />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>Gráfico de Humedad</Text>
                    <LineChart
                        data={{
                            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                            datasets: [{
                                data: [60, 62, 65, 63, 70, 68, 66, 64, 63, 62, 60, 58],
                                color: (opacity = 1) => `rgba(74, 171, 39, ${opacity})`, // Verde
                                strokeWidth: 2,
                            }]
                        }}
                        chartConfig={chartConfig}
                        width={width * 0.9}
                        height={height * 0.3}
                        yAxisSuffix="%"
                        style={{ borderRadius: 20 }}
                    />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>Gráfico de Progreso (Humedad)</Text>
                    <ProgressChart
                        data={{
                            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                            data: [
                                Math.random(),
                                Math.random(),
                                Math.random(),
                            ]
                        }}
                        width={width * 0.9}
                        height={height * 0.3}
                        strokeWidth={16}
                        radius={32}
                        hideLegend={false}
                        chartConfig={chartConfig}
                        style={{ borderRadius: 20 }}
                    />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>Gráfico de Pastel (Temperatura Máxima)</Text>
                    <PieChart
                        data={[
                            {
                                name: 'Máxima',
                                population: 36,
                                color: 'rgba(11, 77, 160, 1)', // Azul
                                legendFontColor: 'rgba(74, 171, 39)',
                                legendFontSize: 15,
                            },
                            {
                                name: 'Resto',
                                population: 100 - 36,
                                color: 'rgba(74, 171, 39, 0.5)', // Verde con opacidad
                                legendFontColor: '#7F7F7F',
                                legendFontSize: 15,
                            },
                        ]}
                        width={width * 0.9}
                        height={height * 0.3}
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="15"
                        chartConfig={chartConfig}
                        style={{ borderRadius: 20 }}
                    />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>Gráfico de Barras (Temperatura y Humedad)</Text>
                    <BarChart
                        data={{
                            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                            datasets: [
                                {
                                    data: [20, 25, 22, 28, 30, 32, 29, 27, 26, 23, 22, 18],
                                    color: (opacity = 0.5) => `rgba(74, 171, 39, ${opacity})`, // Verde con opacidad
                                    strokeWidth: 2,
                                },
                                {
                                    data: [60, 62, 65, 63, 70, 68, 66, 64, 63, 62, 60, 58],
                                    color: (opacity = 0.5) => `rgba(11, 77, 160, ${opacity})`, // Azul con opacidad
                                    strokeWidth: 2,
                                }
                            ]
                        }}
                        chartConfig={chartConfig}
                        yAxisLabel="$"
                        yAxisSuffix=""
                        width={width * 0.9}
                        height={height * 0.3}
                        style={{ borderRadius: 20 }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
} 