# Deployment Configuration Guide

This project supports deployment to both **Vercel** and **Cloudflare Workers** with automatic bundler detection.

## Build Scripts Overview

| Script | Bundler | Platform | Use Case |
|--------|---------|----------|----------|
| `pnpm run build` | Webpack | Cloudflare (default) | Local development targeting Cloudflare |
| `pnpm run build:turbo` | Turbopack | Vercel | Quick builds with less verbose output |
| `pnpm run build:vercel` | Turbopack | Vercel | Explicit Vercel build |
| `pnpm run build:cloudflare` | Webpack + OpenNext | Cloudflare | Full Cloudflare Workers build |
| `pnpm run dev` | Webpack | Development | Local dev with Cloudflare target |
| `pnpm run dev:turbo` | Turbopack | Development | Local dev with Vercel target |

## Deployment to Vercel

### Method 1: Automatic (Recommended)
1. Connect your GitHub repo to Vercel
2. Set build command: **`pnpm run build:vercel`** (or leave default - Vercel will auto-detect)
3. No special configuration needed - the environment will automatically use Turbopack

### Method 2: Manual Configuration
```json
{
  "buildCommand": "pnpm run build:vercel",
  "installCommand": "pnpm install"
}
```

### Why Turbopack for Vercel?
- **Less verbose output** → Avoids EPIPE errors from log overflow
- **Faster builds** → ~4-5 seconds vs 8-9 seconds with Webpack
- **Better compatibility** → Vercel optimizes for Turbopack

## Deployment to Cloudflare Workers

### Method 1: Using OpenNext CLI
```bash
pnpm run opennext:deploy
```

### Method 2: Build and Upload
```bash
pnpm run build:cloudflare
pnpm run opennext:upload
```

### Method 3: Preview Deployment
```bash
pnpm run opennext:preview:branch
```

### Configuration
- **Bundler**: Webpack (as configured in `next.config.ts`)
- **Caching**: R2 incremental cache (configured in `open-next.config.ts`)
- **Environment Detection**: Automatic based on `WRANGLER_AUTH` or `NEXT_BUNDLER_TARGET`

## Environment Detection

The build system automatically detects the target platform:

```typescript
const isVercel = !!process.env.VERCEL;
const isCloudflare = process.env.NEXT_BUNDLER_TARGET === "webpack" || !!process.env.WRANGLER_AUTH;
```

### Automatic Detection:
- **Vercel**: Sets `VERCEL` environment variable automatically
- **Cloudflare**: Sets `WRANGLER_AUTH` when using wrangler CLI
- **Local Dev**: Defaults to Cloudflare unless `VERCEL=1` is set

## Environment Variables

### For Vercel
```
# No special env vars needed, uses Turbopack automatically
VERCEL=1  # Set automatically by Vercel
```

### For Cloudflare
```
WRANGLER_AUTH=<your_cloudflare_token>
CLOUDFLARE_ACCOUNT_ID=<your_account_id>
CLOUDFLARE_API_TOKEN=<your_api_token>
```

## Webpack vs Turbopack Trade-offs

| Aspect | Webpack | Turbopack |
|--------|---------|-----------|
| Output Verbosity | High | Low |
| Build Time | 8-9s | 4-5s |
| EPIPE Risk | Yes | No |
| Stability | Mature | Newer |
| Cloudflare Compatibility | Best | Compatible |
| Vercel Optimization | Good | Excellent |

## Troubleshooting

### EPIPE Error on Vercel
- Use `pnpm run build:turbo` or `pnpm run build:vercel`
- Vercel will automatically use Turbopack instead of Webpack
- The grep filter in the build script also reduces output verbosity

### Build Failures on Cloudflare
- Ensure `WRANGLER_AUTH` is set
- Use `pnpm run build:cloudflare` explicitly
- Check `open-next.config.ts` for R2 configuration

### Turbopack Warnings
- The workspace root warning can be ignored or fixed by setting `turbopack.root` in `next.config.ts`
- This occurs because there are multiple lockfiles in parent directories

## Local Development

### For Cloudflare Development
```bash
pnpm run dev
# Uses Webpack, simulates Cloudflare Workers environment
```

### For Vercel Development  
```bash
pnpm run dev:turbo
# Uses Turbopack, similar to Vercel production
```

## GitHub Actions / CI/CD

### Vercel Deployment
```yaml
- name: Build for Vercel
  run: pnpm run build:vercel
```

### Cloudflare Deployment
```yaml
- name: Build for Cloudflare
  run: pnpm run build:cloudflare
```

## Summary

✅ **Vercel**: Uses `pnpm run build:vercel` → Turbopack → No EPIPE errors  
✅ **Cloudflare**: Uses `pnpm run build:cloudflare` → Webpack + OpenNext → Full CF support  
✅ **Default**: Uses `pnpm run build` → Webpack → Cloudflare-first development
