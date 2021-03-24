// utility function to modify data from disease.sh api to be properly mapped to chart

export function modifiedData(data) {
    let chart = [];
    let point;

    for (let date in data.cases) {
        if (point) {
            let newPoint = {
                date: date,
                cases: data.cases[date],
                deaths: data.deaths[date],
                recovered: data.recovered[date],
            };
            chart.push(newPoint);
        }
        point = data
    }

    return chart;
}
