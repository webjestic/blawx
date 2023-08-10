
const crypto = await import ('node:crypto')

export default class Block {

    constructor (index, timestamp, data, previousHash = '') {
        this.index = index
        this.timestamp = timestamp
        this.data = data
        this.previousHash = previousHash
        this.hash = this.calculateHash()
        this.nounce = 0
    }

    calculateHash() {   
        const data = this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nounce
        return crypto.createHash('sha256').update(data).digest('hex')
    }

    mineBlock(difficulty) {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0') ) {
            this.nounce++
            this.hash = this.calculateHash()
        }

        console.log( `Block minded: ${this.hash}` )
    }
}