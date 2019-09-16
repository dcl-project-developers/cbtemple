import * as EthConnect from '../../node_modules/eth-connect/esm';
import { getUserAccount } from '@decentraland/EthereumController
import { getProvider } from '@decentraland/web3-provider';
import { ABIManager } from "./ABIManager";
import { GUEST_BOOK_ADR } from "../Settings/contractAddresses";
import { GUEST_BOOK_ABI } from "../Settings/abis";

export class GuestBook
{
    bookEntity: Entity;
    bookPosition: Vector3 = Vector3.Zero();
    bookScale: Vector3 = Vector3.Zero();
    bookRotation: Quaternion = Quaternion.Zero();
    counterEntity: Entity;
    counterPosition: Vector3;
    counterScale: Vector3;
    counterRotation: Quaternion;

    constructor(bookPosition: Vector3, bookScale: Vector3, bookRotation: Quaternion, bookOnClick: Function, counterPosition: Vector3, counterScale: Vector3, counterRotation: Quaternion)
    {
        this.bookPosition = bookPosition;
        this.bookScale = bookScale;
        this.bookRotation = bookRotation;

        this.counterPosition = counterPosition;
        this.counterScale = counterScale;
        this.counterRotation = counterRotation;

        this.spawnBook();
        this.bookEntity.addComponent(
          new OnClick(() => {
              bookOnClick();
          })
        );

        this.spawnCounter();
    }

    spawnBook()
    {
        this.bookEntity = new Entity();
        let glb = new GLTFShape("models/guest_book.glb");
        this.bookEntity.addComponent(glb);
        this.bookEntity.addComponent(
          new Transform({
              position: this.bookPosition,
              scale: this.bookScale,
              rotation: this.bookRotation
          })
        );

        engine.addEntity(this.bookEntity);
    }

    spawnCounter()
    {
        this.counterEntity = new Entity();
        this.counterEntity.addComponent(
          new Transform({
              position: this.counterPosition,
              scale: this.counterScale,
              rotation: this.counterRotation
          })
        );

        let textShape = new TextShape("Explorers");
        textShape.fontSize = 10;
        textShape.vTextAlign = "center";
        this.counterEntity.addComponent(textShape);
        this.setVisitorCount(1337);

        engine.addEntity(this.counterEntity);
    }

    setVisitorCount(count: number){
      console.log("Updating counter...");
      this.counterEntity.getComponent(TextShape).value = "Explorers\n\n" + count;
    }

    // NOTE: using executeTask in any other place than game.ts seems to break that file,
    // so I added the onclick to the constructor (╯°□°)╯︵ ┻━┻
    // bindClick(){
    //     this.entity.addComponent(
    //       new OnClick(() => {
    //           executeTask(async () => {
    //               try{
    //                 // console.log("can i just try something real quick?");
    //                 const provider = Web3Provider.getProvider();
    //                 // const requestManager = new EthConnect.RequestManager(provider);
    //                 // let abi = ABIManager.getAbi("GuestBook");
    //                 // console.log(abi);
    //                 // const factory = new EthConnect.ContractFactory(requestManager, abi)
    //               }catch(ex){
    //               }
    //           });
    //       })
    //     );
    // }
}
