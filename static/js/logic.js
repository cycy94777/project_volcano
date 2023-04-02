d3.json('http://127.0.0.1:5000/data').then(function(data){
    console.log(data[0]);
    var myMap=L.map("map", {
        center: [45, 30],
        zoom: 2,
    })
    var streetMap=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    streetMap.addTo(myMap);
    
    for (let i=0; i<data.length; i++){
        
        let lon=data[i]['lon'];
        console.log();
        let lat=data[i]['lat'];
        
        L.marker([lon,lat]).addTo(myMap);
    };
});