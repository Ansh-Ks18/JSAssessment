/*Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created*/


//code implementation for js project assessment

let nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, bodyColor, eyeColor) {
    let nft = {
        name: name,
        bodyColor: bodyColor,
        eyeColor: eyeColor
    };
    nfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: " + nfts[i].name);
        console.log("Body Color: " + nfts[i].bodyColor);
        console.log("Eye Color: " + nfts[i].eyeColor);
        console.log("--------------------");
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line
mintNFT("Dragon", "Green", "Red");
mintNFT("Phoenix", "Gold", "Orange");
mintNFT("Unicorn", "White", "Pink");

listNFTs();

console.log("Total Supply: " + getTotalSupply());
