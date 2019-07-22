import List from './views/list'


// const List = () => {
//     require.ensure(['./views/list.vue']), () => {
//         require('./views/list.vue')
//     }
// };

const routers = [{
    path: '/list',
    name: 'list',
    component: List
},{
    path: '*',
    component:List
}];

export default routers;