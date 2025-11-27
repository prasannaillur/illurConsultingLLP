# Illur Consulting Website - Hostinger Deployment Guide

## Overview
This guide will help you deploy your static React website to Hostinger premium hosting.

---

## Step 1: Build the Production Version

1. Open terminal/command prompt in your project directory
2. Run the following commands:

```bash
cd frontend
yarn install
yarn build
```

This will create a `build` folder inside the `frontend` directory with all your optimized website files.

---

## Step 2: Connect to Hostinger

### Option A: Using Hostinger File Manager (Easiest)

1. Log in to your Hostinger account at https://hpanel.hostinger.com
2. Go to **Files** → **File Manager**
3. Navigate to the `public_html` folder (this is your website root)
4. **Delete all default files** in public_html (index.html, etc.)
5. **Upload all files** from your `frontend/build` folder:
   - Click **Upload Files**
   - Select all files from the `build` folder
   - Wait for upload to complete

### Option B: Using FTP (Recommended for large files)

1. Download an FTP client like **FileZilla** (free)
2. Get your FTP credentials from Hostinger:
   - Go to **Files** → **FTP Accounts**
   - Note down: Host, Username, Password, Port (usually 21)
3. Connect FileZilla to your Hostinger account
4. Navigate to `public_html` on the remote server
5. Delete all default files in public_html
6. Upload all files from `frontend/build` folder to `public_html`

---

## Step 3: Configure Your Domain

1. In Hostinger panel, go to **Domains**
2. If you want to use **illurconsulting.com**:
   - Make sure the domain points to your Hostinger hosting
   - Update DNS if needed (can take 24-48 hours)
3. Your website will be accessible at your domain

---

## Step 4: Test Your Website

1. Visit your domain (e.g., www.illurconsulting.com)
2. Test the contact form by submitting a test inquiry
3. **First-time FormSubmit Setup:**
   - When you submit the form for the first time, FormSubmit will send a confirmation email to **info@illurconsulting.com**
   - Check your email and click the confirmation link
   - After confirmation, all future form submissions will work automatically

---

## Step 5: SSL Certificate (HTTPS)

1. In Hostinger panel, go to **Security** → **SSL**
2. Enable **Free SSL Certificate** for your domain
3. Wait 10-15 minutes for SSL to activate
4. Your website will be accessible via https://

---

## Important Notes

### Contact Form
- Contact form submissions will be sent to: **info@illurconsulting.com**
- Make sure this email is active and you can receive emails
- First submission requires email confirmation from FormSubmit

### Email Setup
If **info@illurconsulting.com** doesn't exist yet:
1. Go to **Emails** in Hostinger panel
2. Create email account: **info@illurconsulting.com**
3. Set up email forwarding or access via webmail

### Future Updates
When you make changes to your website:
1. Run `yarn build` again in the frontend folder
2. Upload the new `build` folder contents to `public_html`
3. Clear browser cache to see changes

---

## Troubleshooting

**Website shows 404 or blank page:**
- Make sure all files from `build` folder are in `public_html` (not in a subfolder)
- The `index.html` file should be directly in `public_html`

**Images not loading:**
- Check if image URLs are using the correct paths
- Make sure all image files were uploaded

**Contact form not working:**
- Check if you confirmed the FormSubmit email
- Verify **info@illurconsulting.com** is a valid email
- Check spam folder for FormSubmit emails

**CSS/styling issues:**
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Make sure all files from `build/static` folder were uploaded

---

## Support

If you need help:
- Hostinger Support: https://www.hostinger.com/contact
- FormSubmit Documentation: https://formsubmit.co

---

## Cost Summary

✅ **Hostinger Premium Hosting:** Your existing plan (already paid)
✅ **FormSubmit Contact Form:** Free forever
✅ **SSL Certificate:** Free with Hostinger
✅ **Domain (if applicable):** Check your Hostinger plan
✅ **Email Hosting:** Included with Hostinger

**Total Additional Cost: $0** 🎉

---

Good luck with your deployment! Your professional consulting website will be live soon.
