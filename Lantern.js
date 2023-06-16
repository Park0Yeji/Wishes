class Lantern{
  
   constructor(size, Sweight, posX, posY){
    
     this._size  = size;
     this._posX = posX;
     this._posY = posY;
     this._Sweight = Sweight;

    
    
     this.p1 = this._posX - 2.5/sqrt(61)*this._size + 2.75/sqrt(61)*this._size;
     this.q1 = this._posY + 4.5/sqrt(61)*this._size - 3/sqrt(61)*this._size;
     this.r1 = 0.448 * this._size;
     this.s1 = 0.384 * this._size;
     this.p2 = this._posX - 2.5/sqrt(61)*this._size + 2.75/sqrt(61)*this._size;
     this.q2 = this._posY + 4.75/sqrt(61)*this._size - 3/sqrt(61)*this._size;
     this.r2 = 0.320 * this._size;
     this.s2 = 0.256 * this._size;
     this.p3 = this._posX - 2.5/sqrt(61)*this._size + 2.75/sqrt(61)*this._size;
     this.q3 = this._posY + 5/sqrt(61)*this._size - 3/sqrt(61)*this._size;
     this.r3 = 0.192 * this._size;
     this.s3 = 0.128 * this._size;
     this.p4 = this._posX - 2.5/sqrt(61)*this._size + 2.75/sqrt(61)*this._size;
     this.q4 = this._posY + 4/sqrt(61)*this._size - 3/sqrt(61)*this._size;
     this.r4 = 0.6 * this._size;
     this.s4 = 0.6 * this._size;
    
     this.x1 = 0.448 * this._size + this.posX - 2.5/sqrt(61)*this._size;
     this.x2 = 0 + this._posX - 2.5/sqrt(61)*this._size;
     this.x3 = 0.128 * this._size + this._posX - 2.5/sqrt(61)*this._size;
     this.x4 = 0.448 * this._size + this._posX - 2.5/sqrt(61)*this._size;
     this.x5 = 0.576 * this._size + this._posX - 2.5/sqrt(61)*this._size;
     this.x6 = 0.64 * this._size + this._posX - 2.5/sqrt(61)*this._size;
    
     this.y1 = 0 + this._posY - 3/sqrt(61)*this._size;
     this.y2 = 0.128 * this._size + this._posY - 3/sqrt(61)*this._size;
     this.y3 = 0.705 * this._size + this._posY - 3/sqrt(61)*this._size;
     this.y4 = 0.7684 * this._size + this._posY - 3/sqrt(61)*this._size;
     this.y5 = 0.705 * this._size + this._posY - 3/sqrt(61)*this._size;
     this.y6 = 0.128 * this._size + this._posY - 3/sqrt(61)*this._size;
    
  }

  displayL(){

    stroke(255);
    //fill(14, 12, 33);
    fill(5,3,23);
    //fill(0);
    strokeWeight(this._Sweight);
    
    
    line( this.x4, this.y1, this.x2, this.y2);
    line( this.x2, this.y2, this.x3, this.y3);
    line( this.x3, this.y3, this.x4, this.y4);
    line( this.x4, this.y4, this.x5, this.y5);
    line( this.x5, this.y5, this.x6, this.y6);
    line( this.x6, this.y6, this.x4, this.y1);
    strokeWeight(this._Sweight/3);
    line( this.x4, this.y1, this.x4, this.y4);
    
    
  
  }
  
  displayF(){
    
    
    noStroke();
    
    //fill(14, 12, 33);
    //fill(0);
    fill(5,3,23);
    rect(this.x2, this.y1, this.x6-this.x2, this.y4-this.y1);
    
    fill(255, 70, 0, random(0, 30));
    ellipse(this.p4, this.q4, this.r4, this.s4);
    
    fill(255, 100, 0, random(0, 40));
    ellipse(this.p1, this.q1, this.r1, this.s1);
    
    fill(255, 150, 0, random(10, 50));
    ellipse(this.p2, this.q2, this.r2, this.s2);
    
    fill(255, 200, 0, random(20, 60));
    ellipse(this.p3, this.q3, this.r3, this.s3);
    
    
    
    
  }
  
  
  
  
}
