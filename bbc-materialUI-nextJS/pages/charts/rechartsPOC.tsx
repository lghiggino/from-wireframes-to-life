import Layout2 from "../../src/DraweAndAppBarLayout"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend, ReferenceLine } from 'recharts';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


//MUI STYLING
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
    })
)

// CUSTOM X AXIS TICK
const renderCustomAxisTick = ({ x, y, payload }) => {
    let path = '';

    switch (payload.value) {
        case 'Page A':
        case 'Page C':
        case 'Page E':
            path = 'M899.072 99.328q9.216 13.312 17.92 48.128t16.384 81.92 13.824 100.352 11.264 102.912 9.216 90.112 6.144 60.928q4.096 30.72 7.168 70.656t5.632 79.872 4.096 75.264 2.56 56.832q-13.312 16.384-30.208 25.6t-34.304 11.264-34.304-2.56-30.208-16.896q-1.024-10.24-3.584-33.28t-6.144-53.76-8.192-66.56-8.704-71.68q-11.264-83.968-23.552-184.32-7.168 37.888-11.264 74.752-4.096 31.744-6.656 66.56t-0.512 62.464q1.024 18.432 3.072 29.184t4.608 19.968 5.12 21.504 5.12 34.304 5.12 56.832 4.608 90.112q-11.264 24.576-50.688 42.496t-88.576 29.696-97.28 16.896-74.752 5.12q-18.432 0-46.08-2.56t-60.416-7.168-66.048-12.288-61.952-17.92-49.664-24.064-28.16-30.208q2.048-55.296 5.12-90.112t5.632-56.832 5.12-34.304 5.12-21.504 4.096-19.968 3.584-29.184q2.048-27.648-0.512-62.464t-6.656-66.56q-4.096-36.864-11.264-74.752-13.312 100.352-24.576 184.32-5.12 35.84-9.216 71.68t-8.192 66.56-6.656 53.76-2.56 33.28q-13.312 12.288-30.208 16.896t-34.304 2.56-33.792-11.264-29.696-25.6q0-21.504 2.048-56.832t4.096-75.264 5.632-79.872 6.656-70.656q2.048-20.48 6.144-60.928t9.728-90.112 11.776-102.912 13.824-100.352 16.384-81.92 17.92-48.128q20.48-12.288 56.32-25.6t73.216-26.624 71.168-25.088 50.176-22.016q10.24 13.312 16.896 61.44t13.312 115.712 15.36 146.432 23.04 153.6l38.912-334.848-29.696-25.6 43.008-54.272 15.36 2.048 15.36-2.048 43.008 54.272-29.696 25.6 38.912 334.848q14.336-74.752 23.04-153.6t15.36-146.432 13.312-115.712 16.896-61.44q16.384 10.24 50.176 22.016t71.168 25.088 73.216 26.624 56.32 25.6';
            break;
        case 'Page B':
        case 'Page D':
            path = 'M662.528 451.584q10.24 5.12 30.208 16.384t46.08 31.744 57.856 52.736 65.024 80.896 67.072 115.2 64.512 154.624q-15.36 9.216-31.232 21.504t-31.232 22.016-31.744 15.36-32.768 2.56q-44.032-9.216-78.336-8.192t-62.976 7.68-53.248 16.896-47.616 19.968-46.08 16.384-49.664 6.656q-57.344-1.024-110.592-16.896t-101.376-32.256-89.6-25.088-75.264 4.608q-20.48 8.192-41.984 1.024t-38.912-18.432q-20.48-13.312-39.936-33.792 37.888-116.736 86.016-199.68t92.672-136.704 78.848-81.408 43.52-33.792q9.216-5.12 10.24-25.088t-1.024-40.448q-3.072-24.576-9.216-54.272l-150.528-302.08 180.224-29.696q27.648 52.224 53.76 79.36t50.176 36.864 45.568 5.12 39.936-17.92q43.008-30.72 80.896-103.424l181.248 29.696q-20.48 48.128-45.056 99.328-20.48 44.032-47.616 97.28t-57.856 105.472q-12.288 34.816-13.824 57.344t1.536 36.864q4.096 16.384 12.288 25.6z';
            break;
        default:
            path = '';
    }

    return (
        <svg x={x - 12} y={y + 4} width={24} height={24} viewBox="0 0 1024 1024" fill="#666">
            <path d={path} />
        </svg>
    );
};


//CUSTOM BAR LABEL
const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
};

// CUSTOM TOOLTIP NO BARCHART
function getIntroOfPage(label) {
    if (label === 'Page A') {
        return "Page A is about men's clothing";
    } if (label === 'Page B') {
        return "Page B is about women's dress";
    } if (label === 'Page C') {
        return "Page C is about women's bag";
    } if (label === 'Page D') {
        return "Page D is about household goods";
    } if (label === 'Page E') {
        return "Page E is about food";
    } if (label === 'Page F') {
        return "Page F is about baby food";
    }
}

interface CustomTooltipProps {
    payload?: any
    label?: string
    active?: boolean
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ payload, label, active }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <p className="intro">{getIntroOfPage(label)}</p>
                <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
    }

    return null;
}


const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400, neg: -1200 },
    { name: 'Page B', uv: 800, pv: 2800, amt: 2800, neg: -1300 },
    { name: 'Page C', uv: 600, pv: 2600, amt: 2600, neg: -1400 },
    { name: 'Page D', uv: 1000, pv: 3000, amt: 3000, neg: -1200 },
    { name: 'Page E', uv: 1000, pv: 2600, amt: 2600, neg: -1600 },
];

const data2 = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400,},
    {name: 'Page B', uv: -3000, pv: 1398, amt: 2210,},
    {name: 'Page C', uv: -2000, pv: -9800, amt: 2290,},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000,},
    {name: 'Page E', uv: -1890, pv: 4800, amt: 2181,},
    {name: 'Page F', uv: 2390, pv: -3800, amt: 2500,},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100,},
  ];

export default function recharts() {
    const classes = useStyles();
    const theme = useTheme();
    const smallDevices = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Layout2 home={false}>
            <div>
                <LineChart width={smallDevices? 350: 800} height={300} data={data} margin={{ top: 105, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8c8c8c" />
                    <Line type="monotone" dataKey="pv" stroke="#4e4e4e" />
                    <Line type="monotone" dataKey="amt" stroke="#a2a2a2" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" /> {/*tick={renderCustomAxisTick} */}
                    <YAxis />
                    <Tooltip />
                </LineChart>

                <br />
                <BarChart width={smallDevices? 350:800} height={300} data={data} >
                    <XAxis dataKey="name" tick={renderCustomAxisTick} allowDataOverflow={true} domain={['auto', 0]} />
                    <YAxis tickCount={8} domain={[0, 'dataMax + 200']} />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="uv" barSize={30} fill="#8884d8" />
                    <Bar dataKey="pv" barSize={30} fill="#a8a4d8" />
                    <Bar dataKey="neg" barSize={30} fill="#a8a4d8" />
                </BarChart>

                <br />
                <BarChart
                    width={smallDevices? 350: 600}
                    height={300}
                    data={data2}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
        </Layout2>
    )
}



