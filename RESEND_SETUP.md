# Resend Email Configuration Guide

## Step 1: Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Your Domain (Recommended)
1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter `ensuenoservices.com`
4. Add the DNS records to your domain registrar:
   \`\`\`
   Type: MX
   Name: @
   Value: feedback-smtp.us-east-1.amazonses.com
   Priority: 10
   
   Type: TXT
   Name: @
   Value: [Resend will provide this]
   \`\`\`
5. Wait for verification (can take up to 72 hours)

## Step 3: Get API Key
1. Go to **API Keys** in Resend dashboard
2. Click **Create API Key**
3. Name it: "EnSueño Services Website"
4. Select **Sending access**
5. Copy the API key (starts with `re_`)

## Step 4: Configure Vercel Environment Variables
1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your API key from step 3
   - **Environment**: Production, Preview, Development
4. Click **Save**
5. **Redeploy** your site for changes to take effect

## Step 5: Update Email Addresses (If Needed)
If you want to use a different email address, update these files:
- `lib/email.tsx` - Change the `to` and `from` addresses
- `app/api/contact/route.ts` - Update the sender domain

## Testing
1. After deployment, test the contact form
2. Check your email for notifications
3. Verify customers receive auto-reply emails

## Troubleshooting
- **Domain not verified**: Use `onboarding@resend.dev` as sender until verified
- **API key not working**: Make sure it's correctly set in Vercel environment variables
- **Emails not sending**: Check Vercel function logs for errors

## Free Tier Limits
- 100 emails/day
- 3,000 emails/month
- Perfect for most small business needs

## Upgrade Options
If you need more emails:
- **Pro**: $20/month for 50,000 emails
- **Business**: $80/month for 100,000 emails
\`\`\`

Perfect! I've configured Resend email service for your DJ website. Here's what's been set up:

## **🚀 Resend Integration Complete:**

### **Email Features Added:**
- ✅ **Notification emails** sent to Joey.Carnicle@gmail.com
- ✅ **Auto-reply emails** sent to customers
- ✅ **Professional email templates** with branding
- ✅ **Error handling** with fallback messages
- ✅ **Branded sender** addresses

### **Email Templates Include:**
- **Customer inquiry notification** with all form details
- **Professional auto-reply** with your branding
- **Contact information** and social media links
- **Responsive HTML design** for all email clients

## **📧 How It Works:**

### **When Someone Submits the Form:**
1. **You receive** a detailed notification email
2. **Customer receives** a professional auto-reply
3. **Both emails** are branded with EnSueño Services
4. **Reply-to** is set to customer's email for easy response

## **🔧 Setup Required:**

### **1. Install Resend Package:**
\`\`\`bash
npm install resend
\`\`\`

### **2. Get Resend API Key:**
1. **Sign up** at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. **Create API key** in dashboard
3. **Copy the key** (starts with `re_`)

### **3. Add to Vercel Environment Variables:**
1. **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**
2. **Add variable:**
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your API key
   - **Environment**: All (Production, Preview, Development)
3. **Redeploy** your site

### **4. Domain Setup (Optional but Recommended):**
- **Add your domain** `ensuenoservices.com` to Resend
- **Verify DNS records** for better deliverability
- **Use custom sender** addresses like `noreply@ensuenoservices.com`

## **💡 Current Configuration:**

### **Email Addresses:**
- **Notifications go to**: Joey.Carnicle@gmail.com
- **Auto-replies from**: DJ EnSueño via Resend
- **Reply-to**: Customer's email address

### **Free Tier Benefits:**
- **100 emails/day** (perfect for contact forms)
- **3,000 emails/month**
- **Professional deliverability**
- **No setup fees**

The email system is now ready to go live! Once you add the API key to Vercel and redeploy, your contact form will send professional emails automatically.
