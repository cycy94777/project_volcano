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
        let vol_icon = L.icon({
            iconUrl: '../data_resource/Volcano-Image.png',
            iconSize: [38, 38]
        });
        for (let i=0; i<data.length; i++){
            let name = data[i]['name']
            let type = data[i]['type']
            let elevation = data[i]['elevation']
            let composition = data[i]['compoistion']
            let marker_content = `<h2>Name: ${name}<h2><hr><h3>Type: ${type}<h3><hr><h3>Elevation: ${elevation}<h3><hr><h3>Composition: ${composition}<h3>`
            switch (data[i]['composition']) {
                case 'Foidite':
                    foidite.push(L.marker([data[i]['lat'],data[i]['lon']], {icon : vol_icon}).bindPopup(marker_content));
                    break;
                case 'Basalt / Picro-Basalt':
                    basalt_picroBasalt.push(L.marker([data[i]['lat'],data[i]['lon']], {icon : vol_icon}));
                    break;
                case 'Trachybasalt / Tephrite Basanite':
                    trachybasalt_tephriteBasanite.push(L.marker([data[i]['lat'],data[i]['lon']], {icon : vol_icon}).bindPopup(marker_content));
                    break;
                case 'Trachyte / Trachydacite':
                    trachyte_trachydacite.push(L.marker([data[i]['lat'],data[i]['lon']], {icon : vol_icon}).bindPopup(marker_content));
                    break;
                case 'Phono-tephrite /  Tephri-phonolite':
                    phonoTephrite_tephriPhonolite.push(L.marker([data[i]['lat'],data[i]['lon']], {icon : vol_icon}).bindPopup(marker_content));
                    break;
                case 'Phonolite':
                    phonolite.push(L.marker([data[i]['lat'],data[i]['lon']], {icon : vol_icon}).bindPopup(marker_content));
                    break;
                case 'Trachyandesite / Basaltic Trachyandesite':
                    Trachyandesite_basalticTrachyandesite.push(L.marker([data[i]['lat'],data[i]['lon']], {icon : vol_icon}).bindPopup(marker_content));
                    break;
                case 'Andesite / Basaltic Andesite':
                    andesite_basalticAndesite.push(L.marker([data[i]['lat'],data[i]['lon']], {icon : vol_icon}).bindPopup(marker_content));
                    break;
                case 'Rhyolite':
                    rhyolite.push(L.marker([data[i]['lat'],data[i]['lon']], {icon : vol_icon}).bindPopup(marker_content));
                    break;
                case 'Dacite':
                    dacite.push(L.marker([data[i]['lat'],data[i]['lon']], {icon : vol_icon}).bindPopup(marker_content));
                    break;
                default :
                    unknown.push(L.marker([data[i]['lat'],data[i]['lon']], {icon : vol_icon}).bindPopup(marker_content));
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