d3.json('http://127.0.0.1:5000/data').then(function(data){


    var caldera = [];
    var complex = [];
    var compound = [];
    var cone = [];
    var craterRows = [];
    var explosionCrater = [];
    var fissureVent = [];
    var lavaCone = [];
    var lavaDome = [];
    var maar = [];
    var pyroclasticCone = [];
    var pyroclasticShield = [];
    var shield = [];
    var stratoVolcano = [];
    var subglacial = [];
    var submarine = [];
    var tuffCone = [];
    var tuffRing = [];
    var volcanicField = [];

    for (let i=0; i<data.length; i++){    
        switch (data[i]['type']) {
            case 'Caldera':
            case 'Caldera(s)':
                caldera.push(data[i]);
                break;
            case 'Complex':
            case 'Complex(es)':
                complex.push(data[i]);
                break;
            case 'Compound':
                compound.push(data[i]);
                break;
            case 'Cone(s)':
                cone.push(data[i]);
                break;
            case 'Crater rows':
                craterRows.push(data[i]);
                break;
            case 'Explosion crater(s)':
                explosionCrater.push(data[i]);
                break;
            case 'Fissure vent':
            case 'Fissure vent(s)':
                fissureVent.push(data[i]);
                break;
            case 'Lava cone':
            case 'Lava cone(es)':
                lavaCone.push(data[i]);
                break;
            case 'Lava dome':
            case 'Lava dome(s)':
                lavaDome.push(data[i]);
                break;
            case 'Maar':
            case 'Maar(s)':
                maar.push(data[i]);
                break;
            case 'Pyroclastic cone':
            case 'Pyroclastic cone(s)':
                pyroclasticCone.push(data[i]);
            case 'pyroclastic shield':
                pyroclasticShield.push(data[i]);
                break;
            case 'Shield':
            case 'Shield(s)':
                shield.push(data[i]);
                break;
            case 'Stratovolcano':
            case 'Stratovolcano(es)':
            case 'Stratovolcano?':
                stratoVolcano.push(data[i]);
                break;
            case 'Subglacial':
                subglacial.push(data[i]);
                break;
            case 'Submarine':
            case 'Submarine(s)':
                submarine.push(data[i]);
                break;
            case 'Tuff cone':
            case 'Tuff cone(s)':
                tuffCone.push(data[i]);
                break;
            case 'Tuff Ring':
                tuffRing.push(data[i]);
            case 'Volcanic Field':
                volcanicField.push(data[i]);
            default :
                break;
        }
    }
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart)
    function drawChart() {
        var volcanicType = google.visualization.arrayToDataTable([
            ['Volcano Type', 'Count'],
            ['Caldera', caldera.length],
            ['Compound', compound.length],
            ['Cone', cone.length],
            ['Crater rows', craterRows.length],
            ['Explosion crater', explosionCrater.length],
            ['Fissure vent', fissureVent.length],
            ['Lava cone', lavaCone.length],
            ['Lava dome', lavaDome.length],
            ['Maar', maar.length],
            ['Pyroclastic cone', pyroclasticCone.length],
            ['Shield', shield.length],
            ['Stratovolcano', stratoVolcano.length],
            ['Subglacial', subglacial.length],
            ['Submarine', subglacial.length],
            ['Tuff cone', tuffCone.length],
            ['Tuff ring', tuffRing.length],
            ['Volcanic Field', volcanicField.length]
            ]);

        var options = {
            title: 'Volcanic Type',
            pieHole: 0.4,
            backgroundColor: '#f3e1cd',
            titleTextStyle: {
                fontSize: 24,
                textAlign: 'center' 
              }
            };
            
        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart.draw(volcanicType, options);
        }
})