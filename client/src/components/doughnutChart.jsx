import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';


const DoughnutChart = () => {

    const [currentData, setcurrentData] = useState([]);

    function modifiedData(data) {
        let doughnut = [];

        data.map(position => {
            const newPoint =
                [
                    position.todayCases,
                    position.todayDeaths,
                    position.todayRecovered,
                ]
            doughnut.push(newPoint)
        })
        console.log(doughnut)
        return doughnut;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://disease.sh/v3/covid-19/all')
                const newDoughnut = modifiedData([res.data, ...currentData])
                setcurrentData(newDoughnut);
                console.log(res.data);
            } catch (e) {
                console.error(e)
            }
        }


        fetchData();
    }, [])

    return (
        <div>
            {
                currentData.length > 0 &&
                <Doughnut
                    data={{
                        labels: ['Cases', 'Deaths', 'Recovered'],
                        datasets: [
                            {
                                data: currentData[0],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                ],
                                borderWidth: 1,
                            },
                        ],
                    }}
                />
            }
        </div>
    );
}

export default DoughnutChart;