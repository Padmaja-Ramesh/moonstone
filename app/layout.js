import '../app/globals.css'; // Import global styles

import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your App Title</title>
      </head>
      <body className="p-4"> {/* Add padding here */}
        <ClerkProvider>
          <main className="max-w-6xl mx-auto"> {/* Center content and limit width */}
            {children}
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
}
