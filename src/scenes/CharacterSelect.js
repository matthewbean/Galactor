export default class CharacterSelect extends Phaser.Scene {
    constructor() {
      super({ key: 'CharacterSelect' });
    }
    preload(){
        this.load.spritesheet('background', 
      './assets/background.png',
      { frameWidth: 128, frameHeight: 256 }
    );  
    this.load.spritesheet('UI', 
      './assets/UI.png',
      { frameWidth: 8, frameHeight: 8 }
    );
    this.load.spritesheet('player-ships', 
      './assets/player-ships.png',
      { frameWidth: 8, frameHeight: 8 }
    );
    this.load.setPath('./assets/sounds')
    this.load.audio('menu-move', ['menu-move.wav']);  
    this.load.audio('menu-select', ['menu-select.wav']);  
    }
    create() {
        this.settings=JSON.parse(localStorage.getItem('settings')) ??{
            music:1,
            sfx:1,
            cameraShake:true
          }
          this.menuMove= this.sound.add('menu-move', { volume:this.settings.sfx })
          this.menuSelect= this.sound.add('menu-select', { volume:this.settings.sfx })

        this.background=this.add.tileSprite(this.game.config.width * 0.5,this.game.config.height * 0.5,this.game.config.height,this.game.config.width,'background',5)
        this.background.angle = 90
        this.time.addEvent({
          delay: 40,
          callback: function () {
            this.background.tilePositionY-=2 
            this.background.tilePositionX-=2
          },
          callbackScope: this,
          loop: true,
        });
        //Set up key binds
        this.keyA =  this.input.keyboard.addKey('A');
        this.keyD =  this.input.keyboard.addKey('D');
        this.keySPACE =  this.input.keyboard.addKey('SPACE');

        this.title = this.add.text(this.game.config.width*0.5, 200, 'Select Character', {fontSize: '72px',fontFamily: 'font1' }).setOrigin(0.5);
        this.characters=[]
        for (let i=1;i<=10;i+=3){
            let character= this.add.image(this.game.config.width*i*.09, 300, 'player-ships', i).setScale(5)
            this.characters.push(character)
        }
        this.cursor=this.add.image(this.game.config.width*0.09,400,'UI',138).setScale(3)  
        this.cursor.setData('position', 0)
        this.cursor.setData('canMove', true)
    }
    update(){
        if (this.cursor.getData('canMove')){
          if (this.keyA.isDown) {
            this.menuMove.play()
            this.cursor.setData('canMove',false)
            this.time.addEvent({
              delay: 200,
              callback: function () {
                this.cursor.setData('canMove',true)
              },
              callbackScope: this,
              loop: false,
            });
            if (this.cursor.getData('position')<=0){
              this.cursor.setData('position', this.characters.length-1)
            } else {
              this.cursor.setData('position', this.cursor.getData('position')-1)
            }
          } 
          else if (this.keyD.isDown){
            this.menuMove.play()
            this.cursor.setData('canMove', false)
            this.time.addEvent({
              delay: 200,
              callback: function () {
                this.cursor.setData('canMove',true)
              },
              callbackScope: this,
              loop: false,
            });
            if (this.cursor.getData('position')>=this.characters.length-1){
              this.cursor.setData('position', 0)
            } else {
              this.cursor.setData('position', this.cursor.getData('position')+1)
            }
          } 
          this.cursor.x=this.game.config.width*.09*(this.cursor.getData('position')*3+1)
        }
     
        if (this.keySPACE.isDown){
            this.menuSelect.play()
            this.sound.stopByKey('the-longest-year')
            this.scene.start('SceneMain', {character:this.cursor.getData('position')})

          
        }
        
    
      }
  }
  