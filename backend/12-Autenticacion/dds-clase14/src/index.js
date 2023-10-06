import express from 'express'
import { router } from './routers/public.js'
import { router_private } from './routers/private.js'
import { sequelize } from './data/db_config.js'

const app = express()
app.use(express.json()) // primer middleware para obtener el body de todos los requests
app.use('/public', router) // segundo middleware para enrutar todas las URLs públicas
app.use('/api', router_private) // segundo middleware para enrutar todas las URLs públicas


app.listen(3000, async()=>{
    console.log('Api Rest en puerto 3000')
    await sequelize.sync(()=>{
        console.log('BD sincronizada!')
    })
})