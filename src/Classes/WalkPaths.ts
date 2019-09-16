import utils from "../../node_modules/decentraland-ecs-utils/index"
import { MathUtils } from './MathUtils'

export class WalkPaths{
  paths = [];
  UTILS_MATH = new MathUtils();

  //TODO: Don't do it with a function
  //TODO: Add startPosition
  generatePaths(){
    let path_a = [];
    let path_b = [];
    let path_c = [];
    let path_d = [];
    let path_e = [];
    let path_f = [];
    let path_g = [];
    let path_h = [];
    let path_i = [];

    path_a.push(new Vector3(23,0.6,12));
    path_a.push(new Vector3(10,0.6,11));

    path_b.push(new Vector3(20,0.6,15));
    path_b.push(new Vector3(10,0.6,20));

    path_c.push(new Vector3(23,0.6,29));
    path_c.push(new Vector3(8,0.6,37));

    path_d.push(new Vector3(22,0.6,40));
    path_d.push(new Vector3(19,0.6,29));

    path_e.push(new Vector3(24,0.6,28));
    path_e.push(new Vector3(23,0.6,37));

    path_f.push(new Vector3(35,0.6,39));
    path_f.push(new Vector3(24,0.6,39));

    path_g.push(new Vector3(39,0.6,25));
    path_g.push(new Vector3(26,0.6,35));

    path_h.push(new Vector3(35,0.6,20));
    path_h.push(new Vector3(26,0.6,14));

    path_i.push(new Vector3(40,0.6,12));
    path_i.push(new Vector3(25,0.6,18));
    this.paths.push(path_a,path_b,path_c,path_d,path_e,path_f,path_g,path_h,path_i);
  }

  getRandomPath(){
    return this.paths[this.UTILS_MATH.getRandomInt(this.paths.length)];
  }

  getSpecificPath(number){
    return this.paths[number];
  }

  patrol(entity,number,normal,walktime,idleAnimation,walkAnimation){
    let path = this.getSpecificPath(number);

    walkAnimation.play();
    idleAnimation.stop();
    if (normal){
      entity.getComponent(Transform).lookAt(path[1]);
      entity.addComponent(new utils.MoveTransformComponent(path[0], path[1], walktime, () =>{
        walkAnimation.stop();
        idleAnimation.play();
        let that = this;
        setTimeout(()=>{that.patrol(entity,number,false,walktime,idleAnimation,walkAnimation)},  this.UTILS_MATH.getRandomInt(10000));
      }))
    }else{
      entity.getComponent(Transform).lookAt(path[0]);
      entity.addComponent(new utils.MoveTransformComponent(path[1], path[0], walktime, () =>{
        walkAnimation.stop();
        idleAnimation.play();
        let that = this;
        setTimeout(()=>{that.patrol(entity,number,true,walktime,idleAnimation,walkAnimation)},  this.UTILS_MATH.getRandomInt(10000));

      }))
    }
  }
  
}
