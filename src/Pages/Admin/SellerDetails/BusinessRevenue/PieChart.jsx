// import revenueData from "../../../../../public/data/revenueData.json";
import { Doughnut } from "react-chartjs-2";
import sourceData from "../../../../../public/data/sourceData.json";
const PieChart = () => {
    return (
        <div>
            <Doughnut
                data={{
                    labels: sourceData.map((data) => data.label),
                    datasets: [
                        {
                            label: "Count",
                            data: sourceData.map((data) => data.value),
                            backgroundColor: [
                                "rgba(43, 63, 229, 0.8)",
                                "rgba(250, 192, 19, 0.8)",
                                "rgba(253, 135, 135, 0.8)",
                            ],
                            borderColor: [
                                "rgba(43, 63, 229, 0.8)",
                                "rgba(250, 192, 19, 0.8)",
                                "rgba(253, 135, 135, 0.8)",
                            ],
                        },
                    ],
                }}
                options={{
                    plugins: {
                        title: {
                            text: "Revenue Sources",
                        },
                    },
                }}
            />
        </div>
    );
};

export default PieChart;