export default  [{
    name: 'Blaster',
    levels: 3,
    damage: [3,5,7],
    cost: [0, 200, 600],
    sprite: [1,2,3],
    shopSprite: 30,
    sound: 'player-laser', 
    speed: 500,
    rotating: false,
    acceleration: 0,
    reload: 250,
    size: 3,
    description: `Standard issued blaster, it's not much, but it gets the job done.`,
    volume: .6
},
{
    name: 'Wave',
    levels: 3,
    damage: [2.5, 4, 6],
    cost: [300, 500, 750],
    sprite: [5,10,11],
    shopSprite: 35,
    sound: 'player-laser', 
    speed: 800,
    rotating: false,
    acceleration: 0,
    reload: 200,
    size: 3,
    description: `Work has been put in to make this blaster have a wider beam hand fire faster. This comes at the cost of destruction potential.`,
    volume: .4
},
{
    name: 'Rockets',
    levels: 3,
    damage: [7, 15, 20],
    cost: [500, 1000, 1500],
    sprite: [16,17,23],
    shopSprite: 38,
    sound: 'rocket', 
    speed: 200,
    rotating: false,
    acceleration: 20,
    reload: 600,
    size: 3,
    description: `While for the most part these have been left behind for more flexible energy weapons, these 'obsolete' weapons still  pack quite a punch`,
    volume: .32
},
{
    name: 'BuzzSaw',
    levels: 2,
    damage: [30, 40],
    cost: [1000, 2000],
    sprite:[27,26],
    shopSprite: 27,
    sound: 'rocket', 
    speed: 250,
    rotating: true,
    acceleration: 0,
    reload: 1000,
    size: 3,
    description: `This crude weapon is extremely slow, but is capable of immense destruction`,
    volume: .4
},

]