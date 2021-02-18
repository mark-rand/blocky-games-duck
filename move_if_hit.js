var angle=1;
var oldHealth = health();

function chechHealth() {
  if (health() < oldHealth - 10) {
    angle =+ 7;
    oldHealth = health();
  }
}

while (true) {
  while (scan(angle) < 70) {
    swim(angle);
    cannon(angle, scan(angle));
    chechHealth()
  }
  if (getX() < 10 || getY() < 10 || getX() > 90 || getY() > 90){
    while(scan(angle) > 95) {
      stop();
      angle += 7;
    }
  }
  chechHealth();
  swim(angle);
  
}
