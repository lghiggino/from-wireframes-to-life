import react from "react"
import Layout2 from "../../src/DraweAndAppBarLayout"
import { PieChart, Pie, Tooltip, Legend } from "recharts"
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


//MUI STYLING
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        legend: {
            outline: "1px solid red",
            border: "2px solid red",
            backgroundColor: "red"
        }
    })
)

const fillColorsArray = ["#00206B", "#003bc4","#0CC4EB", "#0046EB", "#4779EE","#004AF7", "#20376B", "#003FD1",  "#0046EB"]

const pieChartDataNormalized = (data) => {
    let newData = data.map((el, idx) => {
        return {"name": el.planOperatorName, "value": +el.amount, "fill": fillColorsArray[idx]}
    })
    return newData
}

const data =[
    {"name": "AB", "value": 250, "fill": fillColorsArray[0]  },
    {"name": "CD", "value": 450, "fill": fillColorsArray[1]  },
    {"name": "EFGHIJKLMNOPQRSTU", "value": 350, "fill": fillColorsArray[2]  },
    {"name": "VW", "value": 150, "fill": fillColorsArray[3]  }, 
]

export default function pieChart() {
    const classes = useStyles();
    const theme = useTheme();
    const smallDevices = useMediaQuery(theme.breakpoints.down('sm'))
    const mediumDevices = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Layout2 home={false}>
            <PieChart width={730} height={300}>
                <Pie
                    data={data}
                    width={smallDevices ? 350 : mediumDevices ? 800 : 1130}
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