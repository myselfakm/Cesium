var viewer = new Cesium.Viewer('cesiumContainer');
//var geojson =new Cesium.GeoJsonDataSource();

viewer.dataSources.add(Cesium.GeoJsonDataSource.load('../../SampleData/simplestyles.geojson'));
viewer.dataSources.add(Cesium.CzmlDataSource.load('../../SampleData/MultipartVehicle_part1.czml'));

//var czml =new Cesium.CzmlDataSource();
//czml.loadUrl('../../SampleData/JSGeoExample/example.czml');
//viewer.dataSources.add(czml);

