/* This file is automatically rebuilt by the Cesium build process. */
define(['./defaultValue-94c3e563', './EllipsoidGeometry-cccb040b', './GeometryOffsetAttribute-3e8c299c', './RuntimeError-c581ca93', './Transforms-c9f24aab', './Matrix2-feb45b00', './ComponentDatatype-b1ea011a', './WebGLConstants-7dccdc96', './_commonjsHelpers-3aae1032-f55dc0c4', './combine-761d9c3f', './GeometryAttribute-a247c9b5', './GeometryAttributes-7df9bef6', './IndexDatatype-c4099fe9', './VertexFormat-e46f29d6'], (function (defaultValue, EllipsoidGeometry, GeometryOffsetAttribute, RuntimeError, Transforms, Matrix2, ComponentDatatype, WebGLConstants, _commonjsHelpers3aae1032, combine, GeometryAttribute, GeometryAttributes, IndexDatatype, VertexFormat) { 'use strict';

  function createEllipsoidGeometry(ellipsoidGeometry, offset) {
    if (defaultValue.defined(offset)) {
      ellipsoidGeometry = EllipsoidGeometry.EllipsoidGeometry.unpack(ellipsoidGeometry, offset);
    }
    return EllipsoidGeometry.EllipsoidGeometry.createGeometry(ellipsoidGeometry);
  }

  return createEllipsoidGeometry;

}));
