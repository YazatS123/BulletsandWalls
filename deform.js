function deformation(pos){
    bullet.velocityX = 0;
    deform = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
    if(deform > 10){
      text("Damage: lethal", 400, 50);
      text("Damage: " + deform, 400, 60);
      bullet.shapeColor = "red";
      bullet.x = pos;
    }
    else if(deform < 10){
      text("Damage: good", 400, 50);
      text("Damage: " + deform, 400, 60);
      bullet.shapeColor = "green";
      bullet.x = pos;
   }
}