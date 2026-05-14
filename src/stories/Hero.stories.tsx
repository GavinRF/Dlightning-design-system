// Hero.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Hero } from './Hero.tsx';
import './Hero.css';

// Mock Button component for stories (replace with your actual Button)
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => (
  <button 
    style={{
      padding: variant === 'secondary' ? '12px 24px' : '14px 28px',
      backgroundColor: variant === 'secondary' ? 'transparent' : '#ffffff',
      color: variant === 'secondary' ? '#ffffff' : '#0181F5',
      border: variant === 'secondary' ? '2px solid white' : 'none',
      borderRadius: '6px',
      fontWeight: '500',
      fontSize: '16px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block'
    }}
    {...props}
  >
    {children}
  </button>
);

const meta: Meta<typeof Hero> = {
  title: 'Design System/Hero',
  component: Hero,
  parameters: {
    docs: {
      description: {
        component: 'A flexible hero section component for landing pages and marketing content. Supports multiple variants, custom actions, and background images.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'light', 'dark', 'success', 'image', 'centered', 'minimal'],
      description: 'Visual style variant of the hero section',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    title: {
      control: { type: 'text' },
      description: 'Main heading text',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Small text above the title',
    },
    description: {
      control: { type: 'text' },
      description: 'Description text below the title',
    },
    backgroundImage: {
      control: { type: 'text' },
      description: 'URL for background image (use with image variant)',
    },
    primaryAction: {
      control: false,
      description: 'Primary action element (usually a button)',
    },
    secondaryAction: {
      control: false,
      description: 'Secondary action element (usually a button)',
    },
    children: {
      control: false,
      description: 'Custom content to render below actions',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

// Default story
export const Default: Story = {
  args: {
    title: 'Build Amazing Products',
    subtitle: 'Product Development',
    description: 'Create exceptional user experiences with our comprehensive design and development tools.',
    primaryAction: <Button>Get Started</Button>,
    secondaryAction: <Button variant="secondary">Learn More</Button>,
  },
};

// All variants showcase
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Hero
        variant="default"
        title="Default Hero"
        subtitle="Design System"
        description="Beautiful gradient background with white text"
        primaryAction={<Button>Primary Action</Button>}
      />
      
      <Hero
        variant="light"
        title="Light Hero"
        subtitle="Clean & Minimal"
        description="Light background perfect for content-heavy pages"
        primaryAction={<Button>Get Started</Button>}
      />
      
      <Hero
        variant="dark"
        title="Dark Hero"
        subtitle="Professional"
        description="Dark theme for sophisticated applications"
        primaryAction={<Button>Explore</Button>}
      />
      
      <Hero
        variant="success"
        title="Success Hero"
        subtitle="Achievement"
        description="Perfect for success pages and positive messaging"
        primaryAction={<Button>Continue</Button>}
      />
    </div>
  ),
};

// Centered layout
export const Centered: Story = {
  args: {
    variant: 'centered',
    title: 'Welcome to Our Platform',
    subtitle: 'Innovation Hub',
    description: 'Discover the tools and resources you need to bring your ideas to life. Join thousands of creators building the future.',
    primaryAction: <Button>Start Building</Button>,
    secondaryAction: <Button variant="secondary">Watch Demo</Button>,
  },
};

// With background image
export const WithBackgroundImage: Story = {
  args: {
    variant: 'image',
    title: 'Transform Your Business',
    subtitle: 'Digital Solutions',
    description: 'Leverage cutting-edge technology to drive growth and innovation in your organization.',
    backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    primaryAction: <Button>Schedule Demo</Button>,
    secondaryAction: <Button variant="secondary">View Case Studies</Button>,
  },
};

// Minimal variant
export const Minimal: Story = {
  args: {
    variant: 'minimal',
    title: 'Documentation',
    subtitle: 'Getting Started',
    description: 'Everything you need to know to get up and running quickly.',
    primaryAction: <Button>Read Docs</Button>,
  },
};

// Business Idea Generator example (inspired by your existing content)
export const BusinessIdeaGenerator: Story = {
  args: {
    variant: 'default',
    title: 'Generate Your Next Big Business Idea',
    subtitle: 'AI-Powered Innovation',
    description: 'Answer a few questions about your interests and personality to get personalized business concepts with detailed implementation plans.',
    primaryAction: <Button>⚡ Generate Ideas</Button>,
    secondaryAction: <Button variant="secondary">View Examples</Button>,
  },
};

// UX Tools example
export const UXTools: Story = {
  args: {
    variant: 'dark',
    title: 'Design Better User Experiences',
    subtitle: 'UX Decision Tools',
    description: 'Interactive decision trees and assessments to guide your UX strategy and improve your design process.',
    primaryAction: <Button>🎨 Explore Tools</Button>,
    secondaryAction: <Button variant="secondary">Take Assessment</Button>,
  },
};

// Custom content example
export const WithCustomContent: Story = {
  render: () => (
    <Hero
      variant="light"
      title="Advanced Analytics Dashboard"
      subtitle="Data Insights"
      description="Get real-time insights into your business performance with our comprehensive analytics platform."
      primaryAction={<Button>Start Free Trial</Button>}
    >
      <div style={{ 
        marginTop: '32px', 
        display: 'flex', 
        gap: '24px', 
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{ 
          padding: '12px 20px', 
          background: '#e8f4fd', 
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          ✓ No credit card required
        </div>
        <div style={{ 
          padding: '12px 20px', 
          background: '#e8f4fd', 
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          ✓ 14-day free trial
        </div>
        <div style={{ 
          padding: '12px 20px', 
          background: '#e8f4fd', 
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          ✓ Cancel anytime
        </div>
      </div>
    </Hero>
  ),
};

// Interactive playground
export const Interactive: Story = {
  args: {
    variant: 'default',
    title: 'Interactive Hero Example',
    subtitle: 'Playground',
    description: 'Use the controls below to customize this hero section and see how it responds to different configurations.',
    primaryAction: <Button>Primary Button</Button>,
    secondaryAction: <Button variant="secondary">Secondary Button</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Try changing the controls below to see how the hero section adapts to different content and styling options.',
      },
    },
  },
};