'use client';
import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Mail, Link2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ShareButtons: React.FC = () => {
  const [copying, setCopying] = useState(false);
  
  // Get current page URL and title
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const currentTitle = typeof window !== 'undefined' ? document.title : 'Check out this IPO';
  
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(currentTitle);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`, // Updated WhatsApp link
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=Check%20out%20this%20IPO:%20${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      setCopying(true);
      await navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!'); // Simple alert for feedback
    } catch (err) {
      alert('Failed to copy link');
    } finally {
      setCopying(false);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      {/* Facebook */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareLinks.facebook, '_blank')}
        aria-label="Share on Facebook"
        className="hover:bg-blue-50"
      >
        <Facebook className="h-5 w-5 text-[#1877F2]" />
      </Button>

      {/* Twitter */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareLinks.twitter, '_blank')}
        aria-label="Share on Twitter"
        className="hover:bg-sky-50"
      >
        <Twitter className="h-5 w-5 text-[#1DA1F2]" />
      </Button>

      {/* LinkedIn */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareLinks.linkedin, '_blank')}
        aria-label="Share on LinkedIn"
        className="hover:bg-blue-50"
      >
        <Linkedin className="h-5 w-5 text-[#0A66C2]" />
      </Button>

      {/* WhatsApp */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareLinks.whatsapp, '_blank')}
        aria-label="Share on WhatsApp"
        className="hover:bg-green-50"
      >
        <MessageCircle className="h-5 w-5 text-[#25D366]" />
      </Button>

      {/* Telegram */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareLinks.telegram, '_blank')}
        aria-label="Share on Telegram"
        className="hover:bg-sky-50"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0088cc]" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      </Button>

      {/* Email */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareLinks.email, '_blank')}
        aria-label="Share via Email"
        className="hover:bg-gray-100"
      >
        <Mail className="h-5 w-5 text-gray-600" />
      </Button>

      {/* Copy Link */}
      <Button
        variant="outline"
        size="icon"
        onClick={copyToClipboard}
        aria-label="Copy Link"
        className="hover:bg-gray-100"
      >
        <Link2 className="h-5 w-5 text-gray-600" />
      </Button>
    </div>
  );
};

export default ShareButtons;