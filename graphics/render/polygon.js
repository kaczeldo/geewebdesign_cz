// @ts-check
/// <reference path="../../props.js" />

/**
 * 
 * @param {PolygonPoint[]} polygon 
 * @param {ResolvedRenderStyle} style 
 * @returns {string}
 */
export function renderPolygon(polygon, style){
    const points = convertMultiplePoints(polygon);

    return `<polygon points="${points}" style="fill:${style.fill};stroke:${style.stroke};stroke-width:${style.strokeWidth}" />`;
}

/**
 * 
 * @param {PolygonPoint} point 
 * @returns {string}
 */
function convertToPolygonPoint(point){
    return `${point.x},${point.y}`;
}

/**
 * 
 * @param {PolygonPoint[]} points 
 * @returns {string}
 */
function convertMultiplePoints(points){
    let svg = ``;
    for (const point of points){
        svg += convertToPolygonPoint(point);
        svg += " ";
    }

    return svg;
}