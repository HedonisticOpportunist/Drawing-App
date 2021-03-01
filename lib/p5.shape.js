function tri(e, V, t, x) {
    triV1x = e - t + t, triV1y = V - t, triV2x = e + t, triV2y = V + t, triV3x = e - t, triV3y = V + t, stroke(0), strokeWeight(x), beginShape(TRIANGLES), vertex(triV1x, triV1y), vertex(triV2x, triV2y), vertex(triV3x, triV3y), endShape()
}

function pent(e, V, t, x) {
    pentX = e, pentY = V, len = t, penV1x = e - len / 2, penV1y = V + len / 2, penV2x = e + len / 2, penV2y = V + len / 2, penV3x = e + len / 2, penV3y = penV2y - len, penV4x = penV3x - len / 2, penV4y = penV3y - len / 2, penV5x = e - len / 2, penV5y = V - len / 2, beginShape(), strokeWeight(x), stroke(0), vertex(penV1x, penV1y), vertex(penV2x, penV2y), vertex(penV3x, penV3y), vertex(penV4x, penV4y), vertex(penV5x, penV5y), vertex(penV1x, penV1y), endShape()
}

function hexagon(e, V, t, x) {
    hexV1x = e - t, hexV1y = V + t / 2, hexV2x = e, hexV2y = V + t, hexV3x = e + t, hexV3y = V + t / 2, hexV4x = e + t, hexV4y = V - t / 2, hexV5x = e, hexV5y = V - t, hexV6x = e - t, hexV6y = V - t / 2, stroke(0), strokeWeight(x), beginShape(), vertex(hexV1x, hexV1y), vertex(hexV2x, hexV2y), vertex(hexV3x, hexV3y), vertex(hexV4x, hexV4y), vertex(hexV5x, hexV5y), vertex(hexV6x, hexV6y), vertex(hexV1x, hexV1y), endShape()
}

function hept(e, V, t, x) {
    heptV1x = e - t / 2, heptV1y = V + t / 2, heptV2x = e + t / 2, heptV2y = V + t / 2, heptV3x = e + t, heptV3y = V, heptV4x = e + t, heptV4y = V - t, heptV5x = e, heptV5y = V - t - t / 2, heptV6x = e - t, heptV6y = V - t, heptV7x = e - t, heptV7y = V, heptV8x = e - t / 2, heptV8y = V + t / 2, stroke(0), strokeWeight(x), beginShape(), vertex(heptV1x, heptV1y), vertex(heptV2x, heptV2y), vertex(heptV3x, heptV3y), vertex(heptV4x, heptV4y), vertex(heptV5x, heptV5y), vertex(heptV6x, heptV6y), vertex(heptV7x, heptV7y), vertex(heptV8x, heptV8y), endShape()
}

function octo(e, V, t, x) {
    octoV1x = e - t / 2, octoV1y = V + t / 2, octoV2x = e + t / 2, octoV2y = V + t / 2, octoV3x = e + t, octoV3y = V, octoV4x = e + t, octoV4y = V - t, octoV5x = e + t / 2, octoV5y = V - t - t / 2, octoV6x = e - t / 2, octoV6y = V - t - t / 2, octoV7x = e - t, octoV7y = V - t, octoV8x = e - t, octoV8y = V, octoV9x = e - t / 2, octoV9y = V + t / 2, stroke(0), strokeWeight(x), beginShape(), vertex(octoV1x, octoV1y), vertex(octoV2x, octoV2y), vertex(octoV3x, octoV3y), vertex(octoV4x, octoV4y), vertex(octoV5x, octoV5y), vertex(octoV6x, octoV6y), vertex(octoV7x, octoV7y), vertex(octoV8x, octoV8y), vertex(octoV9x, octoV9y), vertex(octoV1x, octoV1y), endShape()
}

function nona(e, V, t, x) {
    nonaV1x = e - t / 2, nonaV1y = V + t / 2, nonaV2x = e + t / 2, nonaV2y = V + t / 2, nonaV3x = e + t, nonaV3y = V, nonaV4x = e + t + t / 8, nonaV4y = V - t / 1.25, nonaV5x = e + t / 1.5, nonaV5y = V - t - t / 2, nonaV6x = e, nonaV6y = nonaV5y - t / 3.5, nonaV7x = e - t / 1.5, nonaV7y = V - t - t / 2, nonaV8x = e - t - t / 8, nonaV8y = V - t / 1.25, nonaV9x = e - t, nonaV9y = V, nonaV10x = e - t / 2, nonaV10y = V + t / 2, stroke(0), strokeWeight(x), beginShape(), vertex(nonaV1x, nonaV1y), vertex(nonaV2x, nonaV2y), vertex(nonaV3x, nonaV3y), vertex(nonaV4x, nonaV4y), vertex(nonaV5x, nonaV5y), vertex(nonaV6x, nonaV6y), vertex(nonaV7x, nonaV7y), vertex(nonaV8x, nonaV8y), vertex(nonaV9x, nonaV9y), vertex(nonaV10x, nonaV10y), endShape()
}

function heart(e, V, t, x) {
    heartV1x = e - t / 2, heartV1y = V + t / 2, heartV2x = e, heartV2y = V + t, heartV3x = e + t / 2, heartV3y = V + t / 2, heartV4x = e + t, heartV4y = V, heartV5x = e + t + t / 8, heartV5y = V - t / 1.25, heartV6x = e + t / 1.5, heartV6y = V - t - t / 2, heartV7x = e, heartV7y = heartV5y - t / 3.5, heartV8x = e - t / 1.5, heartV8y = V - t - t / 2, heartV9x = e - t - t / 8, heartV9y = V - t / 1.25, heartV10x = e - t, heartV10y = V, heartV11x = e - t / 2, heartV11y = V + t / 2, stroke(0), strokeWeight(x), beginShape(), vertex(heartV1x, heartV1y), vertex(heartV2x, heartV2y), vertex(heartV3x, heartV3y), vertex(heartV4x, heartV4y), vertex(heartV5x, heartV5y), vertex(heartV6x, heartV6y), vertex(heartV7x, heartV7y), vertex(heartV8x, heartV8y), vertex(heartV9x, heartV9y), vertex(heartV10x, heartV10y), vertex(heartV11x, heartV11y), endShape()
}

function center(e) {
    circle(width / 2, height / 2, e)
}

function deca(e, V, t, x) {
    decaV1x = e - t / 1.5, decaV1y = V + t / 2, decaV1_5x = e, decaV1_5y = V + t / 1.5, decaV2x = e + t / 1.5, decaV2y = V + t / 2, decaV3x = e + t, decaV3y = V, decaV4x = e + t + t / 8, decaV4y = V - t / 1.25, decaV5x = e + t / 1.5, decaV5y = V - t - t / 2, decaV6x = e, decaV6y = decaV5y - t / 3.5, decaV7x = e - t / 1.5, decaV7y = V - t - t / 2, decaV8x = e - t - t / 8, decaV8y = V - t / 1.25, decaV9x = e - t, decaV9y = V, decaV10x = e - t / 1.5, decaV10y = V + t / 2, stroke(0), strokeWeight(x), beginShape(), vertex(decaV1x, decaV1y), vertex(decaV1_5x, decaV1_5y), vertex(decaV2x, decaV2y), vertex(decaV3x, decaV3y), vertex(decaV4x, decaV4y), vertex(decaV5x, decaV5y), vertex(decaV6x, decaV6y), vertex(decaV7x, decaV7y), vertex(decaV8x, decaV8y), vertex(decaV9x, decaV9y), vertex(decaV10x, decaV10y), endShape()
}

function trap(e, V, t, x) {
    trapV1x = e - t / 1.5, trapV1y = V + t / 2, trapV2x = e + t / 1.5, trapV2y = V + t / 2, trapV3x = e + t / 2, trapV3y = V - t / 4, trapV4x = e - t / 2, trapV4y = V - t / 4, stroke(0), strokeWeight(x), beginShape(), vertex(trapV1x, trapV1y), vertex(trapV2x, trapV2y), vertex(trapV3x, trapV3y), vertex(trapV4x, trapV4y), vertex(trapV1x, trapV1y), endShape()
}

function rightTri(e, V, t, x) {
    rTriV1x = e - t / 1.5, rTriV1y = V + t / 2, rTriV2x = e + t / 2, rTriV2y = V + t / 2, rTriV3x = e + t / 2, rTriV3y = rTriV2y - 1.5 * t, stroke(0), strokeWeight(x), beginShape(TRIANGLES), vertex(rTriV1x, rTriV1y), vertex(rTriV2x, rTriV2y), vertex(rTriV3x, rTriV3y), vertex(rTriV1x, rTriV1y), endShape()
}
