/**
 * Sosyal medya platformları – kullanıcı sayısına göre sıralı (yaklaşık).
 * simple-icons slug'ları kullanılır (https://simpleicons.org).
 */
export type SocialPlatform = {
  id: string
  name: string
  slug: string
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  { id: 'facebook', name: 'Facebook', slug: 'facebook' },
  { id: 'youtube', name: 'YouTube', slug: 'youtube' },
  { id: 'whatsapp', name: 'WhatsApp', slug: 'whatsapp' },
  { id: 'instagram', name: 'Instagram', slug: 'instagram' },
  { id: 'tiktok', name: 'TikTok', slug: 'tiktok' },
  { id: 'wechat', name: 'WeChat', slug: 'wechat' },
  { id: 'telegram', name: 'Telegram', slug: 'telegram' },
  { id: 'linkedin', name: 'LinkedIn', slug: 'linkedin' },
  { id: 'website', name: 'Website', slug: 'website' },
  { id: 'snapchat', name: 'Snapchat', slug: 'snapchat' },
  { id: 'x', name: 'X (Twitter)', slug: 'x' },
  { id: 'pinterest', name: 'Pinterest', slug: 'pinterest' },
  { id: 'reddit', name: 'Reddit', slug: 'reddit' },
  { id: 'discord', name: 'Discord', slug: 'discord' },
  { id: 'zoom', name: 'Zoom', slug: 'zoom' },
  { id: 'twitch', name: 'Twitch', slug: 'twitch' },
  { id: 'line', name: 'LINE', slug: 'line' },
  { id: 'viber', name: 'Viber', slug: 'viber' },
  { id: 'vk', name: 'VK', slug: 'vk' },
  { id: 'tumblr', name: 'Tumblr', slug: 'tumblr' },
  { id: 'medium', name: 'Medium', slug: 'medium' },
  { id: 'spotify', name: 'Spotify', slug: 'spotify' },
  { id: 'github', name: 'GitHub', slug: 'github' },
  { id: 'skype', name: 'Skype', slug: 'skype' },
  { id: 'slack', name: 'Slack', slug: 'slack' },
  { id: 'figma', name: 'Figma', slug: 'figma' },
  { id: 'soundcloud', name: 'SoundCloud', slug: 'soundcloud' },
  { id: 'quora', name: 'Quora', slug: 'quora' },
  { id: 'gitlab', name: 'GitLab', slug: 'gitlab' },
  { id: 'stackoverflow', name: 'Stack Overflow', slug: 'stackoverflow' },
  { id: 'dribbble', name: 'Dribbble', slug: 'dribbble' },
  { id: 'behance', name: 'Behance', slug: 'behance' },
  { id: 'flickr', name: 'Flickr', slug: 'flickr' },
  { id: 'linktree', name: 'Linktree', slug: 'linktree' },
  { id: 'threads', name: 'Threads', slug: 'threads' },
  { id: 'bluesky', name: 'Bluesky', slug: 'bluesky' },
  { id: 'mastodon', name: 'Mastodon', slug: 'mastodon' },
  { id: 'substack', name: 'Substack', slug: 'substack' },
  { id: 'notion', name: 'Notion', slug: 'notion' },
  { id: 'airbnb', name: 'Airbnb', slug: 'airbnb' },
  { id: 'tripadvisor', name: 'Tripadvisor', slug: 'tripadvisor' },
]
