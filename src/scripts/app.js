

import Router from "./utils/router";
import homeController from "./controllers/home";
import mainController from "./controllers/main";
import classifyController from "./controllers/classify";
import memberController from "./controllers/member";
import cartController from "./controllers/cart";
import mineController from "./controllers/mine";
import searchController from "./controllers/search";
import searchListController from "./controllers/searchCon";
import locationController from "./controllers/location";
homeController.render();
const router = new Router();
router.init();  
router.route("#main",mainController.render);
router.route("#classify",classifyController.render);
router.route("#member",memberController.render);
router.route("#cart",cartController.render);
router.route("#mine",mineController.render);
router.route("#search",searchController.render);
router.route("#searchCon",searchListController.render);
locationController.render();

