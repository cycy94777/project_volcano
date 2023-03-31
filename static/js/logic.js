d3.json('http://localhost:5000/data').then(function(data){
    console.log(data[0]);
    var myMap=L.map("map", {
        center: [34.0522, -118.2437],
        zoom: 5,
    })
    var streetMap=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    streetMap.addTo(myMap);
    
    for (let i=0; i<data.length; i++){
        
        let lon=data[i]['lon'];
        console.log();
        let lat=data[i]['lat'];
        
        L.Marker([lon,lat]).addTo(myMap);
    };
});
