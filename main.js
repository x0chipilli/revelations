for (let i = 0; i < 10; i++){
  let planet = document.createElement('a-sphere');

  let posX = Math.floor(Math.random()*30) - 15;
  let posZ = Math.floor(Math.random()*30) - 15;

  planet.setAttribute('position', {x: posX, y: 10, z: posZ});
  planet.setAttribute('radius', 2);
  planet.setAttribute('src', '#earth');
  planet.setAttribute('animation', {
    property: 'rotation',
    to: {x:0, y:360, z:0},
    loop: true,
    dur: 10000
  });
  document.querySelector('a-scene').appendChild(planet);
} 