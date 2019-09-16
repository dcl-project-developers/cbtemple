import { ShowcaseNFT } from '../Entities/ShowcaseNFT';

export class NFTShowcaseManager
{
    nft_dict: {} | null;
    spawned_nfts: ShowcaseNFT[] = [];

    constructor(nft_dict: {} | null)
    {
        this.nft_dict = nft_dict;
    }

    placeAllInScene()
    {
        for(let contract in this.nft_dict){
            for(let i = 0; i < this.nft_dict[contract]["tokens"].length; i++){
                let cont = this.nft_dict[contract];
                let token_id = cont["tokens"][i] || 0;
                let position = cont["positions"][i] || new Vector3(0, 0, 0);
                let scale = cont["scales"][i] || new Vector3(1, 1, 1);
                let rotation = cont["rotations"][i] || new Quaternion(0, 0, 0);

                let nft = new ShowcaseNFT(contract, token_id, position, scale, rotation);
                this.spawned_nfts.push(nft);
            }
        }
    }

    addNft(contract: string, token_id: number, position: Vector3, scale: Vector3, rotation: Quaternion)
    {
        if(this.nft_dict.hasOwnProperty(contract)){
            this.nft_dict[contract]["tokens"].push(token_id);
            this.nft_dict[contract]["positions"].push(position);
        }
        else this.nft_dict[contract] = { "tokens": [token_id], "positions": [position] };

        let nft = new ShowcaseNFT(contract, token_id, position, scale, rotation);
        this.spawned_nfts.push(nft);
    }
}
