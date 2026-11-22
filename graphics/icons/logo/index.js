// @ts-check
/// <reference path="../../../props.js" />

import { resolveRenderStyle } from "../../helperFunctions/helpers";
import { renderPolygon } from "../../render/polygon";
import { getLogoGeometry } from "./geometry";

/**
 * 
 * @param {number} size 
 * @param {RenderStyle} style
 * @returns {string}
 */
export function createLogo(size, style){
    const geometry = getLogoGeometry();

    const resolvedStyle = resolveRenderStyle(style);

    const polygon = renderPolygon(geometry, resolvedStyle);

    return `<svg viewBox="0 0 1 1" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    ${polygon}
    </svg>`;
}