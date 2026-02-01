import { getContrast, darken, lighten, readableColor } from 'color2k';

// WCAG AA requires:
// - 4.5:1 for normal text
// - 3:1 for large text (18pt+ or 14pt+ bold)

const WCAG_AA_NORMAL = 4.5;
const WCAG_AA_LARGE = 3;

// Brand colors - adjusted for accessibility
export const colors = {
  primary: '#1a1a2e',
  secondary: '#ff6b81',
  accent: '#ffb84d',
  background: '#1a1a2e',
  surface: '#0f0f1a',
};

// Check if a color combination passes WCAG AA
export function passesWCAG(foreground, background, isLargeText = false) {
  const contrast = getContrast(foreground, background);
  const required = isLargeText ? WCAG_AA_LARGE : WCAG_AA_NORMAL;
  return contrast >= required;
}

// Get contrast ratio between two colors
export function getContrastRatio(foreground, background) {
  return getContrast(foreground, background);
}

// Ensure a color has sufficient contrast against a background
// Will lighten or darken the color until it passes WCAG AA
export function ensureContrast(color, background, isLargeText = false) {
  const required = isLargeText ? WCAG_AA_LARGE : WCAG_AA_NORMAL;
  let adjustedColor = color;
  let contrast = getContrast(adjustedColor, background);

  // Determine if we should lighten or darken based on background luminance
  const shouldLighten = readableColor(background) === '#fff';

  let iterations = 0;
  while (contrast < required && iterations < 20) {
    adjustedColor = shouldLighten
      ? lighten(adjustedColor, 0.05)
      : darken(adjustedColor, 0.05);
    contrast = getContrast(adjustedColor, background);
    iterations++;
  }

  return adjustedColor;
}

// Pre-calculated accessible color palette for dark backgrounds
export const accessibleColors = {
  // On dark background (#1a1a2e)
  onDark: {
    primary: '#ff5a7a',      // Brighter red/pink - passes AA on #1a1a2e
    accent: '#ffb347',       // Brighter orange - passes AA on #1a1a2e
    text: '#ffffff',         // White text
    textMuted: '#a0a0b0',    // Muted text that still passes AA (was #808080, now lighter)
    textSubtle: '#8a8a9a',   // Subtle text for large text only
  },
  // On surface background (#0f0f1a)
  onSurface: {
    primary: '#ff5a7a',
    accent: '#ffb347',
    text: '#ffffff',
    textMuted: '#9a9aaa',
    textSubtle: '#8585a0',
  },
  // For use on colored backgrounds
  onPrimary: '#ffffff',
  onAccent: '#1a1a2e',
};

// Get accessible text color for any background
export function getAccessibleTextColor(background) {
  return readableColor(background);
}

// Utility to get opacity that maintains contrast
export function getAccessibleOpacity(color, background, targetContrast = WCAG_AA_NORMAL) {
  // Start with full opacity and reduce until we hit the target
  for (let opacity = 1; opacity >= 0.4; opacity -= 0.05) {
    const withOpacity = `rgba(${hexToRgb(color)}, ${opacity})`;
    // For rgba, we need to blend with background first
    const blended = blendColors(color, background, opacity);
    if (getContrast(blended, background) >= targetContrast) {
      return opacity;
    }
  }
  return 1; // Return full opacity if we can't achieve target
}

// Helper to convert hex to rgb values
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0, 0, 0';
}

// Blend two colors together
function blendColors(foreground, background, opacity) {
  const fg = hexToRgbArray(foreground);
  const bg = hexToRgbArray(background);

  const blended = fg.map((channel, i) =>
    Math.round(channel * opacity + bg[i] * (1 - opacity))
  );

  return `#${blended.map(c => c.toString(16).padStart(2, '0')).join('')}`;
}

function hexToRgbArray(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [0, 0, 0];
}

// Export validated era colors - ensuring all pass WCAG AA on dark backgrounds
export function getAccessibleEraColors(eraColors) {
  const background = '#1a1a2e';
  return eraColors.map(color => ensureContrast(color, background, true));
}
