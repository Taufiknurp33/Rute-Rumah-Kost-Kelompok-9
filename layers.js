var wms_layers = [];


        var lyr_ESRIWorldImagery_0 = new ol.layer.Tile({
            'title': 'ESRI World Imagery ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_TitikKoordinatKostRumahKelompok9_1 = new ol.format.GeoJSON();
var features_TitikKoordinatKostRumahKelompok9_1 = format_TitikKoordinatKostRumahKelompok9_1.readFeatures(json_TitikKoordinatKostRumahKelompok9_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikKoordinatKostRumahKelompok9_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikKoordinatKostRumahKelompok9_1.addFeatures(features_TitikKoordinatKostRumahKelompok9_1);
var lyr_TitikKoordinatKostRumahKelompok9_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikKoordinatKostRumahKelompok9_1, 
                style: style_TitikKoordinatKostRumahKelompok9_1,
                popuplayertitle: "Titik Koordinat Kost Rumah Kelompok 9",
                interactive: true,
                title: '<img src="styles/legend/TitikKoordinatKostRumahKelompok9_1.png" /> Titik Koordinat Kost Rumah Kelompok 9'
            });
var format_RuteKakTiska_Zalikha_2 = new ol.format.GeoJSON();
var features_RuteKakTiska_Zalikha_2 = format_RuteKakTiska_Zalikha_2.readFeatures(json_RuteKakTiska_Zalikha_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakTiska_Zalikha_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakTiska_Zalikha_2.addFeatures(features_RuteKakTiska_Zalikha_2);
var lyr_RuteKakTiska_Zalikha_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakTiska_Zalikha_2, 
                style: style_RuteKakTiska_Zalikha_2,
                popuplayertitle: "Rute Kak Tiska_Zalikha",
                interactive: true,
                title: '<img src="styles/legend/RuteKakTiska_Zalikha_2.png" /> Rute Kak Tiska_Zalikha'
            });
var format_RuteKakTiska_Zabran_3 = new ol.format.GeoJSON();
var features_RuteKakTiska_Zabran_3 = format_RuteKakTiska_Zabran_3.readFeatures(json_RuteKakTiska_Zabran_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakTiska_Zabran_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakTiska_Zabran_3.addFeatures(features_RuteKakTiska_Zabran_3);
var lyr_RuteKakTiska_Zabran_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakTiska_Zabran_3, 
                style: style_RuteKakTiska_Zabran_3,
                popuplayertitle: "Rute Kak Tiska_Zabran",
                interactive: true,
                title: '<img src="styles/legend/RuteKakTiska_Zabran_3.png" /> Rute Kak Tiska_Zabran'
            });
var format_RuteKakTiska_Soleh_4 = new ol.format.GeoJSON();
var features_RuteKakTiska_Soleh_4 = format_RuteKakTiska_Soleh_4.readFeatures(json_RuteKakTiska_Soleh_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakTiska_Soleh_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakTiska_Soleh_4.addFeatures(features_RuteKakTiska_Soleh_4);
var lyr_RuteKakTiska_Soleh_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakTiska_Soleh_4, 
                style: style_RuteKakTiska_Soleh_4,
                popuplayertitle: "Rute Kak Tiska_Soleh",
                interactive: true,
                title: '<img src="styles/legend/RuteKakTiska_Soleh_4.png" /> Rute Kak Tiska_Soleh'
            });
var format_RuteKakTiska_Selfi_5 = new ol.format.GeoJSON();
var features_RuteKakTiska_Selfi_5 = format_RuteKakTiska_Selfi_5.readFeatures(json_RuteKakTiska_Selfi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakTiska_Selfi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakTiska_Selfi_5.addFeatures(features_RuteKakTiska_Selfi_5);
var lyr_RuteKakTiska_Selfi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakTiska_Selfi_5, 
                style: style_RuteKakTiska_Selfi_5,
                popuplayertitle: "Rute Kak Tiska_Selfi",
                interactive: true,
                title: '<img src="styles/legend/RuteKakTiska_Selfi_5.png" /> Rute Kak Tiska_Selfi'
            });
var format_RuteKakTiska_Natan_6 = new ol.format.GeoJSON();
var features_RuteKakTiska_Natan_6 = format_RuteKakTiska_Natan_6.readFeatures(json_RuteKakTiska_Natan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakTiska_Natan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakTiska_Natan_6.addFeatures(features_RuteKakTiska_Natan_6);
var lyr_RuteKakTiska_Natan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakTiska_Natan_6, 
                style: style_RuteKakTiska_Natan_6,
                popuplayertitle: "Rute Kak Tiska_Natan",
                interactive: true,
                title: '<img src="styles/legend/RuteKakTiska_Natan_6.png" /> Rute Kak Tiska_Natan'
            });
var format_RuteKakTiska_MasFajar_7 = new ol.format.GeoJSON();
var features_RuteKakTiska_MasFajar_7 = format_RuteKakTiska_MasFajar_7.readFeatures(json_RuteKakTiska_MasFajar_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakTiska_MasFajar_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakTiska_MasFajar_7.addFeatures(features_RuteKakTiska_MasFajar_7);
var lyr_RuteKakTiska_MasFajar_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakTiska_MasFajar_7, 
                style: style_RuteKakTiska_MasFajar_7,
                popuplayertitle: "Rute Kak Tiska_Mas Fajar",
                interactive: true,
                title: '<img src="styles/legend/RuteKakTiska_MasFajar_7.png" /> Rute Kak Tiska_Mas Fajar'
            });
var format_RuteKakTiska_Jody_8 = new ol.format.GeoJSON();
var features_RuteKakTiska_Jody_8 = format_RuteKakTiska_Jody_8.readFeatures(json_RuteKakTiska_Jody_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakTiska_Jody_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakTiska_Jody_8.addFeatures(features_RuteKakTiska_Jody_8);
var lyr_RuteKakTiska_Jody_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakTiska_Jody_8, 
                style: style_RuteKakTiska_Jody_8,
                popuplayertitle: "Rute Kak Tiska_Jody",
                interactive: true,
                title: '<img src="styles/legend/RuteKakTiska_Jody_8.png" /> Rute Kak Tiska_Jody'
            });
var format_RuteKakTiska_Ermi_9 = new ol.format.GeoJSON();
var features_RuteKakTiska_Ermi_9 = format_RuteKakTiska_Ermi_9.readFeatures(json_RuteKakTiska_Ermi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakTiska_Ermi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakTiska_Ermi_9.addFeatures(features_RuteKakTiska_Ermi_9);
var lyr_RuteKakTiska_Ermi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakTiska_Ermi_9, 
                style: style_RuteKakTiska_Ermi_9,
                popuplayertitle: "Rute Kak Tiska_Ermi",
                interactive: true,
                title: '<img src="styles/legend/RuteKakTiska_Ermi_9.png" /> Rute Kak Tiska_Ermi'
            });
var format_RuteKakTiska_Callista_10 = new ol.format.GeoJSON();
var features_RuteKakTiska_Callista_10 = format_RuteKakTiska_Callista_10.readFeatures(json_RuteKakTiska_Callista_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakTiska_Callista_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakTiska_Callista_10.addFeatures(features_RuteKakTiska_Callista_10);
var lyr_RuteKakTiska_Callista_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakTiska_Callista_10, 
                style: style_RuteKakTiska_Callista_10,
                popuplayertitle: "Rute Kak Tiska_Callista",
                interactive: true,
                title: '<img src="styles/legend/RuteKakTiska_Callista_10.png" /> Rute Kak Tiska_Callista'
            });
var format_RuteKakGading_Zalikha_11 = new ol.format.GeoJSON();
var features_RuteKakGading_Zalikha_11 = format_RuteKakGading_Zalikha_11.readFeatures(json_RuteKakGading_Zalikha_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakGading_Zalikha_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakGading_Zalikha_11.addFeatures(features_RuteKakGading_Zalikha_11);
var lyr_RuteKakGading_Zalikha_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakGading_Zalikha_11, 
                style: style_RuteKakGading_Zalikha_11,
                popuplayertitle: "Rute Kak Gading_Zalikha",
                interactive: true,
                title: '<img src="styles/legend/RuteKakGading_Zalikha_11.png" /> Rute Kak Gading_Zalikha'
            });
var format_RuteKakGading_Zabran_12 = new ol.format.GeoJSON();
var features_RuteKakGading_Zabran_12 = format_RuteKakGading_Zabran_12.readFeatures(json_RuteKakGading_Zabran_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakGading_Zabran_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakGading_Zabran_12.addFeatures(features_RuteKakGading_Zabran_12);
var lyr_RuteKakGading_Zabran_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakGading_Zabran_12, 
                style: style_RuteKakGading_Zabran_12,
                popuplayertitle: "Rute Kak Gading_Zabran",
                interactive: true,
                title: '<img src="styles/legend/RuteKakGading_Zabran_12.png" /> Rute Kak Gading_Zabran'
            });
var format_RuteKakTiska_Taufik_13 = new ol.format.GeoJSON();
var features_RuteKakTiska_Taufik_13 = format_RuteKakTiska_Taufik_13.readFeatures(json_RuteKakTiska_Taufik_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakTiska_Taufik_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakTiska_Taufik_13.addFeatures(features_RuteKakTiska_Taufik_13);
var lyr_RuteKakTiska_Taufik_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakTiska_Taufik_13, 
                style: style_RuteKakTiska_Taufik_13,
                popuplayertitle: "Rute Kak Tiska_Taufik",
                interactive: true,
                title: '<img src="styles/legend/RuteKakTiska_Taufik_13.png" /> Rute Kak Tiska_Taufik'
            });
var format_RuteKakGading_Taufik_14 = new ol.format.GeoJSON();
var features_RuteKakGading_Taufik_14 = format_RuteKakGading_Taufik_14.readFeatures(json_RuteKakGading_Taufik_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakGading_Taufik_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakGading_Taufik_14.addFeatures(features_RuteKakGading_Taufik_14);
var lyr_RuteKakGading_Taufik_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakGading_Taufik_14, 
                style: style_RuteKakGading_Taufik_14,
                popuplayertitle: "Rute Kak Gading_Taufik",
                interactive: true,
                title: '<img src="styles/legend/RuteKakGading_Taufik_14.png" /> Rute Kak Gading_Taufik'
            });
var format_RuteKakGading_Soleh_15 = new ol.format.GeoJSON();
var features_RuteKakGading_Soleh_15 = format_RuteKakGading_Soleh_15.readFeatures(json_RuteKakGading_Soleh_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakGading_Soleh_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakGading_Soleh_15.addFeatures(features_RuteKakGading_Soleh_15);
var lyr_RuteKakGading_Soleh_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakGading_Soleh_15, 
                style: style_RuteKakGading_Soleh_15,
                popuplayertitle: "Rute Kak Gading_Soleh",
                interactive: true,
                title: '<img src="styles/legend/RuteKakGading_Soleh_15.png" /> Rute Kak Gading_Soleh'
            });
var format_RuteKakGading_Selfi_16 = new ol.format.GeoJSON();
var features_RuteKakGading_Selfi_16 = format_RuteKakGading_Selfi_16.readFeatures(json_RuteKakGading_Selfi_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakGading_Selfi_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakGading_Selfi_16.addFeatures(features_RuteKakGading_Selfi_16);
var lyr_RuteKakGading_Selfi_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakGading_Selfi_16, 
                style: style_RuteKakGading_Selfi_16,
                popuplayertitle: "Rute Kak Gading_Selfi",
                interactive: true,
                title: '<img src="styles/legend/RuteKakGading_Selfi_16.png" /> Rute Kak Gading_Selfi'
            });
var format_RuteKakGading_Natan_17 = new ol.format.GeoJSON();
var features_RuteKakGading_Natan_17 = format_RuteKakGading_Natan_17.readFeatures(json_RuteKakGading_Natan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakGading_Natan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakGading_Natan_17.addFeatures(features_RuteKakGading_Natan_17);
var lyr_RuteKakGading_Natan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakGading_Natan_17, 
                style: style_RuteKakGading_Natan_17,
                popuplayertitle: "Rute Kak Gading_Natan",
                interactive: true,
                title: '<img src="styles/legend/RuteKakGading_Natan_17.png" /> Rute Kak Gading_Natan'
            });
var format_RuteKakGading_MasFajar_18 = new ol.format.GeoJSON();
var features_RuteKakGading_MasFajar_18 = format_RuteKakGading_MasFajar_18.readFeatures(json_RuteKakGading_MasFajar_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakGading_MasFajar_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakGading_MasFajar_18.addFeatures(features_RuteKakGading_MasFajar_18);
var lyr_RuteKakGading_MasFajar_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakGading_MasFajar_18, 
                style: style_RuteKakGading_MasFajar_18,
                popuplayertitle: "Rute Kak Gading_Mas Fajar",
                interactive: true,
                title: '<img src="styles/legend/RuteKakGading_MasFajar_18.png" /> Rute Kak Gading_Mas Fajar'
            });
var format_RuteKakGading_Jody_19 = new ol.format.GeoJSON();
var features_RuteKakGading_Jody_19 = format_RuteKakGading_Jody_19.readFeatures(json_RuteKakGading_Jody_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakGading_Jody_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakGading_Jody_19.addFeatures(features_RuteKakGading_Jody_19);
var lyr_RuteKakGading_Jody_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakGading_Jody_19, 
                style: style_RuteKakGading_Jody_19,
                popuplayertitle: "Rute Kak Gading_Jody",
                interactive: true,
                title: '<img src="styles/legend/RuteKakGading_Jody_19.png" /> Rute Kak Gading_Jody'
            });
var format_RuteKakGading_Ermi_20 = new ol.format.GeoJSON();
var features_RuteKakGading_Ermi_20 = format_RuteKakGading_Ermi_20.readFeatures(json_RuteKakGading_Ermi_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakGading_Ermi_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakGading_Ermi_20.addFeatures(features_RuteKakGading_Ermi_20);
var lyr_RuteKakGading_Ermi_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakGading_Ermi_20, 
                style: style_RuteKakGading_Ermi_20,
                popuplayertitle: "Rute Kak Gading_Ermi",
                interactive: true,
                title: '<img src="styles/legend/RuteKakGading_Ermi_20.png" /> Rute Kak Gading_Ermi'
            });
var format_RuteKakGading_Callista_21 = new ol.format.GeoJSON();
var features_RuteKakGading_Callista_21 = format_RuteKakGading_Callista_21.readFeatures(json_RuteKakGading_Callista_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteKakGading_Callista_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteKakGading_Callista_21.addFeatures(features_RuteKakGading_Callista_21);
var lyr_RuteKakGading_Callista_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteKakGading_Callista_21, 
                style: style_RuteKakGading_Callista_21,
                popuplayertitle: "Rute Kak Gading_Callista",
                interactive: true,
                title: '<img src="styles/legend/RuteKakGading_Callista_21.png" /> Rute Kak Gading_Callista'
            });

lyr_ESRIWorldImagery_0.setVisible(true);lyr_TitikKoordinatKostRumahKelompok9_1.setVisible(true);lyr_RuteKakTiska_Zalikha_2.setVisible(true);lyr_RuteKakTiska_Zabran_3.setVisible(true);lyr_RuteKakTiska_Soleh_4.setVisible(true);lyr_RuteKakTiska_Selfi_5.setVisible(true);lyr_RuteKakTiska_Natan_6.setVisible(true);lyr_RuteKakTiska_MasFajar_7.setVisible(true);lyr_RuteKakTiska_Jody_8.setVisible(true);lyr_RuteKakTiska_Ermi_9.setVisible(true);lyr_RuteKakTiska_Callista_10.setVisible(true);lyr_RuteKakGading_Zalikha_11.setVisible(true);lyr_RuteKakGading_Zabran_12.setVisible(true);lyr_RuteKakTiska_Taufik_13.setVisible(true);lyr_RuteKakGading_Taufik_14.setVisible(true);lyr_RuteKakGading_Soleh_15.setVisible(true);lyr_RuteKakGading_Selfi_16.setVisible(true);lyr_RuteKakGading_Natan_17.setVisible(true);lyr_RuteKakGading_MasFajar_18.setVisible(true);lyr_RuteKakGading_Jody_19.setVisible(true);lyr_RuteKakGading_Ermi_20.setVisible(true);lyr_RuteKakGading_Callista_21.setVisible(true);
var layersList = [lyr_ESRIWorldImagery_0,lyr_TitikKoordinatKostRumahKelompok9_1,lyr_RuteKakTiska_Zalikha_2,lyr_RuteKakTiska_Zabran_3,lyr_RuteKakTiska_Soleh_4,lyr_RuteKakTiska_Selfi_5,lyr_RuteKakTiska_Natan_6,lyr_RuteKakTiska_MasFajar_7,lyr_RuteKakTiska_Jody_8,lyr_RuteKakTiska_Ermi_9,lyr_RuteKakTiska_Callista_10,lyr_RuteKakGading_Zalikha_11,lyr_RuteKakGading_Zabran_12,lyr_RuteKakTiska_Taufik_13,lyr_RuteKakGading_Taufik_14,lyr_RuteKakGading_Soleh_15,lyr_RuteKakGading_Selfi_16,lyr_RuteKakGading_Natan_17,lyr_RuteKakGading_MasFajar_18,lyr_RuteKakGading_Jody_19,lyr_RuteKakGading_Ermi_20,lyr_RuteKakGading_Callista_21];
lyr_TitikKoordinatKostRumahKelompok9_1.set('fieldAliases', {'Lokasi': 'Lokasi', 'X': 'X', 'Y': 'Y', });
lyr_RuteKakTiska_Zalikha_2.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakTiska_Zabran_3.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakTiska_Soleh_4.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakTiska_Selfi_5.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakTiska_Natan_6.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakTiska_MasFajar_7.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakTiska_Jody_8.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakTiska_Ermi_9.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakTiska_Callista_10.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakGading_Zalikha_11.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakGading_Zabran_12.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakTiska_Taufik_13.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakGading_Taufik_14.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakGading_Soleh_15.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakGading_Selfi_16.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakGading_Natan_17.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakGading_MasFajar_18.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakGading_Jody_19.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakGading_Ermi_20.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteKakGading_Callista_21.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_TitikKoordinatKostRumahKelompok9_1.set('fieldImages', {'Lokasi': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_RuteKakTiska_Zalikha_2.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakTiska_Zabran_3.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakTiska_Soleh_4.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakTiska_Selfi_5.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakTiska_Natan_6.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakTiska_MasFajar_7.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakTiska_Jody_8.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakTiska_Ermi_9.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakTiska_Callista_10.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakGading_Zalikha_11.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakGading_Zabran_12.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakTiska_Taufik_13.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakGading_Taufik_14.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakGading_Soleh_15.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakGading_Selfi_16.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakGading_Natan_17.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakGading_MasFajar_18.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakGading_Jody_19.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakGading_Ermi_20.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteKakGading_Callista_21.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_TitikKoordinatKostRumahKelompok9_1.set('fieldLabels', {'Lokasi': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', });
lyr_RuteKakTiska_Zalikha_2.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakTiska_Zabran_3.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakTiska_Soleh_4.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakTiska_Selfi_5.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakTiska_Natan_6.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakTiska_MasFajar_7.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakTiska_Jody_8.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakTiska_Ermi_9.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakTiska_Callista_10.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakGading_Zalikha_11.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakGading_Zabran_12.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakTiska_Taufik_13.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakGading_Taufik_14.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakGading_Soleh_15.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakGading_Selfi_16.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakGading_Natan_17.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakGading_MasFajar_18.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakGading_Jody_19.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakGading_Ermi_20.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakGading_Callista_21.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'inline label - always visible', 'TO_ID': 'inline label - always visible', });
lyr_RuteKakGading_Callista_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});