import { WalkPaths } from './WalkPaths';
import { MathUtils } from './MathUtils';

export class World{

  spawnablePets = ["baby-cerberus","baby-cheetah","baby-cyclops", /*"baby-hydra",*/ "baby-kitten","baby-manticore","baby-pegasus","baby-wolf","baby-worm"];
  lever_state: boolean;
  entities = new Object();
  animationClips = new Object();


  spawn(){
    const UTILS_WALKPATHS = new WalkPaths();
    const UTILS_MATH = new MathUtils();
    UTILS_WALKPATHS.generatePaths();

    // AREA
    const area = new Entity();
    area.name = "questarea";
    area.addComponent(new GLTFShape("models/temple_area_3.glb"));
    area.addComponent(new Transform());
    area.getComponent(Transform).rotation = Quaternion.Euler(0,90,0);
    area.getComponent(Transform).position.x = 24;
    area.getComponent(Transform).position.z = 24;
    engine.addEntity(area);
    this.entities['area'] = area;

    // PETS
    this.entities['pets'] = [];
    for(let pet of this.spawnablePets){
      let petindex = this.spawnablePets.indexOf(pet);
      const petentity = new Entity();
      petentity.name = pet;
      petentity.addComponent(new GLTFShape("models/pets/"+pet+".glb"));
      petentity.addComponent(new Transform());
      switch (petindex){
        case 0:
        case 8:
        petentity.getComponent(Transform).position.z = 26;
        if(petindex == 0){
          petentity.getComponent(Transform).position.x = 25;
        }else{
          petentity.getComponent(Transform).position.x = 23;
        }
        break;
        case 1:
        case 7:
        petentity.getComponent(Transform).position.z = 25;
        if(petindex == 1){
          petentity.getComponent(Transform).position.x = 26.2;
          petentity.getComponent(Transform).rotation = Quaternion.Euler(0,45,0);
        }else{
          petentity.getComponent(Transform).position.x = 21.8;
          petentity.getComponent(Transform).rotation = Quaternion.Euler(0,-45,0);
        }
        break;
        case 2:
        case 6:
        petentity.getComponent(Transform).position.z = 23;
        if(petindex == 2){
          petentity.getComponent(Transform).position.x = 26.2;
          petentity.getComponent(Transform).rotation = Quaternion.Euler(0,135,0);
        }else{
          petentity.getComponent(Transform).position.x = 21.8;
          petentity.getComponent(Transform).rotation = Quaternion.Euler(0,-135,0);
        }
        break;
        case 3:
        case 5:
        petentity.getComponent(Transform).position.z = 21.5;
        petentity.getComponent(Transform).rotation = Quaternion.Euler(0,180,0);
        if(petindex == 3){
          petentity.getComponent(Transform).position.x = 25;
        }else{
          petentity.getComponent(Transform).position.x = 23;
        }
        break;
        case 4:
        petentity.getComponent(Transform).rotation = Quaternion.Euler(0,180,0);
        petentity.getComponent(Transform).position.z = 19.5;
        petentity.getComponent(Transform).position.x = 24;
        break;
      }
      petentity.getComponent(Transform).position.y = 0.6;
      petentity.addComponent(new Animator());
      petentity.getComponent(Animator).addClip(new AnimationState("idle_"+pet.split('-')[1]));
      petentity.getComponent(Animator).addClip(new AnimationState("walk_"+pet.split('-')[1]));
      const petIdleAnimation = petentity.getComponent(Animator).getClip("idle_"+pet.split('-')[1]);
      const petWalkAnimation = petentity.getComponent(Animator).getClip("walk_"+pet.split('-')[1]);
      petWalkAnimation.play();
      UTILS_WALKPATHS.patrol(petentity,petindex,true,5,petIdleAnimation,petWalkAnimation);
      engine.addEntity(petentity);
      this.animationClips['idle_'+pet.split('-')[1]] = petIdleAnimation;
      this.animationClips['walk_'+pet.split('-')[1]] = petWalkAnimation;
      this.entities['pets'].push(petentity);
    }

    //LEVER
    const lever_bottom = new Entity();
    lever_bottom.name = "lever_bottom";
    lever_bottom.addComponent(new GLTFShape("models/lever_bottom.glb"));
    lever_bottom.addComponent(new Transform());
    lever_bottom.getComponent(Transform).position.x = 24;
    lever_bottom.getComponent(Transform).position.z = 26;
    lever_bottom.getComponent(Transform).position.y = 0.6;
    lever_bottom.getComponent(Transform).rotation = Quaternion.Euler(0,0,0);
    lever_bottom.getComponent(Transform).scale.x = 1.5;
    lever_bottom.getComponent(Transform).scale.y = 1.5;
    lever_bottom.getComponent(Transform).scale.z = 1.5;
    engine.addEntity(lever_bottom);
    this.entities['lever_bottom'] = lever_bottom;
    const lever_top = new Entity();
    lever_top.name = "lever_top";
    lever_top.addComponent(new GLTFShape("models/lever_top.glb"));
    lever_top.addComponent(new Transform());
    lever_top.getComponent(Transform).position.x = 24;
    lever_top.getComponent(Transform).position.z = 26;
    lever_top.getComponent(Transform).position.y = 0.6;
    lever_top.getComponent(Transform).scale.x = 1.5;
    lever_top.getComponent(Transform).scale.y = 1.5;
    lever_top.getComponent(Transform).scale.z = 1.5;
    engine.addEntity(lever_top);
    lever_top.addComponent(new OnClick(e =>{
      if (this.lever_state){
        lever_top.getComponent(Transform).rotation = Quaternion.Euler(0,0,0);
        this.animationClips['chainbreaker_turn'].stop();
        this.lever_state = false;
      }else{
        lever_top.getComponent(Transform).rotation = Quaternion.Euler(0,0,45);
        this.animationClips['chainbreaker_turn'].play();
        this.lever_state = true;
      }
    }))
    this.entities['lever_top'] = lever_top;
    this.lever_state = false;


    //PLATFORM
    const platform = new Entity();
    platform.name = "platform"
    platform.addComponent(new GLTFShape("models/platform.glb"));
    platform.addComponent(new Transform());
    platform.getComponent(Transform).position.x = 24;
    platform.getComponent(Transform).position.z = 24;
    platform.getComponent(Transform).position.y = 0.6;
    platform.getComponent(Transform).rotation = Quaternion.Euler(0,22.5,0);
    platform.getComponent(Transform).scale.x = 3;
    platform.getComponent(Transform).scale.y = 3;
    platform.getComponent(Transform).scale.z = 3;
    engine.addEntity(platform);
    this.entities['platform'] = platform;

    //CHAINBREAKER
    const chainbreaker = new Entity();
    chainbreaker.name = "chainbreaker"
    chainbreaker.addComponent(new GLTFShape("models/chainbreaker.glb"));
    chainbreaker.addComponent(new Transform());
    chainbreaker.getComponent(Transform).position.x = 24;
    chainbreaker.getComponent(Transform).position.z = 24;
    chainbreaker.getComponent(Transform).position.y = 2;
    chainbreaker.addComponent(new Animator());
    chainbreaker.getComponent(Animator).addClip(new AnimationState("turn"));
    const chainbreakerTurnAnimation = chainbreaker.getComponent(Animator).getClip(("turn"));
    // chainbreakerTurnAnimation.play()
    engine.addEntity(chainbreaker);
    this.entities['chainbreaker'] = chainbreaker;
    this.animationClips['chainbreaker_turn'] = chainbreakerTurnAnimation;
  }
}
