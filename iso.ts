 namespace isoBlocks{
 //% block iso rect at $x, $y, scale $sx x $sy
  //% x.defl=80
  //% y.defl=60
  //% sx.defl=3
  //% sy.defl=3
     export function isoRect(px: Number, py: Number, sx: Number, sy: Number){
         for(let x=0;x<sx;x++){
             for (let y = 0; x < sy; y++) {
                 let isotilegeneratedbyisorect = sprites.create(img`
                     . . . . . . . . f . . . . . . . .
                     . . . . . . f f b f f . . . . . .
                     . . . . f f b b b b b f f . . . .
                     . . . f b b b b b b b b b f . . .
                     . f f b b b b b b b b b b b f f .
                     f b b b b b b b b b b b b b b b f
                     . f f b b b b b b b b b b b f f .
                     . . . f b b b b b b b b b f . . .
                     . . . . f f b b b b b f f . . . .
                     . . . . . . f f b f f . . . . . .
                     . . . . . . . . f . . . . . . . .
                 `, SpriteKind.Player)
                 isotilegeneratedbyisorect.setPosition(x/1.2, y/1.2)
             }
             }
         }
 }