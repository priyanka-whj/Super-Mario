class Walls {
    constructor(posX) {
      this.rw = random(100, 500);
      this.rh = 40;
        this.rx = posX;
      this.ry = height- random([250,450]);   //height - heightPlatform
     // this.colour = color('Green'); // red
      this.spt=createSprite(this.rx, this.ry , this.rw, this.rh);
      this.spt.shapeColor="brown";
    
    }
  
  
  }
  