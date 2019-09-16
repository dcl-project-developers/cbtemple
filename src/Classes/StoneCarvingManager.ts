import { StoneTabletText } from '../Entities/StoneTabletText';

export class StoneCarvingManager
{
    stone_carvings: {} | null;
    spawned_texts: StoneTabletText[] = [];

    constructor(stone_carvings: {} | null)
    {
      this.stone_carvings = stone_carvings;
    }

    placeAllInScene()
    {
      for(let key in this.stone_carvings){
          let item = this.stone_carvings[key];
          let carving = new StoneTabletText(
            item["header"], item["content"],
            item["position"], item["scale"], item["rotation"]
          );
          this.spawned_texts.push(carving);
      }
    }
}
