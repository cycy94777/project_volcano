d3.json('http://127.0.0.1:5000/data').then(function(data){
elevation7000 = [];
elevation6000 = [];
elevation5000 = [];
elevation4000 = [];
elevation3000 = [];
elevation2000 = [];
elevation1000 = [];
elevationneg1000 = [];
elevationneg2000 = [];
elevationneg3000 = [];
elevationneg4000 = [];
elevationneg5000 = [];
elevationneg6000 = [];
for (let i = 0; i < data.length; i++)
{
    let elevation_data = data[i]
    if (elevation_data.elevation < -6000) {
     elevationneg6000.push(elevation_data);
    } else if (elevation_data.elevation < -5000) {
     elevationneg5000.push(elevation_data);
    } else if (elevation_data.elevation < -4000) {
     elevationneg4000.push(elevation_data);
    } else if (elevation_data.elevation < -3000) {
     elevationneg3000.push(elevation_data);
    } else if (elevation_data.elevation < -2000) {
     elevationneg2000.push(elevation_data);
    } else if (elevation_data.elevation < -1000) {
     elevationneg1000.push(elevation_data);
    } else if (elevation_data.elevation < 1000) {
     elevation1000.push(elevation_data);
    } else if (elevation_data.elevation < 2000) {
     elevation2000.push(elevation_data);
    } else if (elevation_data.elevation < 3000) {
     elevation3000.push(elevation_data);
    } else if (elevation_data.elevation < 4000) {
     elevation4000.push(elevation_data);
    } else if (elevation_data.elevation < 5000) {
     elevation5000.push(elevation_data);
    } else if (elevation_data.elevation < 6000) {
     elevation6000.push(elevation_data);
    } else {
     elevation7000.push(elevation_data);
    }
}
console.log("------------");
console.log(`${elevationneg6000.length} volvanoes are between -6000 to -5000 elevations.`);
console.log(`${elevationneg5000.length} volvanoes are between -5000 to -4000 elevations.`);
console.log(`${elevationneg4000.length} volvanoes are between -4000 to -3000 elevations.`);
console.log(`${elevationneg3000.length} volvanoes are between -3000 to -2000 elevations.`);
console.log(`${elevationneg2000.length} volvanoes are between -2000 to -1000 elevations.`);
console.log(`${elevationneg1000.length} volvanoes are between -1000 to 0 elevations.`);
console.log(`${elevation1000.length} volvanoes are between 0 to 1000 elevations.`);
console.log(`${elevation2000.length} volvanoes are between 1000 to 2000 elevations.`);
console.log(`${elevation3000.length} volvanoes are between 2000 to 3000 elevations.`);
console.log(`${elevation4000.length} volvanoes are between 3000 to 4000 elevations.`);
console.log(`${elevation5000.length} volvanoes are between 4000 to 5000 elevations.`);
console.log(`${elevation6000.length} volvanoes are between 5000 to 6000 elevations.`);
console.log(`${elevation7000.length} volvanoes are between 6000 to 7000 elevations.`);
console.log("------------");
let values = [elevation7000.length, elevation6000.length, elevation5000.length, elevation4000.length, elevation3000.length, elevation2000.length, elevation1000.length, elevationneg1000.length, elevationneg2000.length, elevationneg3000.length, elevationneg4000.length, elevationneg5000.length, elevationneg6000.length];
let labels = ['6001 to 7000', '5001 to 6000', '4001 to 5000', '3001 to 4000', '2001 to 3000', '1001 to 2000', '1 to 1000', '0 to -999', '-1000 to -1999', '-2000 to -2999', '-3000 to -3999', '-4000 to -4999', '-5000 to -5999']
function init() {
    let trace2 = [{
        values: values,
        labels: labels,
        type: "pie"
    }];
    Plotly.newPlot("pie", trace2);
}
init()
});