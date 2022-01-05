import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis , ResponsiveContainer } from 'recharts';

const Analytics = () => {
	const data = [
        {
          name: "Saturday ",
          camera: 50,
          sold: 35,
          amt: 2400
        },
        {
          name: "Sunday",
          camera: 40,
          sold: 20,
          amt: 2210
        },
        {
          name: "Monday",
          camera: 59,
          sold: 48,
          amt: 2290
        },
        {
          name: "Tuesday",
          camera: 33,
          sold: 33,
          amt: 2000
        },
        {
          name: "Wednesday",
          camera: 88,
          sold: 50,
          amt: 2181
        },
        {
          name: "Thursday",
          camera: 36,
          sold: 34,
          amt: 2500
        },
        {
          name: "Friday",
          camera: 66,
          sold: 65,
          amt: 2100
        }
      ];
	return (
		<>
        <ResponsiveContainer width="95%" height={400}>
        <LineChart
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="sold"
                stroke="#8884d8"
                activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="camera" stroke="#82ca9d" />
        </LineChart>
            </ ResponsiveContainer></>
	);
};

export default Analytics;
