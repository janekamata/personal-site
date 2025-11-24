# Personal Website

Welcome to my [personal website](https://janekamata.github.io/personal-site/)! This is an [MIT licensed](https://github.com/janekamata/personal-site/blob/main/LICENSE) Next.js-based Jamstack application. It offers a simple interface, easy modifications, static export capabilities, and free automatic deployments via [GitHub Pages](https://pages.github.com/).

## 🚀 Features

- Built with modern TypeScript, using [Next.js 15.4](https://nextjs.org/), [React 19](https://react.dev/), and SCSS.
- Type-safe development with TypeScript strict mode.
- Optimized performance with static export and automatic font optimization.
- Automated workflows via [GitHub Actions](https://github.com/features/actions).
- And more!

## 🔧 Dependencies

Ensure you have [node](https://nodejs.org/) >= v20. Optionally, use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage node versions.

## 🚀 Setup and Running

1. (Optional) Ensure you're on Node v20 or higher:

   ```bash
   nvm install
   node --version
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   By default, the application will be available at [http://localhost:3000/](http://localhost:3000/).

## 🏗 Building for Production

1. Build the static export:

   ```bash
   npm run build
   ```

   The build process automatically creates a static export in the `out/` directory.

2. Preview the production build locally:

   ```bash
   npm run start
   ```

## 🚢 Deploying

### Deploying to GitHub Pages

1. Update the environment variables and Git remote URL in [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).

2. Enable GitHub Actions and Pages for your repository.

3. Push to the `main` branch to trigger automatic deployment.

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

### Static Export

You can export the site as static HTML to host anywhere:

```bash
npm run build
```

The static files will be automatically generated in the `out/` directory.

## 🔬 Testing

```bash
npm run lint          # Run ESLint
npm run type-check    # Run TypeScript type checking
npm run format        # Format code with Prettier
npm run format:check  # Check code formatting
npm test              # Run Jest tests
```

## 📝 License

[MIT](https://github.com/mldangelo/personal-site/blob/main/LICENSE)