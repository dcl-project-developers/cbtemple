export class ABIManager
{
  static AbisToFetch = {};
  static FetchedAbis: {} = {};

  static async fetchAbis()
  {
    for(let key in this.AbisToFetch){

      executeTask(async () => {
        try
        {
          let response = await fetch(this.AbisToFetch[key], { method: "GET"});
          this.FetchedAbis[key] = await response.json();
        }
        catch(ex)
        {
          console.log(ex);
        }
      });
    }
  }

  static getAbi(abi: string){
    if(ABIManager.FetchedAbis.hasOwnProperty(abi)) return ABIManager.FetchedAbis[abi];
    else return null;
  }
}
