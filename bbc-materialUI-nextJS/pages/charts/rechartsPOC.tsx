import Layout2 from "../../src/DraweAndAppBarLayout"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        outline: {
            outline: "2px solid red"
        },
    })
)


const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 800, pv: 2800, amt: 2800 },
    { name: 'Page C', uv: 600, pv: 2600, amt: 2600 },
    { name: 'Page D', uv: 1000, pv: 3000, amt: 3000 },
    { name: 'Page E', uv: 1000, pv: 3000, amt: 3000 },
];

export default function recharts() {
    const classes = useStyles();
    return (
        <Layout2 home={false}>
            <div className={classes.outline}>
                <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        </Layout2>
    )
}



