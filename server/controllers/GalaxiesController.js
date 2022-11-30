import { dbContext } from '../DbContext';
import { BaseController } from '../utils/BaseController.js';
import { galaxiesService, GalaxiesService } from '../services/GalaxiesService.js'


export class GalaxiesController extends BaseController {
constructor(){
    super('api/galaxy')
    this.router
    .get('', this.getAllGalaxies)

}

async getAllGalaxies(req, res, next) {
try {
    const galaxies = await galaxiesService.getAllGalaxies()
 return res.send()
} catch (error) {
 next(error)
}
}

// async create (req, res, next) {
// try {
//     req.body.galaxyId = req.userInfo.id
//  return res.send()
// } catch (error) {
//  next(error)
// }
// }
}