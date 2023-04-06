import { Router } from "./router.js";
const router = new Router()

router.add("/","/public/pages/home.html")
router.add("/universe","/public/pages/universe.html")
router.add("/exploration","/public/pages/exploration.html")
router.add(404,"/public/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()