# How to Use This Web Component in Another Next.js Project

## Step 1: Deploy and Get the Public URL

After deploying to Vercel, your web component will be available at:
```
https://your-project.vercel.app/calendar-webcomponent.mjs
```

Make sure the file is in the `public` folder (or `dist` folder if configured to be served statically).

## Step 2: Use in Another Next.js Project

### Option A: Using a Client Component Wrapper (Recommended)

Create a component that loads the web component:

```tsx
// components/CalendarWebComponent.tsx
"use client";

import { useEffect, useRef } from "react";

interface CalendarWebComponentProps {
  // Add any props you want to pass to the web component
  className?: string;
}

export default function CalendarWebComponent({ className }: CalendarWebComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Only load the script once
    if (scriptLoadedRef.current) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://your-project.vercel.app/calendar-webcomponent.mjs";
    script.onload = () => {
      scriptLoadedRef.current = true;
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script if component unmounts
      const existingScript = document.querySelector(
        `script[src="https://your-project.vercel.app/calendar-webcomponent.mjs"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <calendar-webcomponent></calendar-webcomponent>
    </div>
  );
}
```

Then use it in your pages:

```tsx
// app/page.tsx or pages/index.tsx
import CalendarWebComponent from "@/components/CalendarWebComponent";

export default function Home() {
  return (
    <div>
      <h1>My Page</h1>
      <CalendarWebComponent />
    </div>
  );
}
```

### Option B: Direct Script Tag in Layout

Add the script to your root layout:

```tsx
// app/layout.tsx
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://your-project.vercel.app/calendar-webcomponent.mjs"
          type="module"
          strategy="lazyOnload"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

Then use the custom element directly:

```tsx
// app/page.tsx
export default function Home() {
  return (
    <div>
      <h1>My Page</h1>
      <calendar-webcomponent></calendar-webcomponent>
    </div>
  );
}
```

### Option C: Dynamic Import (For Better Control)

```tsx
// components/CalendarWebComponent.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function CalendarWebComponent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import the module
    import("https://your-project.vercel.app/calendar-webcomponent.mjs")
      .then(() => {
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Failed to load web component:", error);
      });
  }, []);

  if (!isLoaded) {
    return <div>Loading calendar component...</div>;
  }

  return (
    <div ref={containerRef}>
      <calendar-webcomponent></calendar-webcomponent>
    </div>
  );
}
```

## Important Notes

1. **React and ReactDOM**: Since the web component uses React internally, make sure your Next.js project has React installed (it should by default).

2. **Shadow DOM**: The web component uses Shadow DOM, so global CSS styles won't apply to it. If you need styling, you'll need to:
   - Pass styles via CSS variables
   - Include styles within the web component itself
   - Or modify the web component to not use Shadow DOM

3. **TypeScript**: If using TypeScript, you may need to declare the custom element:
   ```ts
   // types/web-components.d.ts
   declare namespace JSX {
     interface IntrinsicElements {
       "calendar-webcomponent": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
     }
   }
   ```

4. **CORS**: Make sure your Vercel deployment allows CORS if accessing from a different domain.

## Example: Complete Usage

```tsx
// app/page.tsx
"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Load the web component script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://your-project.vercel.app/calendar-webcomponent.mjs";
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        `script[src="https://your-project.vercel.app/calendar-webcomponent.mjs"]`
      );
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Application</h1>
      <calendar-webcomponent></calendar-webcomponent>
    </main>
  );
}
```

