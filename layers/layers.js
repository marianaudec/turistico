var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lota_utm_1 = new ol.format.GeoJSON();
var features_lota_utm_1 = format_lota_utm_1.readFeatures(json_lota_utm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lota_utm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lota_utm_1.addFeatures(features_lota_utm_1);
var lyr_lota_utm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lota_utm_1, 
                style: style_lota_utm_1,
                popuplayertitle: 'lota_utm',
                interactive: false,
                title: '<img src="styles/legend/lota_utm_1.png" /> lota_utm'
            });
var format_tome_utm_2 = new ol.format.GeoJSON();
var features_tome_utm_2 = format_tome_utm_2.readFeatures(json_tome_utm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tome_utm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tome_utm_2.addFeatures(features_tome_utm_2);
var lyr_tome_utm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tome_utm_2, 
                style: style_tome_utm_2,
                popuplayertitle: 'tome_utm',
                interactive: false,
                title: '<img src="styles/legend/tome_utm_2.png" /> tome_utm'
            });
var format_conce_utm_3 = new ol.format.GeoJSON();
var features_conce_utm_3 = format_conce_utm_3.readFeatures(json_conce_utm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_conce_utm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_conce_utm_3.addFeatures(features_conce_utm_3);
var lyr_conce_utm_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_conce_utm_3, 
                style: style_conce_utm_3,
                popuplayertitle: 'conce_utm',
                interactive: false,
                title: '<img src="styles/legend/conce_utm_3.png" /> conce_utm'
            });
var format_poligono_utm_4 = new ol.format.GeoJSON();
var features_poligono_utm_4 = format_poligono_utm_4.readFeatures(json_poligono_utm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligono_utm_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligono_utm_4.addFeatures(features_poligono_utm_4);
var lyr_poligono_utm_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poligono_utm_4, 
                style: style_poligono_utm_4,
                popuplayertitle: 'poligono_utm',
                interactive: true,
    title: 'poligono_utm<br />\
    <img src="styles/legend/poligono_utm_4_0.png" /> Cementerio_tome<br />\
    <img src="styles/legend/poligono_utm_4_1.png" /> Cerro_amarillo<br />\
    <img src="styles/legend/poligono_utm_4_2.png" /> Estadio<br />\
    <img src="styles/legend/poligono_utm_4_3.png" /> Lag_lomendez<br />\
    <img src="styles/legend/poligono_utm_4_4.png" /> Lag_trespascualas<br />\
    <img src="styles/legend/poligono_utm_4_5.png" /> parque_custodia<br />\
    <img src="styles/legend/poligono_utm_4_6.png" /> Paseo_memoria<br />\
    <img src="styles/legend/poligono_utm_4_7.png" /> Patinodromo<br />\
    <img src="styles/legend/poligono_utm_4_8.png" /> Plaza_belgica<br />\
    <img src="styles/legend/poligono_utm_4_9.png" /> Plaza_bellavista<br />\
    <img src="styles/legend/poligono_utm_4_10.png" /> Plaza_condell<br />\
    <img src="styles/legend/poligono_utm_4_11.png" /> Plaza_cruz<br />\
    <img src="styles/legend/poligono_utm_4_12.png" /> Plaza_españa<br />\
    <img src="styles/legend/poligono_utm_4_13.png" /> Plaza_peru<br />\
    <img src="styles/legend/poligono_utm_4_14.png" /> Plaza_tome<br />\
    <img src="styles/legend/poligono_utm_4_15.png" /> teatro_molina<br />\
    <img src="styles/legend/poligono_utm_4_16.png" /> Zoo<br />\
    <img src="styles/legend/poligono_utm_4_17.png" /> <br />' });
var format_punto_utm_5 = new ol.format.GeoJSON();
var features_punto_utm_5 = format_punto_utm_5.readFeatures(json_punto_utm_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_punto_utm_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_punto_utm_5.addFeatures(features_punto_utm_5);
var lyr_punto_utm_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_punto_utm_5, 
                style: style_punto_utm_5,
                popuplayertitle: 'punto_utm',
                interactive: true,
    title: 'punto_utm<br />\
    <img src="styles/legend/punto_utm_5_0.png" /> casa_minga<br />\
    <img src="styles/legend/punto_utm_5_1.png" /> casa_salud<br />\
    <img src="styles/legend/punto_utm_5_2.png" /> catedral<br />\
    <img src="styles/legend/punto_utm_5_3.png" /> Chiflon_diablo<br />\
    <img src="styles/legend/punto_utm_5_4.png" /> Mercado_lota<br />\
    <img src="styles/legend/punto_utm_5_5.png" /> Remo_paicaví<br />\
    <img src="styles/legend/punto_utm_5_6.png" /> Teatro_ban<br />\
    <img src="styles/legend/punto_utm_5_7.png" /> UCSC<br />\
    <img src="styles/legend/punto_utm_5_8.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_lota_utm_1.setVisible(true);lyr_tome_utm_2.setVisible(true);lyr_conce_utm_3.setVisible(true);lyr_poligono_utm_4.setVisible(true);lyr_punto_utm_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_lota_utm_1,lyr_tome_utm_2,lyr_conce_utm_3,lyr_poligono_utm_4,lyr_punto_utm_5];
lyr_lota_utm_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_tome_utm_2.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_conce_utm_3.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_poligono_utm_4.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'X': 'X', 'Y': 'Y', 'comuna': 'comuna', });
lyr_punto_utm_5.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'X': 'X', 'Y': 'Y', 'comuna': 'comuna', });
lyr_lota_utm_1.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_tome_utm_2.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_conce_utm_3.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_poligono_utm_4.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'comuna': 'TextEdit', });
lyr_punto_utm_5.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'comuna': 'TextEdit', });
lyr_lota_utm_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_tome_utm_2.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_conce_utm_3.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_poligono_utm_4.set('fieldLabels', {'id': 'no label', 'nombre': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'comuna': 'inline label - always visible', });
lyr_punto_utm_5.set('fieldLabels', {'id': 'no label', 'nombre': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'comuna': 'inline label - always visible', });
lyr_punto_utm_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});