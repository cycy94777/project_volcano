d3.json('http://127.0.0.1:5000/data').then(function(data){
    let rift_continental = [];
let rift_oceanic = [];
let rift_intermediate = [];
let rift_unkown = [];
let intraplate_continental = [];
let intraplate_oceanic = [];
let intraplate_intermediate = [];
let intraplate_unkown = [];
let sub_continental = [];
let sub_oceanic = [];
let sub_intermediate = [];
let sub_unkown = [];
// Still need to assign csv to variable and assign it to volcanic_data
for (let p = 0; p < data.length; p++)
{
    let total_data = data[p];
    if (total_data['tectonic_settings'] === "Rift zone / Continental crust (>25 km)")
    {
        rift_continental.push(total_data);
    }
    else if (total_data['tectonic_settings'] === "Rift zone / Oceanic crust (< 15 km)")
    {
        rift_oceanic.push(total_data);
    }
    else if (total_data['Tectonic Setting'] === "Rift zone / Intermediate crust (15-25 km)")
    {
        rift_intermediate.push(total_data);
    }
    else if (total_data['tectonic_settings'] === "Rift zone / Crustal thickness unknown")
    {
        rift_unkown.push(total_data);
    }
    else if (total_data['tectonic_settings'] === "Intraplate / Continental crust (>25 km)")
    {
        intraplate_continental.push(total_data);
    }
    else if (total_data['tectonic_settings'] === "Intraplate / Oceanic crust (< 15 km)")
    {
        intraplate_oceanic.push(total_data);
    }
    else if (total_data['tectonic_settings'] === "Intraplate / Intermediate crust (15-25 km)")
    {
        intraplate_intermediate.push(total_data);
    }
    else if (total_data['tectonic_settings'] === "Intraplate / Crustal thickness unknown")
    {
        intraplate_unkown.push(total_data);
    }
    else if (total_data['tectonic_settings'] === "Subduction zone / Continental crust (>25 km)")
    {
        sub_continental.push(total_data);
    }
    else if (total_data['tectonic_settings'] === "Subduction zone / Oceanic crust (< 15 km)")
    {
        sub_oceanic.push(total_data);
    }
    else if (total_data['tectonic_settings'] === "Subduction zone / Intermediate crust (15-25 km)")
    {
        sub_intermediate.push(total_data);
    }
    else if (total_data['tectonic_settings'] === "Subduction zone / Crustal thickness unknown")
    {
        sub_unkown.push(total_data);
    }
}
let plate_count = [rift_continental.length, rift_intermediate.length, rift_oceanic.length, rift_unkown.length,
intraplate_continental.length,  intraplate_intermediate.length, intraplate_oceanic.length, intraplate_unkown.length,
sub_continental.length, sub_intermediate.length, sub_oceanic.length, sub_unkown.length];
console.log(plate_count)
let plate_names = ["Rift zone / Continental crust (>25 km)",
"Rift zone / Oceanic crust (< 15 km)", "Rift zone / Intermediate crust (15-25 km)",
"Rift zone / Crustal thickness unknown", "Intraplate / Continental crust (>25 km)",
"Intraplate / Oceanic crust (< 15 km)", "Intraplate / Intermediate crust (15-25 km)",
"Intraplate / Crustal thickness unknown", "Subduction zone / Continental crust (>25 km)",
"Subduction zone / Oceanic crust (< 15 km)", "Subduction zone / Intermediate crust (15-25 km)",
"Subduction zone / Crustal thickness unknown"];
let trace1 = {
    'x' : plate_names,
    'y' : plate_count,
    type : "bar",
    marker: {
        color: 'rgb(255, 166, 77)',
        zindex: 10}
};
let layout = {
    title: {
        text:'<b>Tectonic Plates<b>',
        font: {
            family: "Times New Roman",
            size: 24,
            weight: 'bold'}
      },
    plot_bgcolor: '#f3e1cd', 
    paper_bgcolor: '#f3e1cd'
}
let data_bar_chart = [trace1];
Plotly.newPlot("plot", data_bar_chart, layout);
})