// This .js file is auto-generated by `createCesium()` from VeRoViz
// Display nodes for cesium application

function displayNodes() {
    var pin = new Array;
    pin[0] = viewer.entities.add({
        name : '0',
        parent : nodePins,
        description : 'depot1',
        position : Cesium.Cartesian3.fromDegrees(104.11770629463717, 30.65333050632712),
        billboard : {
            image : pinBuilder.fromText('0', Cesium.Color.YELLOW, 40).toDataURL(),
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
    });

    pin[1] = viewer.entities.add({
        name : '1',
        parent : nodePins,
        description : 'depot2',
        position : Cesium.Cartesian3.fromDegrees(104.0071563469246, 30.68463248579275),
        billboard : {
            image : pinBuilder.fromText('1', Cesium.Color.YELLOW, 40).toDataURL(),
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
    });

    pin[2] = viewer.entities.add({
        name : '2',
        parent : nodePins,
        description : 'home1',
        position : Cesium.Cartesian3.fromDegrees(104.0283455, 30.6355626),
        billboard : {
            image : pinBuilder.fromText('2', Cesium.Color.BLUE, 40).toDataURL(),
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
    });

    pin[3] = viewer.entities.add({
        name : '3',
        parent : nodePins,
        description : 'home2',
        position : Cesium.Cartesian3.fromDegrees(104.0248091, 30.6942013),
        billboard : {
            image : pinBuilder.fromText('3', Cesium.Color.BLUE, 40).toDataURL(),
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
    });

    pin[4] = viewer.entities.add({
        name : '4',
        parent : nodePins,
        description : 'home3',
        position : Cesium.Cartesian3.fromDegrees(104.092412, 30.6967127),
        billboard : {
            image : pinBuilder.fromText('4', Cesium.Color.BLUE, 40).toDataURL(),
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
    });

    pin[5] = viewer.entities.add({
        name : '5',
        parent : nodePins,
        description : 'home4',
        position : Cesium.Cartesian3.fromDegrees(104.063285, 30.6665579),
        billboard : {
            image : pinBuilder.fromText('5', Cesium.Color.BLUE, 40).toDataURL(),
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
    });

}