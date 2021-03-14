class Player
{
    constructor()
    {
        this.spt = createSprite(200, 200, 100, 100);
        this.spt.shapeColor = "blue";
    }
    applyGravity()
    {
        this.spt.velocityY = this.spt.velocityY + 5;
    }
    moveForward()
    {
        this.spt.x = this.spt.x + 10;
    }
    moveBackward()
    {
        this.spt.x = this.spt.x - 10;
    }
    jump()
    {
        this.spt.velocityY = -10;
    }
}