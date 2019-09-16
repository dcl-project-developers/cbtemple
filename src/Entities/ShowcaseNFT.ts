export class ShowcaseNFT
{
    entity: Entity;
    shape: NFTShape;
    contract: string;
    token_id: number;
    position: Vector3;
    scale: Vector3;
    rotation: Quaternion;

    constructor(contract: string, token_id: number, position: Vector3, scale: Vector3, rotation: Quaternion){
      this.contract = contract;
      this.token_id = token_id;
      this.position = position;
      this.scale = scale;
      this.rotation = rotation;

      this.spawn();
    }

    spawn(){
        this.entity = new Entity();
        this.shape = new NFTShape('ethereum://' + this.contract + "/" + this.token_id + "/");
        this.entity.addComponent(
          new Transform({
              position: this.position,
              scale: this.scale,
              rotation: this.rotation
          })
      )

        this.entity.addComponent(this.shape);
        engine.addEntity(this.entity);
    }
}
