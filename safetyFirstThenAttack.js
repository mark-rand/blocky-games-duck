var scanDirection, currentHealth;

scanDirection = 0; currentHealth=health();
while (true) {
  while (scan(scanDirection) < 65) {
    cannon(scanDirection, scan(scanDirection));
    swimLogic();
  }
  scanDirection += 3;
}

function swimLogic() {
  if (health() > 25) {
    if (health() < currentHealth - 5) {
      swimRandom();
      currentHealth = health();
    } else {
      if (Math.random > 0.95) {
        swimRandom();
      }
    }
  } else {
    swim(scanDirection);
  }
}

function swimRandom() {
  swim(Math.random() * 365);
}
