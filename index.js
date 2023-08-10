
import Blockchain from './src/blockchain.js'
import Block from './src/block.js'


var blawx = new Blockchain()

blawx.addBlock(new Block(1, (new Date().toISOString()), { amount: 4, msg: 'For Beer' } ))
console.log( JSON.stringify(blawx, null, 4) )

console.log( `Is Blockchain valid? ${blawx.isChainValid()}` )