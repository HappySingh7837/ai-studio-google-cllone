# Google AI Studio Clone

A functional frontend clone of Google AI Studio built with React, TypeScript, and Tailwind CSS. This project replicates the UI and UX of Google's AI Studio platform with a focus on visual accuracy and responsive design.

## 🚀 Features

- **Homepage** - Landing page with hero section, features showcase, and model comparison
- **Dashboard** - Project management interface with grid/list views and statistics
- **Chat Interface** - Real-time chat simulation with typing indicators and message actions
- **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices
- **Modern UI** - Clean design with hover states, transitions, and proper accessibility

## 🛠️ Tech Stack

- **React 18** - Frontend framework with functional components and hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful icon library
- **shadcn/ui** - High-quality UI components

## 📦 Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd google-ai-studio-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── layout.tsx          # Main app layout with sidebar
│   │   ├── homepage.tsx        # Landing page component
│   │   ├── dashboard.tsx       # Projects dashboard
│   │   └── chat-interface.tsx  # Chat interface
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── App.tsx                # Main app component
│   ├── main.tsx              # App entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── index.html               # HTML template
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🎨 Components Implemented

### Core Layout
- **Layout Component** - Responsive sidebar navigation with mobile menu
- **Top Navigation** - Search bar, notifications, and user profile
- **Sidebar** - Navigation menu with active states and hover effects

### Pages
1. **Homepage (`/`)**
   - Hero section with gradient backgrounds
   - Features showcase with icons and descriptions
   - Model comparison cards (Gemini Pro, Flash, Vision)
   - Call-to-action sections

2. **Dashboard (`/dashboard`)**
   - Project management interface
   - Statistics cards with metrics
   - Grid/list view toggle
   - Project cards with status indicators
   - Filter and search functionality

3. **Chat Interface (`/chat`)**
   - Real-time chat simulation
   - Message bubbles with timestamps
   - Typing indicators
   - Action buttons (copy, thumbs up/down, regenerate)
   - File attachment and voice input buttons

### UI Components
- **Button** - Multiple variants (default, outline, ghost, etc.)
- **Card** - Flexible card component with header, content, and footer
- **Icons** - Lucide React icons throughout the interface

## 🎯 Key Features

### Responsive Design
- Mobile-first approach with breakpoints for tablet and desktop
- Collapsible sidebar for mobile devices
- Responsive grid layouts and typography

### Interactive Elements
- Hover states and focus indicators
- Smooth transitions and animations
- Loading states and typing indicators
- Form validation and user feedback

### Accessibility
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### Tailwind Configuration (`tailwind.config.js`)
- Custom color palette with CSS variables
- Extended spacing and typography scales
- Animation utilities for smooth interactions

## 🚧 Known Limitations

### Functionality
- **No Backend Integration** - This is a frontend-only clone with simulated data
- **No Real AI Integration** - Chat responses are simulated, not connected to actual AI APIs
- **No Authentication** - Login/logout functionality is simulated
- **No Data Persistence** - All data is stored in component state (resets on refresh)

### Design Deviations
- **Simplified Navigation** - Some secondary navigation elements may be simplified
- **Limited Project Types** - Only basic project cards are implemented
- **Placeholder Content** - Uses dummy data instead of real project information
- **Missing Advanced Features** - Some advanced AI Studio features like model fine-tuning are not included

### Technical Limitations
- **Static Routing** - Uses component state for navigation instead of React Router
- **No API Layer** - No backend API integration or data fetching
- **Limited Error Handling** - Basic error states without comprehensive error boundaries

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Purple gradients for AI-related elements
- **Status**: Green (active), Yellow (draft), Gray (paused)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with good line height

### Spacing
- **Consistent Scale**: 4px base unit with 8px, 16px, 24px, 32px increments
- **Component Padding**: Standardized across all components
- **Grid Gaps**: Responsive spacing for different screen sizes

## 🚀 Deployment

### Netlify Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing (if needed)

### Vercel Deployment
1. Connect your repository to Vercel
2. Vercel will automatically detect Vite and configure the build
3. Deploy with zero configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is for educational purposes only. It's a clone of Google AI Studio's interface and is not affiliated with Google.

## 🙏 Acknowledgments

- **Google AI Studio** - Original design inspiration
- **shadcn/ui** - Beautiful UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide** - Icon library
- **Vite** - Fast build tool

---

**Note**: This is a frontend-only clone created for demonstration purposes. For actual AI functionality, you would need to integrate with real AI APIs like Google's Gemini API.