/**
 * Helper function to detect video URL type and return embed URL
 * Supports YouTube, Vimeo, direct video files, and LinkedIn embeds
 */
export function getVideoEmbedUrl(url: string): string | null {
  // YouTube URLs
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const youtubeMatch = url.match(youtubeRegex);
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  // Vimeo URLs
  const vimeoRegex = /(?:vimeo\.com\/)(?:.*\/)?(\d+)/;
  const vimeoMatch = url.match(vimeoRegex);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  // Direct video URLs (mp4, webm, etc.)
  if (url.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i)) {
    return url;
  }

  // LinkedIn embed URLs (keep as-is)
  if (url.includes('linkedin.com/embed')) {
    return url;
  }

  return null;
}

