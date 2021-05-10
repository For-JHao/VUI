import Vue from 'vue';
import Jhbutton from './button'
import Jhdialog from './dialog'
import Jhinput from './input'
import Jhswitch from './switch'
import Jhradio from './radio'
import JhradioGroup from './radio-group'

import  './font/iconfont.css'

const components=[
    Jhbutton,
    Jhdialog,
    Jhinput,
    Jhswitch,
    Jhradio,
    JhradioGroup
];

 const install=function(){
    components.forEach((com_name)=>{
    Vue.component(com_name.name,com_name)
})
}

export default install
