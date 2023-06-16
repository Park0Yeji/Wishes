class Particle {
  
  constructor(maxR_, s_, c_) {
    this.s = s_
    this.c = c_
    this.maxR = maxR_
    
    this.life = 100
    
    this.init()
  }
  
  init() {
    this.pos = p5.Vector.random2D()
    this.pos.normalize()
    this.pos.mult(random(2, maxR))

    this.vel = createVector()
  }

  show() {
    fill(this.c)
    ellipse(this.pos.x, this.pos.y, this.s, this.s)
    this.life -= 1
  }
  
  move() {
    var angle = noise(this.pos.x / 400, this.pos.y / 400) * TAU
    
    this.vel.set(cos(angle), sin(angle))
    this.vel.mult(0.3)
    this.pos.add(this.vel)
  }
  

  isDead() {
    var d = dist(this.pos.x, this.pos.y, 0, 0)
 
    if(d > this.maxR || this.life < 1) return true
    else return false
  }
}
