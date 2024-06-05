let nfts = [];

function mintNFT(name, artist, dateCreated, owner) {
    const nft = {
        name: name,
        artist: artist,
        dateCreated: dateCreated,
        owner: owner
    };
    nfts.push(nft);
}

function listNFTs() {
    nfts.forEach((nft, index) => {
        console.log(`NFT #${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Artist: ${nft.artist}`);
        console.log(`Date Created: ${nft.dateCreated}`);
        console.log(`Owner: ${nft.owner}`);
        console.log('------------------------');
    });
}

function getTotalSupply() {
    return nfts.length;
}

mintNFT("CryptoPunk", "Larva Labs", "2017-06-23", "Alice");
mintNFT("Bored Ape", "Yuga Labs", "2021-04-30", "Bob");
mintNFT("Cool Cat", "Cool Cats NFT", "2021-07-01", "Charlie");

listNFTs();
console.log(`Total Supply: ${getTotalSupply()}`);
