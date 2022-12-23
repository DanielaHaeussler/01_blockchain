//Klasse 

class Block{

    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp; // Zeitstempel
        this.lastHash = lastHash; // Hash des vorhergehenden Blocks
        this.hash = hash; // Eigener Hash
        this.data = data; // Daten
    }

    toString(){ // für Debugging-Zwecke
        return `Block -
        Timestamp:  ${this.timestamp}
        Last Hash:  ${this.lastHash}
        Hash:       ${this.hash}
        Data:       ${this.data}`
    }

static genesis (){
return new this("Genesis Time", "----", "2bfdaaa3388", ["data1", "data2", "data3"]);
}

static mineBlock (lastBlock,ownData){
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = "ownhash";

    return new this(timestamp, lastHash,hash,ownData); // call constructor 
}

}

module.exports = Block; // Export al Modul