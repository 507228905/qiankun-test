import qiankunStart from './qiankunStart'
const registerAppStart=()=>{
    let app =[
         {
            name: 'sub-vue',
            entry: 'http://localhost:10000/',
            container: "#subapp-viewport",
            activeRule: '/sub-vue',
            props:{
                routerBase:'/sub-vue'
            }
        },
        {
            name: 'sub-react',
            entry: 'http://localhost:3000',
            container: "#subapp-viewport",
            activeRule: '/sub-react',
            props:{
                routerBase:'/sub-react'
            }
        }
    
    ]
        
        
    qiankunStart(app);
}
export default registerAppStart;