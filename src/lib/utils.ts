/**
 * Get the color name for the current category
 *
 * @param {string} slug
 */
export function getCategoryColor(slug: string): string {
  const colorMap = {
    wordpress: 'red',
    javascript: 'blue',
    courses: 'green',
    general: 'orange',
    frontend: 'purple',
    php: 'pink',
  };

  return colorMap[slug as keyof typeof colorMap] || 'gray';
}
