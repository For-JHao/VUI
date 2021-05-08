import Vue from 'vue';
import Jhbutton from './button'
import Jhdialog from './dialog'
import Jhinput from './input'
import Jhswitch from './switch'

import  './font/iconfont.css'

const components=[
    Jhbutton,
    Jhdialog,
    Jhinput,
    Jhswitch
];

 const install=function(){
    components.forEach((com_name)=>{
    Vue.component(com_name.name,com_name)
})
}

export default install
