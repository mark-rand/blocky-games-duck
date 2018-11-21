var scanDirection=0;
var currentHealth=health();
while (true) {
  while (scan(scanDirection) < 50) {
    cannon(scanDirection,scan(scanDirection));
    checkHealthAndSwim();
  }
  scanDirection += 5;
  checkHealthAndSwim();
}

function checkHealthAndSwim() {
  if (currentHealth > health()) {
      currentHealth=health();
      swim(Math.random()*365);
    }
}
