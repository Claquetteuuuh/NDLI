import { useRef, useState } from "react";
import { useGame } from "../helpers/useGame";
import style from "../styles/game.module.css"
import GameOver from "./GameOver"
import Menu from './Menu'


const PhaserGame = () => {

  const gameConfig = {
    width: 1000,
    height: 600,
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    render: {
      antialias: false,
      pixelArt: true,
      roundPixels: true,
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 500 },
        debug: false,
      },
    },
    scale:{
      zoom:1.3
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    },
  };

  function preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('princess', 'assets/skin/princesse.png');
    this.load.image('virus', 'assets/virus.png')
    this.load.spritesheet('player', 'assets/skin.png', { frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet('capote', 'assets/capote-mod.png', { frameWidth: 32, frameHeight: 48 });
  }

  let player;
  let stars;
  let platforms;
  let cursors;
  let viruss;
  let keyC;

  const [active, setActive] = useState(false)
  const [loose, setLoose] = useState(false)
  const [i, setI] = useState(0)

  function create() {
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(9, 2).refreshBody();

    platforms.create(600, 400, 'ground')
    platforms.create(120, 470, 'ground')
    platforms.create(360, 400, 'ground')
    platforms.create(800, 350, 'ground')
    platforms.create(550, 250, 'ground')
    platforms.create(250, 200, 'ground')
    platforms.create(30, 95, 'ground')

    stars = this.physics.add.staticGroup();
    viruss = this.physics.add.staticGroup();


    stars.create(30, 42, 'princess')
    viruss.create(600, 370, 'virus')
    viruss.create(120, 440, 'virus')
    viruss.create(360, 370, 'virus')
    viruss.create(800, 320, 'virus')
    viruss.create(550, 220, 'virus')
    viruss.create(250, 170, 'virus')


    player = this.physics.add.sprite(100, 500, 'player');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'player', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();
    keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(viruss, platforms);

    this.physics.add.overlap(player, stars, touchPrincess, null, this);
    this.physics.add.overlap(player, viruss, touchVirus, null, this);

  };

  function capoteMod(setting) {
    if (setting == 0) {
      player.setTexture('capote', '/assets/capote-mod.png')


    } else {
      player.setTexture('player', "assets/skin.png")
    }
  }

  function update() {
    if (keyC.isDown) {
      if (i == 0) {
        capoteMod(i)
      } else {
        capoteMod(i)

      }
    }
      if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
      }
      else if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
      }

      else {
        player.setVelocityX(0);

        player.anims.play('turn');
      }

      if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
      }

    }

    function touchPrincess(player, star) {
      star.disableBody(true, true);

      setActive(true)
    }

    function touchVirus(player, virus) {
      if (! keyC.isDown){
        setLoose(true)
      }
    }

    const parentEl = useRef(null)
    useGame(gameConfig, parentEl);

    const [visible, setVisible] = useState(false)

    window.addEventListener("keydown",(e) => {
      if(e.key === 'h'){
        setVisible(true)
      }
    })

    


    return (
      <div className={style.container}>
        <h1>SIDINFO - PRESS H TO OPEN MENU</h1>
        <div className={style.canva} ref={parentEl} />
        <GameOver active={active} loose={loose} />
        <Menu visible={visible} />
      </div>
    );
  };

  export default PhaserGame;
