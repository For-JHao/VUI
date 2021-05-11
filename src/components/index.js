import Vue from 'vue';
import Jhbutton from './button'
import Jhdialog from './dialog'
import Jhinput from './input'
import Jhswitch from './switch'
import Jhradio from './radio'
import JhradioGroup from './radio-group'
import Jhcheckbox from './checkbox'
import JhcheckboxGroup from './checkbox-group'
import Jhform from './form'
import JhformItem from './form-item'

import  './font/iconfont.css'


const components=[
    Jhbutton,
    Jhdialog,
    Jhinput,
    Jhswitch,
    Jhradio,
    JhradioGroup,
    Jhcheckbox,
    JhcheckboxGroup,
    Jhform,
    JhformItem
];

 const install=function(Vue){
    components.forEach((com_name)=>{
    Vue.component(com_name.name,com_name)
})
}

//如果在Vue环境直接引入插件文件，进行自动注册
if(typeof Window!=undefined&&window.Vue)
    install(window.Vue)

export default install
