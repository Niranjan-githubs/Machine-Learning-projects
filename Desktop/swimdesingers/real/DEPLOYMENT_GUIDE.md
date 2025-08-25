# 🚀 Vercel Deployment Guide for Swim Designers

## 📋 Prerequisites
- [Vercel Account](https://vercel.com/signup)
- [GitHub/GitLab/Bitbucket Repository](https://github.com)
- Node.js 18+ installed locally

## 🔧 Pre-Deployment Setup

### 1. EmailJS Configuration
Before deploying, you need to set up EmailJS:

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
2. **Create a new Email Service** (Gmail, Outlook, etc.)
3. **Create an Email Template** with these variables:
   - `{{user_name}}` - User's name
   - `{{user_email}}` - User's email  
   - `{{message}}` - User's message
4. **Get your credentials:**
   - Service ID
   - Template ID
   - Public Key

### 2. Update Configuration Files

#### Update `src/components/Footer.tsx`:
```typescript
const EMAIL_SERVICE_ID = 'your_actual_service_id';
const EMAIL_TEMPLATE_ID = 'your_actual_template_id';
const EMAIL_PUBLIC_KEY = 'your_actual_public_key';
```

#### Update `index.html`:
```html
<script type="text/javascript">
  (function() {
    emailjs.init("your_actual_public_key");
  })();
</script>
```

## 🚀 Deployment Steps

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

4. **Follow the prompts:**
   - Link to existing project or create new
   - Set project name
   - Confirm deployment

### Method 2: GitHub Integration

1. **Push your code to GitHub**
2. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Configure build settings:**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. **Click "Deploy"**

## ⚙️ Build Configuration

### Build Settings (Auto-detected by Vercel):
- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node.js Version:** 18.x

### Environment Variables (if needed):
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🔍 Post-Deployment Checklist

### ✅ Verify Deployment:
- [ ] Website loads without errors
- [ ] All pages are accessible
- [ ] Contact form works (test with EmailJS)
- [ ] Images and assets load correctly
- [ ] Mobile responsiveness works
- [ ] Navigation links work properly

### ✅ Performance Check:
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals are good
- [ ] Images are optimized
- [ ] CSS/JS are minified

### ✅ SEO Check:
- [ ] Meta tags are present
- [ ] Title is descriptive
- [ ] Favicon loads correctly
- [ ] Open Graph tags (if needed)

## 🛠️ Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check Node.js version (use 18+)
   - Clear `node_modules` and reinstall
   - Check for TypeScript errors

2. **Contact Form Not Working:**
   - Verify EmailJS credentials
   - Check browser console for errors
   - Ensure EmailJS script loads

3. **Images Not Loading:**
   - Check file paths in `public/` folder
   - Verify image formats (JPG, PNG, WebP)
   - Check file sizes (optimize if needed)

4. **Routing Issues:**
   - Verify `vercel.json` configuration
   - Check for client-side routing conflicts

## 📱 Mobile Optimization

### Responsive Design:
- [ ] Header navigation works on mobile
- [ ] Contact form is mobile-friendly
- [ ] Images scale properly
- [ ] Touch interactions work

### Performance:
- [ ] Images are optimized for mobile
- [ ] CSS is mobile-first
- [ ] Touch targets are 44px minimum

## 🔒 Security Considerations

### Headers (Already configured in vercel.json):
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Cache-Control: public, max-age=31536000, immutable

### Additional Security:
- [ ] HTTPS is enabled (automatic with Vercel)
- [ ] Form validation is client and server-side
- [ ] No sensitive data in client-side code

## 📊 Analytics & Monitoring

### Recommended Tools:
1. **Vercel Analytics** (built-in)
2. **Google Analytics** (if needed)
3. **Sentry** (for error tracking)

## 🚀 Final Deployment Command

```bash
# Build locally first
npm run build

# Deploy to Vercel
vercel --prod

# Or use GitHub integration for automatic deployments
```

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review browser console errors
3. Verify EmailJS configuration
4. Check TypeScript compilation

---

**🎯 Your Swim Designers website is now ready for professional deployment on Vercel!**

**🏊‍♂️ Happy Swimming Pool Design! 🏊‍♂️**
