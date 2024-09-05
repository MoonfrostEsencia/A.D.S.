import React from 'react';
import HeroVideoDialog from "@/components/example/vids";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      {/* Light mode (non-dark) */}
      <div className="dark:hidden block">
        <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            src="https://www.instagram.com/p/C9w26r8tVaq/embed"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            scrolling="no"
            frameBorder="0"
            allowTransparency
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>

      {/* Dark mode */}
      <div className="hidden dark:block">
        <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            src="https://www.instagram.com/p/C9w26r8tVaq/embed"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            scrolling="no"
            frameBorder="0"
            allowTransparency
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default HeroVideoDialogDemo;
