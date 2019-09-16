import { World } from './Classes/SpawnWorld'
import { ABIManager } from './Classes/ABIManager';
import * as EthConnect from '../node_modules/eth-connect/esm';
import { getUserAccount } from '@decentraland/EthereumController
import { getProvider } from '@decentraland/web3-provider';
import { NFTShowcaseManager } from './Classes/NFTShowcaseManager';
import { StoneCarvingManager } from './Classes/StoneCarvingManager';
import { GuestBook } from './Classes/GuestBook';
import { DEFAULT_SHOWCASE_NFTS, DEFAULT_STONE_TEXTS } from './Settings/defaults';
import { GUEST_BOOK_ADR } from './Settings/contractAddresses';
import { GUEST_BOOK_ABI } from './Settings/abis';
import { GuestBookUI } from "./UI/GuestBookUI";

const CANVAS = new UICanvas();

const WORLD = new World();
WORLD.spawn();

const NFT_SHOWCASE_MANAGER = new NFTShowcaseManager(DEFAULT_SHOWCASE_NFTS).placeAllInScene();
const STONE_CARVING_MANAGER = new StoneCarvingManager(DEFAULT_STONE_TEXTS).placeAllInScene();
let GUEST_BOOK: GuestBook;
let GUEST_BOOK_UI: GuestBookUI;

setInterval(() => { fetchCounterValue() }, 10000);

executeTask(async () => {
  try{
      await ABIManager.fetchAbis();

      GUEST_BOOK_UI = new GuestBookUI(CANVAS, () => { signGuestBook() });

      GUEST_BOOK = new GuestBook(new Vector3(24, 2.04, 22.9), new Vector3(1.5, 1.5, 1.5), Quaternion.Euler(90, 0, 0).multiply(Quaternion.Euler(0, 270, 0)),
      () => { GUEST_BOOK_UI.showUI(); },
      new Vector3(24, 1.25, 22.55), new Vector3(0.175, 0.175, 0.175), Quaternion.Euler(12.75, 0, 0));

      fetchCounterValue();
  }catch(ex){
      console.log(ex);
  }
});

async function signGuestBook()
{
  try{
      let provider = await getProvider();
      let requestManager = new EthConnect.RequestManager(provider);
      let factory = new EthConnect.ContractFactory(requestManager, GUEST_BOOK_ABI)
      let contract = (await factory.at(GUEST_BOOK_ADR)) as any;
      let address = await getUserAccount();

      let res = await contract.addEntry({
        from: address
      });

      GUEST_BOOK_UI.hideUI();
      fetchCounterValue();

  }catch(ex){
      console.log(ex);
  }
}

async function fetchCounterValue()
{
  if(GUEST_BOOK){
    try{
      let provider = await getProvider();
      let requestManager = new EthConnect.RequestManager(provider);
      let factory = new EthConnect.ContractFactory(requestManager, GUEST_BOOK_ABI)
      let contract = (await factory.at(GUEST_BOOK_ADR)) as any;
      let totalEntries = await contract.totalEntries();
      GUEST_BOOK.setVisitorCount(totalEntries);
    }catch(ex){
      console.log(ex);
    }
  }
}
