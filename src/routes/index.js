//Contiene los routers a nuestros endpoints

const {Router} = require('express')

//Importamos la configuracion de nuestras rutas

const productRouter = require('./product.router.js');  	//en userRouter viene toda la configuración de nuestras rutas de products.
const cartRouter = require('./cart.router.js');
const viewRouter = require('./views.router.js');    

	
const router = Router()
	

router.use('/api/products', productRouter)	                        //api es por convención
router.use('/api/carts', cartRouter)
router.use('/', viewRouter)											//router de views no llevará api


router.use('/', (req, res)=>{
		res.send('Hola mundo')
})




module.exports = router		//Este archivo lo importaremos en  server.js
