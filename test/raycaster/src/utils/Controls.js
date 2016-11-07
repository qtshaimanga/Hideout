import THREE from 'three'

import ORBITControls from 'three-orbit-controls'
const OrbitControls = ORBITControls(THREE);

import FLYControls from 'three-fly-controls'
const FlyControls = FLYControls(THREE);

export default { OrbitControls, FlyControls};
