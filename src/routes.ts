import { Router } from 'express';
import multer from 'multer';

/* ÁREA DE IMPORTAÇÃO DOS CONTROLLERS */
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/authUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DetailUserController } from './controllers/user/DetailsUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import uploadConfig from './config/multer'
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { ListUnfinishedOrderController } from './controllers/order/ListUnfinishedOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';
import { ListOrderByDateController } from './controllers/order/ListOrderByDateController';
import { FinishAndListController } from './controllers/order/FinishAndListController';


const router = Router()

const upload = multer(uploadConfig.upload('./tmp'))

// router.get('/teste', (req: Request, res: Response) => {
//     return res.json({nome: 'Kaique'})
// })

router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/userinfo', isAuthenticated, new DetailUserController().handle)
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/listcategory', isAuthenticated, new ListCategoryController().handle)
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/deleteorder', isAuthenticated, new RemoveOrderController().handle)
router.post('/order/add', isAuthenticated, new AddItemController().handle)
router.post('/order/send', isAuthenticated, new SendOrderController().handle)
router.delete('/deleteitem', isAuthenticated, new RemoveItemController().handle)
router.get('/listunfinishedorder', isAuthenticated, new ListUnfinishedOrderController().handle)
router.post('/finishorder', isAuthenticated, new FinishOrderController().handle)
router.get('/orderbydate' , isAuthenticated, new ListOrderByDateController().handle)
router.post('/finishandlist', isAuthenticated, new FinishAndListController().handle)

export{router}