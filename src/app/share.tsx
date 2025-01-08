'use client';
import { useState, useEffect } from 'react';
import Script from 'next/script';

export default function ShareButtons() {
  const [mounted, setMounted] = useState(false); // For handling hydration

  useEffect(() => {
    setMounted(true); // Set mounted to true after component renders
  }, []);

  if (!mounted) {
    // Important for hydration
    return null;
  }
  return (
    <>
      <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
        <a className="a2a_button_twitter"></a>
        <a className="a2a_button_whatsapp"></a>
        <a className="a2a_button_telegram"></a>
        <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
        {/* <a className="a2a_button_facebook"></a> */}
      </div>

      {/* Use next/script for optimal loading */}
      <Script
        id="addtoany-script"
        defer
        src="https://static.addtoany.com/menu/page.js"
        strategy="afterInteractive" // or "lazyOnload"
      />
    </>
  );
}
