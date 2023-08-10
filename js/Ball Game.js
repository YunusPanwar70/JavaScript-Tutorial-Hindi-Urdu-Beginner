function drawPlayer() {
    ctx.beingPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI *2)
    ctx.fillstyle = "blue";
    ctx.fill();
    ctx.closePath();
}
