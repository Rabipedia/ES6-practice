const family = [
    {id: 1, name: 'amma'},
    {id: 2, name: 'abba'},
    {id: 3, name: 'bhaia'},
    {id: 4, name: 'bhabi'},
    {id: 5, name: 'apu'},
    {id: 6, name: 'rabi'},
    {id: 7, name: 'lamiya'},
    {id: 8, name: 'nadia'},
    {id: 9, name: 'arowa'},
    {id: 10, name: 'unayza'}
    
];

const names = family.map(s => s.name);
const bigger = family.filter(s => s.id < 8);
const leader = family.find(s => s.id < 3);