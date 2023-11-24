import * as ex from 'excalibur';

import * as botFile from '../res/excalibot.png';
import * as botRedFile from '../res/excalibot-red.png';
import * as baddieFile from '../res/baddie.png';
import * as blockFile from '../res/block.png';
import * as npcFile from '../res/npc.png';
import * as jumpSound from '../res/jump.wav';
import * as hitSound from '../res/hurt.wav';
import * as gotEmSound from '../res/gottem.wav';


// const botFile = require('../res/excalibot.png');
// const botRedFile = require('../res/excalibot-red.png');
// const baddieFile = require('../res/baddie.png');
// const blockFile = require('../res/block.png');
// const npcFile = require('../res/npc.png');
// const jumpSound = require('../res/jump.wav');
// const hitSound = require('../res/hurt.wav');
// const gotEmSound = require('../res/gottem.wav');

const Resources = {
    bot: new ex.ImageSource(botFile.default),
    botRed: new ex.ImageSource(botRedFile.default),
    baddie: new ex.ImageSource(baddieFile.default),
    block: new ex.ImageSource(blockFile.default),
    npc: new ex.ImageSource(npcFile.default),
    jump: new ex.Sound(jumpSound.default),
    hit: new ex.Sound(hitSound.default),
    gotEm: new ex.Sound(gotEmSound.default),
};

const loader = new ex.Loader();

const botSpriteSheet = ex.SpriteSheet.fromImageSource({
    image:Resources.bot, 
    grid: { 
        columns: 8,
        rows: 1, 
        spriteWidth: 32,
        spriteHeight: 32,
    },
});
const botRedSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: Resources.botRed,
    grid: {
        columns: 8, 
        rows: 1,
        spriteWidth: 32,
        spriteHeight: 32,
    },
});
const baddieSpriteSheet = ex.SpriteSheet.fromImageSource({
    image: Resources.baddie,
    grid: {
        columns: 6, 
        rows: 1,
        spriteWidth: 32,
        spriteHeight: 32,
    },
});
const blockSprite = Resources.block.toSprite();
const npcSprite = Resources.npc.toSprite();

for (const res in Resources) {
    loader.addResource((Resources as {[key: string]: ex.ImageSource | ex.Sound })[res]);
}

export { Resources, loader, botSpriteSheet, botRedSpriteSheet, baddieSpriteSheet, blockSprite, npcSprite };