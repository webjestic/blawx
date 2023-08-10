
import Block from './block.js'

export default class Blockchain {

    constructor() {
        this.chain = [this.createGenesisBlock()]
        this.difficulty = 5
    }

    createGenesisBlock() {
        return new Block(0, new Date().toISOString(), {msg:'Genesis Block'}, 'abcdef0123456789' )
    }

    getLatestBlock() {
        return this.chain[this.chain.length-1]
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash
        // newBlock.hash = newBlock.calculateHash()
        newBlock.mineBlock(this.difficulty)
        this.chain.push(newBlock)
    }

    isChainValid() {
        for (let x = 1; x <= this.chain.length-1; x++) {
            const currentBlock = this.chain[x]
            const previousBlock = this.chain[x-1]

            if (currentBlock.hash !== currentBlock.calculateHash())
                return false

            if (currentBlock.previousHash !== previousBlock.hash)
                return false
        }
        return true
    }

}