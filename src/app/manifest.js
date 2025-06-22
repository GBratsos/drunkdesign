export default function manifest() {
  return {
    name: 'Drunk Design | Creative studio',
    short_name: 'Drunk Design',
    description:
      'We are a creative studio formed by a visual communication designer and a developer. We specialize in visual identity, product and packaging design, websites, social media content, and video production delivering integrated branding and digital presence solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#252525',
    theme_color: '#252525',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
