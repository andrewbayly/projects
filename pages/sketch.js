

var sketch = function(p){ 

  p.gen = 0
  
  p.grid = [[[0]],[[0]]]

  p.init = function(g){ 
    p.grid = []
    var gr1 = []
    var gr2 = []
    for(var i = 0; i < g.length; i++){ 
      var r1 = []
      var r2 = []
      for(var j = 0; j < g[i].length; j++){ 
        r1.push(g[i][j])
        r2.push(g[i][j])
      }
      gr1.push(r1)
      gr2.push(r2)
    }
    p.grid.push(gr1) 
    p.grid.push(gr2)
    
    p.gen = 0
  } 
  
  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(48, 48, 48)
    p.frameRate(2) 
  }

  p.step = function(){ 
    
    var colors = [ 
      p.color(48, 48, 48),
      p.color(255, 128, 0),
      p.color(255, 255, 255),
      p.color(0, 128, 255)
    ]
  
    p.gen++
    
    var newFrame = p.gen % 2
    var oldFrame = 1 - newFrame
    
    for(var i = 1; i < p.grid[oldFrame].length - 1; i++){ 
      for(var j = 1; j < p.grid[oldFrame][i].length - 1; j++){ 
        var old = p.grid[oldFrame][i][j]
        var n = 0
        if(old == 0)
          n = 0
        else if(old == 2)
          n = 1
        else if(old == 3)
          n = 2
        else{ 
          var count = 0; 
          for(var k1 = -1; k1 <= 1; k1++){ 
            for(var k2 = -1; k2 <= 1; k2++){ 
              if( (k1 != 0 || k2 != 0) && (p.grid[oldFrame][i+k1][j+k2] == 3) ){ 
                count++
              }
            }
          }
          n = (count == 1) ? 3 : 1
        }  
        p.grid[newFrame][i][j] = n
        
        //draw color n at position i, j
        
        //console.log(i, j, i%4)
        
        var x1 = ( p.width / p.grid[oldFrame][0].length ) * j 
        var x2 = ( p.width / p.grid[oldFrame][0].length )
        
        var y1 = ( p.height / p.grid[oldFrame].length ) * i 
        var y2 = ( p.height / p.grid[oldFrame].length )

        //p.fill(colors[i*4])       
        
        //p.fill(p.color(255, 0, 0))
        p.fill(colors[n])
        p.stroke(colors[n])
        
        p.rect(x1, y1, x2, y2) 
        
      }
    }     
    
  }

  p.draw = function() {
   p.step()
  }

}


var myp5_1 = new p5(sketch, 'sketch1')
myp5_1.init([[0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 1, 2, 3, 1, 0, 0], 
             [0, 1, 0, 0, 0, 0, 1, 0], 
             [0, 1, 0, 0, 0, 0, 1, 0], 
             [0, 1, 0, 0, 0, 0, 1, 0], 
             [0, 1, 0, 0, 0, 0, 1, 0], 
             [0, 0, 1, 1, 1, 1, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0]] ) 
             
var myp5_2 = new p5(sketch, 'sketch2')
myp5_2.init([[0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 1, 3, 2, 1, 0, 0], 
             [0, 1, 0, 0, 0, 0, 1, 0], 
             [0, 1, 0, 0, 0, 0, 1, 0], 
             [0, 1, 0, 0, 0, 0, 1, 0], 
             [0, 1, 0, 0, 0, 0, 1, 0], 
             [0, 0, 1, 1, 1, 1, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0]] ) 


