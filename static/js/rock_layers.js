d3.json('http://127.0.0.1:5000/data').then(function(data){
    console.log(data[0]);
    
    var streetMap=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ;
    
    var myMap=L.map("map", {
        center: [45, 30],
        zoom: 2,
        layers: [streetMap]})
    
        var foidite = [];
        var basalt_picroBasalt = [];
        var trachybasalt_tephriteBasanite = [];
        var trachyte_trachydacite = [];
        var phonoTephrite_tephriPhonolite = [];
        var phonolite = [];
        var Trachyandesite_basalticTrachyandesite = [];
        var andesite_basalticAndesite = [];
        var rhyolite = [];
        var dacite = [];
        var unknown = [];
        for (let i=0; i<data.length; i++){
            switch (data[i]['composition']) {
                case 'foidite':
                    foidite.push(L.marker([data[i]['lat'],data[i]['lon']]));
                    break;
                case 'Basalt / Picro-Basalt':
                    basalt_picroBasalt.push(L.marker([data[i]['lat'],data[i]['lon']]));
                    break;
                case 'Trachybasalt / Tephrite Basanite':
                    trachybasalt_tephriteBasanite.push(L.marker([data[i]['lat'],data[i]['lon']]));
                    break;
                case 'Trachyte / Trachydacite':
                    trachyte_trachydacite.push(L.marker([data[i]['lat'],data[i]['lon']]));
                    break;
                case 'Phono-tephrite /  Tephri-phonolite':
                    phonoTephrite_tephriPhonolite.push(L.marker([data[i]['lat'],data[i]['lon']]));
                    break;
                case 'Phonolite':
                    phonolite.push(L.marker([data[i]['lat'],data[i]['lon']]));
                    break;
                case 'Trachyandesite / Basaltic Trachyandesite':
                    Trachyandesite_basalticTrachyandesite.push(L.marker([data[i]['lat'],data[i]['lon']]));
                    break;
                case 'Andesite / Basaltic Andesite':
                    andesite_basalticAndesite.push(L.marker([data[i]['lat'],data[i]['lon']]));
                    break;
                case 'Rhyolite':
                    rhyolite.push(L.marker([data[i]['lat'],data[i]['lon']]));
                    break;
                case 'Dacite':
                    dacite.push(L.marker([data[i]['lat'],data[i]['lon']]));
                    break;
                default :
                    unknown.push(L.marker([data[i]['lat'],data[i]['lon']]));
                    break;
            }
        }
        var foiditeLayer = L.layerGroup(foidite);
        var basalt_picroBasaltLayer = L.layerGroup(basalt_picroBasalt);
        var trachybasalt_tephriteBasaniteLayer = L.layerGroup(trachybasalt_tephriteBasanite);
        var trachyte_trachydaciteLayer = L.layerGroup(trachyte_trachydacite);
        var phonoTephrite_tephriPhonoliteLayer = L.layerGroup(phonoTephrite_tephriPhonolite);
        var phonoliteLayer = L.layerGroup(phonolite);
        var Trachyandesite_basalticTrachyandesiteLayer = L.layerGroup(Trachyandesite_basalticTrachyandesite);
        var rhyoliteLayer = L.layerGroup(rhyolite);
        var daciteLayer = L.layerGroup(dacite);
        var andesite_basalticAndesiteLayer = L.layerGroup(andesite_basalticAndesite);
        var unknownLayer = L.layerGroup(unknown);
        var overlayMap = {
            'foidite': foiditeLayer,
            'Basalt / Picro-Basalt': basalt_picroBasaltLayer,
            'Trachybasalt / Tephrite Basanite': trachybasalt_tephriteBasaniteLayer,
            'Trachyte / Trachydacite': trachyte_trachydaciteLayer,
            'Phono-tephrite /  Tephri-phonolite': phonoTephrite_tephriPhonoliteLayer,
            'Phonolite': phonoliteLayer,
            'Trachyandesite / Basaltic Trachyandesite': Trachyandesite_basalticTrachyandesiteLayer,
            'Andesite / Basaltic Andesite': andesite_basalticAndesiteLayer,
            'Rhyolite': rhyoliteLayer,
            'Dacite': daciteLayer,
            'Unknown': unknownLayer
        };
        baseMap = {"street": streetMap}
        L.control.layers(baseMap, overlayMap).addTo(myMap);
    })