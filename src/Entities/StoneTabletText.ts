export class StoneTabletText
{
    wrapper: Entity;
    header: string;
    text: string;
    position: Vector3;
    scale: Vector3;
    rotation: Quaternion;
    comp_headerShape: TextShape;
    comp_textShape: TextShape;
    font_family: string = "Times, Times New Roman, serif";
    header_color: Color3 = new Color3(150/255, 110/255, 45/255);
    text_color: Color3 = new Color3(130/255, 90/255, 35/255);

    constructor(header:string, text: string, position: Vector3, scale: Vector3, rotation: Quaternion){
      this.header = header;
      this.text = text;
      this.position = position,
      this.scale = scale;
      this.rotation = rotation;

      this.wrapper = new Entity();
      this.wrapper.addComponent(
        new Transform({
            position: this.position,
            scale: this.scale,
            rotation: this.rotation
        })
      );

      let headerEnt = new Entity();
      this.comp_headerShape = new TextShape(this.header);
      this.comp_headerShape.fontSize = 7;
      this.comp_headerShape.fontWeight = "bolder";
      this.comp_headerShape.vTextAlign = "top";
      this.comp_headerShape.color = this.header_color;

      headerEnt.addComponent(this.comp_headerShape);
      headerEnt.addComponent(
        new Transform({
            position: new Vector3(0, 2.25, 0)
        })
      );

      let textEnt = new Entity();
      this.comp_textShape = new TextShape(this.text);
      this.comp_textShape.fontSize = 5;
      this.comp_textShape.vTextAlign = "top";
      this.comp_textShape.color = this.text_color;

      textEnt.addComponent(this.comp_textShape);
      textEnt.addComponent(
        new Transform({
            position: new Vector3(0, 0, 0)
        })
      );

      headerEnt.setParent(this.wrapper);
      textEnt.setParent(this.wrapper);

      engine.addEntity(this.wrapper);
    }
}
