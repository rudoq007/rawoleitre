var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellites_1 = new ol.layer.Tile({
            'title': 'Google Satellites',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_RawoLeitreRoad_2 = new ol.format.GeoJSON();
var features_RawoLeitreRoad_2 = format_RawoLeitreRoad_2.readFeatures(json_RawoLeitreRoad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawoLeitreRoad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawoLeitreRoad_2.addFeatures(features_RawoLeitreRoad_2);
var lyr_RawoLeitreRoad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RawoLeitreRoad_2, 
                style: style_RawoLeitreRoad_2,
                interactive: true,
                title: '<img src="styles/legend/RawoLeitreRoad_2.png" /> Rawo Leitre Road'
            });
var format_Chainage_3 = new ol.format.GeoJSON();
var features_Chainage_3 = format_Chainage_3.readFeatures(json_Chainage_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chainage_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chainage_3.addFeatures(features_Chainage_3);
var lyr_Chainage_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chainage_3, 
                style: style_Chainage_3,
                interactive: true,
                title: '<img src="styles/legend/Chainage_3.png" /> Chainage'
            });
var format_CrossingStructures_4 = new ol.format.GeoJSON();
var features_CrossingStructures_4 = format_CrossingStructures_4.readFeatures(json_CrossingStructures_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CrossingStructures_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CrossingStructures_4.addFeatures(features_CrossingStructures_4);
var lyr_CrossingStructures_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CrossingStructures_4, 
                style: style_CrossingStructures_4,
                interactive: true,
                title: '<img src="styles/legend/CrossingStructures_4.png" /> Crossing Structures'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_GoogleSatellites_1.setVisible(true);lyr_RawoLeitreRoad_2.setVisible(true);lyr_Chainage_3.setVisible(true);lyr_CrossingStructures_4.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_GoogleSatellites_1,lyr_RawoLeitreRoad_2,lyr_Chainage_3,lyr_CrossingStructures_4];
lyr_RawoLeitreRoad_2.set('fieldAliases', {'id': 'id', 'Length': 'Length', });
lyr_Chainage_3.set('fieldAliases', {'fid': 'fid', 'cngdegrees': 'cngdegrees', 'Label': 'Label', });
lyr_CrossingStructures_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_RawoLeitreRoad_2.set('fieldImages', {'id': 'TextEdit', 'Length': 'TextEdit', });
lyr_Chainage_3.set('fieldImages', {'fid': 'Range', 'cngdegrees': 'TextEdit', 'Label': 'TextEdit', });
lyr_CrossingStructures_4.set('fieldImages', {'id': '', 'Name': '', });
lyr_RawoLeitreRoad_2.set('fieldLabels', {'id': 'no label', 'Length': 'no label', });
lyr_Chainage_3.set('fieldLabels', {'fid': 'header label', 'cngdegrees': 'no label', 'Label': 'no label', });
lyr_CrossingStructures_4.set('fieldLabels', {'id': 'no label', 'Name': 'header label', });
lyr_CrossingStructures_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});