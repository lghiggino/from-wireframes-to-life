import react from "react"
import Layout2 from "../../src/DraweAndAppBarLayout"
import { PieChart, Pie, Tooltip } from "recharts"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Bar, Legend, ReferenceLine } from 'recharts';
// import { data } from "remark";

const fetchedData = [
    {
        "name": "Group A",
        "value": "R$400,04"
    },
    {
        "name": "Group B",
        "value": "R$300,04"
    },
    {
        "name": "Group C",
        "value": "R$300,04"
    },
    {
        "name": "Group D",
        "value": "R$200,04"
    },
    {
        "name": "Group E",
        "value": "R$278,04"
    },
    {
        "name": "Group F",
        "value": "R$189,04"
    }
]

const transformedData = () => {
    let newData = fetchedData.map(el => {
        return {"name": el.name, "value": +el.value.slice(2).replace(",", ".")}
    })
    return newData
}

const fillColorsArray = [""]

const data =[
    {"name": "AB", "value": 250, "fill": fillColorsArray[0]},
    {"name": "CD", "value": 450, "fill": fillColorsArray[1]},
    {"name": "EFGHIJKLMNOPQRSTU", "value": 350, "fill": fillColorsArray[2]},
    {"name": "VW", "value": 150, "fill": fillColorsArray[3]},
    {"name": "XYZ", "value": 250, "fill": fillColorsArray[4]},  
]

export default function pieChart() {
    return (
        <Layout2 home={false}>
            <PieChart width={730} height={300}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="40%"
                    cy="45%"
                    outerRadius={80}
                    label 
                    />
                <Tooltip />
                {/* <Legend  verticalAlign="top" height={80} width={200}/> */}
            </PieChart>
        </Layout2>
    )
}

const data01 = [
    {
        "name": "Group A",
        "value": 400
    },
    {
        "name": "Group B",
        "value": 300
    },
    {
        "name": "Group C",
        "value": 300
    },
    {
        "name": "Group D",
        "value": 200
    },
    {
        "name": "Group E",
        "value": 278
    },
    {
        "name": "Group F",
        "value": 189
    }
];
const data02 = [
    {
        "name": "Group A",
        "value": 2400
    },
    {
        "name": "Group B",
        "value": 4567
    },
    {
        "name": "Group C",
        "value": 1398
    },
    {
        "name": "Group D",
        "value": 9800
    },
    {
        "name": "Group E",
        "value": 3908
    },
    {
        "name": "Group F",
        "value": 4800
    }
];

// export default function pieChartPage() {
//     return (
//         <Layout2 home={false}>
//             <PieChart width={730} height={250}>
//                 <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#2b4570" label />
//                 <Tooltip />
//             </PieChart>
//             <PieChart width={730} height={250}>
//                 <Pie data={data02} dataKey="value" nameKey="name" cx="30%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
//                 <Tooltip />
//             </PieChart>
//             <PieChart width={730} height={250}>
//                 <Pie data={transformedData()} dataKey="value" nameKey="name" cx="40%" cy="50%" outerRadius={100} fill="#2b4570" label />
//                 <Tooltip />
//             </PieChart>
//         </Layout2>
//     )
// }

