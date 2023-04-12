const sketch = (p) => {
  let rr = p.noise(0) * 255

  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight)
    p.colorMode(p.RGB, 255, 255, 255, 1.0)
    p.pixelDensity(1)
    p.frameRate(15)
    p.background(rr / 10, 5, 20)
  }

  p.draw = function () {
    // p.stroke(255, 255, 255)
    // p.point(Math.random() * window.innerWidth, Math.random() * window.innerHeight)
    // x += 1

    p.noFill()

    for (let i = 0; i < 10; i++) {
      const x1 = p.noise(p.frameCount / 300.0) * -window.innerWidth / 2
      const x2 = p.noise(p.frameCount / 300.0) * window.innerWidth
      const x3 = p.noise(p.frameCount / 600.0) * window.innerWidth
      const x4 = p.noise(p.frameCount / 300.0) * window.innerWidth / 2 + window.innerWidth

      const y1 = p.noise(p.frameCount / 300.0) * window.innerHeight / 2
      const y2 = p.noise(p.frameCount / 600.0) * window.innerHeight / 2
      const y3 = p.noise(p.frameCount / 1200.0) * window.innerHeight * 3 / 2
      const y4 = p.noise(p.frameCount / 200.0) * window.innerHeight * 3 / 2

      rr = p.noise(p.frameCount / 300.0) * 255

      p.stroke(rr, 50 - rr, 200, 0.006)
      p.bezier(x1, y1, x2, y2, x3, y3, x4, y4)
    }
  }

  p.windowResized = function () {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  }
}

export default sketch
