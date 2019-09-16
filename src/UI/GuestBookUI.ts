import * as EthConnect from '../../node_modules/eth-connect/esm';
import { getUserAccount } from '@decentraland/EthereumController
import { getProvider } from '@decentraland/web3-provider';
import { GuestBook } from '../Classes/GuestBook';
import { DEFAULT_SHOWCASE_NFTS, DEFAULT_STONE_TEXTS } from '../Settings/defaults';
import { GUEST_BOOK_ADR } from '../Settings/contractAddresses';
import { GUEST_BOOK_ABI } from '../Settings/abis';

const IMAGE_SOURCES = {
    Background: "images/ui/signature_prompt.png",
    ButtonSign: "images/ui/btn_sign.png",
    ButtonClose: "images/ui/btn_close.png"
}

export class GuestBookUI
{
    canvas: UICanvas;
    backgroundImage: UIImage;
    btn_sign: UIImage;
    btn_close: UIImage;
    guestBook: GuestBook;

    constructor(canvas: UICanvas, signClick: Function){
      this.canvas = canvas;

      this.backgroundImage = new UIImage(this.canvas, new Texture(IMAGE_SOURCES.Background));
      this.backgroundImage.sourceWidth = 322;
      this.backgroundImage.sourceHeight = 166;
      this.backgroundImage.width = this.backgroundImage.sourceWidth;
      this.backgroundImage.height = this.backgroundImage.sourceHeight;
      this.backgroundImage.hAlign = "center";
      this.backgroundImage.vAlign = "center";
      this.backgroundImage.positionY = "-10%";

      this.btn_sign = new UIImage(this.backgroundImage, new Texture(IMAGE_SOURCES.ButtonSign));
      this.btn_sign.sourceWidth = 108;
      this.btn_sign.sourceHeight = 38;
      this.btn_sign.width = this.btn_sign.sourceWidth;
      this.btn_sign.height = this.btn_sign.sourceHeight;
      this.btn_sign.hAlign = "left";
      this.btn_sign.vAlign = "bottom";
      this.btn_sign.positionX = "10%";
      this.btn_sign.positionY = "20%";
      this.btn_sign.onClick = new OnClick(() => { signClick() });

      this.btn_close = new UIImage(this.backgroundImage, new Texture(IMAGE_SOURCES.ButtonClose));
      this.btn_close.sourceWidth = 108;
      this.btn_close.sourceHeight = 38;
      this.btn_close.width = this.btn_close.sourceWidth;
      this.btn_close.height = this.btn_close.sourceHeight;
      this.btn_close.hAlign = "right";
      this.btn_close.vAlign = "bottom";
      this.btn_close.positionX = "-10%";
      this.btn_close.positionY = "20%";
      this.btn_close.onClick = new OnClick(() => { this.closeClick() });

      this.hideUI();
    }

    setGuestBook(book: GuestBook){
      this.guestBook = book;
    }

    // NOTE: now in constructor
    // signClick(){
    //     // executeTask(async () => {
    //     //     try{
    //     //         let provider = await getProvider();
    //     //         let requestManager = new EthConnect.RequestManager(provider);
    //     //         let factory = new EthConnect.ContractFactory(requestManager, GUEST_BOOK_ABI)
    //     //         let contract = (await factory.at(GUEST_BOOK_ADR)) as any;
    //     //         let address = await getUserAccount();
    //     //
    //     //         let res = await contract.addEntry({
    //     //           from: address
    //     //         });
    //     //     }catch(ex){
    //     //         console.log(ex);
    //     //     }
    //     // });
    // }

    closeClick(){
      this.hideUI();
    }

    hideUI(){
      this.backgroundImage.visible = false;
    }

    showUI(){
      this.backgroundImage.visible = true;
    }


}
