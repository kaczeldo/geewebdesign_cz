// @ts-check
/// <reference path="../../props.js" />

/**
 * 
 * @param {RenderStyle} style 
 * @returns {ResolvedRenderStyle}
 */
export function resolveRenderStyle(style){

    /**
     * @type {ResolvedRenderStyle}
     */
    const defaultStyle = {
        fill: "black",
        stroke: "black",
        strokeWidth: 1
    };

    return {
        fill: style.fill ?? defaultStyle.fill,
        stroke: style.stroke ?? defaultStyle.stroke,
        strokeWidth: style.strokeWidth ?? defaultStyle.strokeWidth
    };
}