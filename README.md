# Demo-GrapesJs-React

A Next.js application demonstrating the integration of GrapesJS with React for visual website editing. This project showcases the powerful drag-and-drop website building capabilities of GrapesJS in a modern React/Next.js environment.

![GrapesJS Demo](https://github.com/user-attachments/assets/ecf24f2f-332a-4c60-b6e3-291c184a5a4f)

## Features

- 🎨 **Visual Website Editor** - Drag-and-drop interface for building websites
- 🧩 **Pre-built Blocks** - Ready-to-use components including:
  - Hero sections
  - Cards
  - Text sections
  - Footers
  - And more from the GrapesJS preset webpage plugin
- 🎯 **Live Editing** - Click on any element to edit text, styles, and properties
- 💾 **Code Export** - Export HTML and CSS of your created pages
- ⚡ **Built with Next.js** - Fast, modern React framework with Turbopack
- 🎭 **TypeScript** - Fully typed for better development experience

## Technologies Used

- **Next.js 16** - React framework for production
- **GrapesJS** - Open-source, multi-purpose Web Builder Framework
- **@grapesjs/react** - Official React wrapper for GrapesJS
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended), npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Toffoli-Co-Ltd/Demo-GrapesJs-React.git
cd Demo-GrapesJs-React
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the editor.

### Building for Production

```bash
pnpm run build
pnpm run start
```

## Deployment to Cloudflare Workers

This project is configured to deploy to Cloudflare Workers using OpenNext. It uses Webpack instead of Turbopack for compatibility with the Cloudflare Workers runtime.

### Prerequisites

- Cloudflare account
- Wrangler CLI installed globally (optional, included as dev dependency)
- Cloudflare API token

### Setup

1. **Install Wrangler CLI** (if not using the included dev dependency):
```bash
pnpm add -g wrangler
```

2. **Authenticate with Cloudflare**:
```bash
pnpm exec wrangler auth login
```

3. **Configure your project** (optional):
   - Update `wrangler.jsonc` with your custom domain and settings
   - Add environment variables in `wrangler.jsonc` if needed
   - The `.dev.vars` file is automatically created for local development
   - Static asset caching is configured via `public/_headers`

### Local Development

The project is configured for optimal local development with Cloudflare bindings. All scripts use Webpack for consistency with production builds:

```bash
pnpm run dev  # Standard Next.js development server with Webpack
pnpm run opennext:preview  # Preview in Cloudflare Workers runtime
```

### Deployment

#### Option 1: Using pnpm scripts (recommended)

```bash
# Build and deploy in one command
pnpm run opennext:deploy

# Or build first, then deploy
pnpm run opennext:build
pnpm exec wrangler deploy

# Upload new version (for gradual deployments)
pnpm run opennext:upload

# Generate TypeScript types for Cloudflare environment
pnpm run cf-typegen
```

#### Option 2: Manual deployment

```bash
# Build the OpenNext application
pnpm exec opennextjs-cloudflare build

# Deploy to Cloudflare Workers
pnpm exec wrangler deploy
```

#### Option 3: Preview locally

```bash
# Build and run locally with Wrangler dev server
pnpm run opennext:preview

# Or run Wrangler dev server directly
pnpm exec wrangler dev
```

### Custom Domain (Optional)

To deploy to a custom domain:

1. Update `wrangler.jsonc`:
```jsonc
{
  // ... existing configuration ...
  "routes": [
    {
      "pattern": "your-domain.com/*",
      "zone_name": "your-domain.com"
    }
  ]
}
```

2. Make sure your domain is configured in Cloudflare

### Environment Variables

Add environment variables in `wrangler.jsonc`:

```jsonc
{
  // ... existing configuration ...
  "vars": {
    "MY_VARIABLE": "my_value"
  }
}
```

Or use Wrangler secrets for sensitive data:

```bash
pnpm exec wrangler secret put MY_SECRET
```

### Troubleshooting

- **Build Issues**: Make sure all dependencies are installed with `pnpm install`
- **Deployment Errors**: Check your Cloudflare account permissions and API token
- **Custom Domain**: Ensure your domain is properly configured in Cloudflare DNS

For more information, see:
- [OpenNext Documentation](https://opennext.js.org/)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)

## How to Use

1. **Adding Blocks**: Drag blocks from the right sidebar onto the canvas
2. **Editing Content**: Click on any element in the canvas to select and edit it
3. **Styling**: Use the Styles panel on the right to customize appearance
4. **Export Code**: Click the "Export Code" button to see the generated HTML and CSS in the browser console

## Project Structure

```
Demo-GrapesJs-React/
├── app/
│   ├── components/
│   │   └── GrapesJSEditor.tsx   # Main GrapesJS editor component
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── public/                       # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Customization

### Adding Custom Blocks

Edit `app/components/GrapesJSEditor.tsx` and add blocks in the `onEditor` callback:

```typescript
blockManager.add('my-block', {
  label: 'My Block',
  content: '<div>My custom content</div>',
  category: 'Custom',
});
```

### Configuring GrapesJS Options

Modify the `options` prop in the `GjsEditor` component:

```typescript
<GjsEditor
  options={{
    height: '100vh',
    storageManager: false,
    // Add more options here
  }}
/>
```

## Learn More

- [GrapesJS Documentation](https://grapesjs.com/docs/)
- [GrapesJS React Documentation](https://github.com/GrapesJS/react)
- [Next.js Documentation](https://nextjs.org/docs)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue on the [GitHub repository](https://github.com/Toffoli-Co-Ltd/Demo-GrapesJs-React/issues).