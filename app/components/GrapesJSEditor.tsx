'use client';

import GjsEditor, { AssetsProvider, Canvas, LayersProvider, PagesProvider, SelectorsProvider, StylesProvider, TraitsProvider, BlocksProvider } from '@grapesjs/react';
import type { Editor } from 'grapesjs';
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import { useRef } from 'react';
import 'grapesjs/dist/css/grapes.min.css';

export default function GrapesJSEditor() {
  const editorRef = useRef<Editor | null>(null);

  const onEditor = (editor: Editor) => {
    editorRef.current = editor;
    
    // Add initial landing page content
    editor.setComponents(`
      <!-- Navigation -->
      <nav style="position: fixed; top: 0; width: 100%; background: white; padding: 15px 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); z-index: 1000;">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
          <div style="font-size: 24px; font-weight: bold; color: #333;">Your Brand</div>
          <div style="display: flex; gap: 20px;">
            <a href="#features" style="color: #666; text-decoration: none;">Features</a>
            <a href="#pricing" style="color: #666; text-decoration: none;">Pricing</a>
            <a href="#contact" style="color: #666; text-decoration: none;">Contact</a>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section style="padding: 120px 20px 80px; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; min-height: 100vh; display: flex; align-items: center;">
        <div style="max-width: 800px; margin: 0 auto;">
          <h1 style="font-size: 56px; margin-bottom: 20px; line-height: 1.2;">Build Stunning Websites Visually</h1>
          <p style="font-size: 20px; margin-bottom: 40px; opacity: 0.9;">Create professional websites with our drag-and-drop editor. No coding required.</p>
          <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <a href="#" style="display: inline-block; padding: 16px 32px; background-color: white; color: #667eea; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px;">Start Building</a>
            <a href="#" style="display: inline-block; padding: 16px 32px; background-color: transparent; color: white; text-decoration: none; border-radius: 8px; border: 2px solid white; font-weight: bold; font-size: 18px;">Watch Demo</a>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" style="padding: 80px 20px; background-color: #f8f9fa;">
        <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
          <h2 style="font-size: 42px; margin-bottom: 20px; color: #333;">Powerful Features</h2>
          <p style="font-size: 18px; color: #666; margin-bottom: 60px;">Everything you need to create amazing websites</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
            <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <div style="font-size: 48px; margin-bottom: 20px;">🚀</div>
              <h3 style="font-size: 24px; margin-bottom: 15px; color: #333;">Lightning Fast</h3>
              <p style="color: #666; line-height: 1.6;">Build websites in minutes with our intuitive drag-and-drop interface.</p>
            </div>
            <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <div style="font-size: 48px; margin-bottom: 20px;">🎨</div>
              <h3 style="font-size: 24px; margin-bottom: 15px; color: #333;">Fully Customizable</h3>
              <p style="color: #666; line-height: 1.6;">Customize every aspect of your website with advanced styling options.</p>
            </div>
            <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <div style="font-size: 48px; margin-bottom: 20px;">📱</div>
              <h3 style="font-size: 24px; margin-bottom: 15px; color: #333;">Mobile Responsive</h3>
              <p style="color: #666; line-height: 1.6;">Your websites look perfect on all devices, from mobile to desktop.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section style="padding: 80px 20px; background-color: white;">
        <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
          <h2 style="font-size: 42px; margin-bottom: 20px; color: #333;">What Our Users Say</h2>
          <p style="font-size: 18px; color: #666; margin-bottom: 60px;">Join thousands of satisfied customers</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px;">
            <div style="background: #f8f9fa; padding: 40px 30px; border-radius: 12px;">
              <div style="font-size: 64px; margin-bottom: 20px; color: #ffd700;">"</div>
              <p style="font-size: 16px; color: #666; margin-bottom: 20px; line-height: 1.6;">This editor changed how I build websites. So easy and powerful!</p>
              <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
                <img src="https://via.placeholder.com/50x50" alt="User" style="border-radius: 50%;">
                <div style="text-align: left;">
                  <div style="font-weight: bold; color: #333;">Sarah Johnson</div>
                  <div style="color: #666; font-size: 14px;">Web Designer</div>
                </div>
              </div>
            </div>
            <div style="background: #f8f9fa; padding: 40px 30px; border-radius: 12px;">
              <div style="font-size: 64px; margin-bottom: 20px; color: #ffd700;">"</div>
              <p style="font-size: 16px; color: #666; margin-bottom: 20px; line-height: 1.6;">Perfect for non-technical users. Highly recommend!</p>
              <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
                <img src="https://via.placeholder.com/50x50" alt="User" style="border-radius: 50%;">
                <div style="text-align: left;">
                  <div style="font-weight: bold; color: #333;">Mike Chen</div>
                  <div style="color: #666; font-size: 14px;">Small Business Owner</div>
                </div>
              </div>
            </div>
            <div style="background: #f8f9fa; padding: 40px 30px; border-radius: 12px;">
              <div style="font-size: 64px; margin-bottom: 20px; color: #ffd700;">"</div>
              <p style="font-size: 16px; color: #666; margin-bottom: 20px; line-height: 1.6;">The best visual editor I've ever used. Game changer!</p>
              <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
                <img src="https://via.placeholder.com/50x50" alt="User" style="border-radius: 50%;">
                <div style="text-align: left;">
                  <div style="font-weight: bold; color: #333;">Emma Davis</div>
                  <div style="color: #666; font-size: 14px;">Marketing Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section id="pricing" style="padding: 80px 20px; background-color: #f8f9fa;">
        <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
          <h2 style="font-size: 42px; margin-bottom: 20px; color: #333;">Simple Pricing</h2>
          <p style="font-size: 18px; color: #666; margin-bottom: 60px;">Choose the plan that fits your needs</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
            <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <h3 style="font-size: 24px; margin-bottom: 10px; color: #333;">Starter</h3>
              <div style="font-size: 48px; font-weight: bold; color: #667eea; margin-bottom: 20px;">$9<span style="font-size: 24px;">/mo</span></div>
              <ul style="list-style: none; padding: 0; margin-bottom: 30px; text-align: left;">
                <li style="margin-bottom: 10px; color: #666;">✓ 5 Websites</li>
                <li style="margin-bottom: 10px; color: #666;">✓ Basic Templates</li>
                <li style="margin-bottom: 10px; color: #666;">✓ Email Support</li>
              </ul>
              <a href="#" style="display: inline-block; padding: 12px 24px; background-color: #667eea; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">Get Started</a>
            </div>
            <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: 3px solid #667eea; position: relative;">
              <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #667eea; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold;">POPULAR</div>
              <h3 style="font-size: 24px; margin-bottom: 10px; color: #333;">Professional</h3>
              <div style="font-size: 48px; font-weight: bold; color: #667eea; margin-bottom: 20px;">$29<span style="font-size: 24px;">/mo</span></div>
              <ul style="list-style: none; padding: 0; margin-bottom: 30px; text-align: left;">
                <li style="margin-bottom: 10px; color: #666;">✓ Unlimited Websites</li>
                <li style="margin-bottom: 10px; color: #666;">✓ Premium Templates</li>
                <li style="margin-bottom: 10px; color: #666;">✓ Priority Support</li>
                <li style="margin-bottom: 10px; color: #666;">✓ Custom Domain</li>
              </ul>
              <a href="#" style="display: inline-block; padding: 12px 24px; background-color: #667eea; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">Get Started</a>
            </div>
            <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <h3 style="font-size: 24px; margin-bottom: 10px; color: #333;">Enterprise</h3>
              <div style="font-size: 48px; font-weight: bold; color: #667eea; margin-bottom: 20px;">$99<span style="font-size: 24px;">/mo</span></div>
              <ul style="list-style: none; padding: 0; margin-bottom: 30px; text-align: left;">
                <li style="margin-bottom: 10px; color: #666;">✓ Everything in Pro</li>
                <li style="margin-bottom: 10px; color: #666;">✓ White-label</li>
                <li style="margin-bottom: 10px; color: #666;">✓ 24/7 Support</li>
                <li style="margin-bottom: 10px; color: #666;">✓ API Access</li>
              </ul>
              <a href="#" style="display: inline-block; padding: 12px 24px; background-color: #667eea; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" style="padding: 80px 20px; background-color: white;">
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
          <h2 style="font-size: 42px; margin-bottom: 20px; color: #333;">Get Started Today</h2>
          <p style="font-size: 18px; color: #666; margin-bottom: 40px;">Ready to build amazing websites? Let's get you started!</p>
          <form style="display: grid; gap: 20px; max-width: 500px; margin: 0 auto;">
            <input type="text" placeholder="Your Name" style="padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
            <input type="email" placeholder="Your Email" style="padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
            <textarea placeholder="Tell us about your project" rows="4" style="padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; resize: vertical;"></textarea>
            <button type="submit" style="padding: 15px 30px; background-color: #667eea; color: white; border: none; border-radius: 8px; font-size: 18px; font-weight: bold; cursor: pointer;">Send Message</button>
          </form>
        </div>
      </section>

      <!-- Footer -->
      <footer style="padding: 40px 20px; background-color: #333; color: white;">
        <div style="max-width: 1200px; margin: 0 auto;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px;">
            <div>
              <div style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">Your Brand</div>
              <p style="color: #ccc; line-height: 1.6;">Building the future of website creation, one drag at a time.</p>
            </div>
            <div>
              <h4 style="margin-bottom: 15px; color: white;">Product</h4>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 8px;"><a href="#" style="color: #ccc; text-decoration: none;">Features</a></li>
                <li style="margin-bottom: 8px;"><a href="#" style="color: #ccc; text-decoration: none;">Templates</a></li>
                <li style="margin-bottom: 8px;"><a href="#" style="color: #ccc; text-decoration: none;">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 style="margin-bottom: 15px; color: white;">Company</h4>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 8px;"><a href="#" style="color: #ccc; text-decoration: none;">About</a></li>
                <li style="margin-bottom: 8px;"><a href="#" style="color: #ccc; text-decoration: none;">Blog</a></li>
                <li style="margin-bottom: 8px;"><a href="#" style="color: #ccc; text-decoration: none;">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 style="margin-bottom: 15px; color: white;">Support</h4>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 8px;"><a href="#" style="color: #ccc; text-decoration: none;">Help Center</a></li>
                <li style="margin-bottom: 8px;"><a href="#" style="color: #ccc; text-decoration: none;">Contact</a></li>
                <li style="margin-bottom: 8px;"><a href="#" style="color: #ccc; text-decoration: none;">Status</a></li>
              </ul>
            </div>
          </div>
          <div style="border-top: 1px solid #555; margin-top: 40px; padding-top: 20px; text-align: center; color: #ccc;">
            <p>&copy; 2024 Your Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `);

    // Add custom blocks
    const blockManager = editor.BlockManager;
    blockManager.add('section', {
      label: 'Section',
      content: `
        <section style="padding: 50px 20px; text-align: center; background-color: #f5f5f5;">
          <h1>Welcome to GrapesJS Demo</h1>
          <p>This is a demo section. Click to edit or drag new blocks here.</p>
        </section>
      `,
      category: 'Basic',
    });

    blockManager.add('hero', {
      label: 'Hero Section',
      content: `
        <section style="padding: 100px 20px; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
          <h1 style="font-size: 48px; margin-bottom: 20px;">Build Amazing Websites</h1>
          <p style="font-size: 20px; margin-bottom: 30px;">Drag, drop, and customize without coding</p>
          <a href="#" style="display: inline-block; padding: 15px 30px; background-color: white; 
          color: #667eea; text-decoration: none; border-radius: 5px; font-weight: bold;">Get Started</a>
        </section>
      `,
      category: 'Sections',
    });

    blockManager.add('card', {
      label: 'Card',
      content: `
        <div style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; max-width: 300px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <img src="https://via.placeholder.com/300x200" alt="Card image" style="width: 100%; border-radius: 4px; margin-bottom: 15px;">
          <h3 style="margin-bottom: 10px;">Card Title</h3>
          <p style="color: #666; margin-bottom: 15px;">Card description goes here. Edit this text to customize your card.</p>
          <a href="#" style="display: inline-block; padding: 8px 16px; background-color: #007bff; 
          color: white; text-decoration: none; border-radius: 4px;">Learn More</a>
        </div>
      `,
      category: 'Components',
    });

    blockManager.add('footer', {
      label: 'Footer',
      content: `
        <footer style="padding: 40px 20px; background-color: #333; color: white; text-align: center;">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <div style="margin-top: 20px;">
            <a href="#" style="color: white; margin: 0 10px; text-decoration: none;">About</a>
            <a href="#" style="color: white; margin: 0 10px; text-decoration: none;">Contact</a>
            <a href="#" style="color: white; margin: 0 10px; text-decoration: none;">Privacy</a>
          </div>
        </footer>
      `,
      category: 'Sections',
    });

    // Navigation Block
    blockManager.add('navigation', {
      label: 'Navigation',
      content: `
        <nav style="background: white; padding: 15px 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
            <div style="font-size: 24px; font-weight: bold; color: #333;">Your Brand</div>
            <div style="display: flex; gap: 20px;">
              <a href="#" style="color: #666; text-decoration: none;">Home</a>
              <a href="#" style="color: #666; text-decoration: none;">About</a>
              <a href="#" style="color: #666; text-decoration: none;">Services</a>
              <a href="#" style="color: #666; text-decoration: none;">Contact</a>
            </div>
          </div>
        </nav>
      `,
      category: 'Layout',
    });

    // Features Block
    blockManager.add('features', {
      label: 'Features Grid',
      content: `
        <section style="padding: 80px 20px; background-color: #f8f9fa;">
          <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 42px; margin-bottom: 20px; color: #333;">Powerful Features</h2>
            <p style="font-size: 18px; color: #666; margin-bottom: 60px;">Everything you need to create amazing websites</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
              <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <div style="font-size: 48px; margin-bottom: 20px;">🚀</div>
                <h3 style="font-size: 24px; margin-bottom: 15px; color: #333;">Lightning Fast</h3>
                <p style="color: #666; line-height: 1.6;">Build websites in minutes with our intuitive drag-and-drop interface.</p>
              </div>
              <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <div style="font-size: 48px; margin-bottom: 20px;">🎨</div>
                <h3 style="font-size: 24px; margin-bottom: 15px; color: #333;">Fully Customizable</h3>
                <p style="color: #666; line-height: 1.6;">Customize every aspect of your website with advanced styling options.</p>
              </div>
              <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <div style="font-size: 48px; margin-bottom: 20px;">📱</div>
                <h3 style="font-size: 24px; margin-bottom: 15px; color: #333;">Mobile Responsive</h3>
                <p style="color: #666; line-height: 1.6;">Your websites look perfect on all devices, from mobile to desktop.</p>
              </div>
            </div>
          </div>
        </section>
      `,
      category: 'Sections',
    });

    // Testimonials Block
    blockManager.add('testimonials', {
      label: 'Testimonials',
      content: `
        <section style="padding: 80px 20px; background-color: white;">
          <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 42px; margin-bottom: 20px; color: #333;">What Our Users Say</h2>
            <p style="font-size: 18px; color: #666; margin-bottom: 60px;">Join thousands of satisfied customers</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px;">
              <div style="background: #f8f9fa; padding: 40px 30px; border-radius: 12px;">
                <div style="font-size: 64px; margin-bottom: 20px; color: #ffd700;">"</div>
                <p style="font-size: 16px; color: #666; margin-bottom: 20px; line-height: 1.6;">This editor changed how I build websites. So easy and powerful!</p>
                <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
                  <img src="https://via.placeholder.com/50x50" alt="User" style="border-radius: 50%;">
                  <div style="text-align: left;">
                    <div style="font-weight: bold; color: #333;">Sarah Johnson</div>
                    <div style="color: #666; font-size: 14px;">Web Designer</div>
                  </div>
                </div>
              </div>
              <div style="background: #f8f9fa; padding: 40px 30px; border-radius: 12px;">
                <div style="font-size: 64px; margin-bottom: 20px; color: #ffd700;">"</div>
                <p style="font-size: 16px; color: #666; margin-bottom: 20px; line-height: 1.6;">Perfect for non-technical users. Highly recommend!</p>
                <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
                  <img src="https://via.placeholder.com/50x50" alt="User" style="border-radius: 50%;">
                  <div style="text-align: left;">
                    <div style="font-weight: bold; color: #333;">Mike Chen</div>
                    <div style="color: #666; font-size: 14px;">Small Business Owner</div>
                  </div>
                </div>
              </div>
              <div style="background: #f8f9fa; padding: 40px 30px; border-radius: 12px;">
                <div style="font-size: 64px; margin-bottom: 20px; color: #ffd700;">"</div>
                <p style="font-size: 16px; color: #666; margin-bottom: 20px; line-height: 1.6;">The best visual editor I've ever used. Game changer!</p>
                <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
                  <img src="https://via.placeholder.com/50x50" alt="User" style="border-radius: 50%;">
                  <div style="text-align: left;">
                    <div style="font-weight: bold; color: #333;">Emma Davis</div>
                    <div style="color: #666; font-size: 14px;">Marketing Manager</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `,
      category: 'Sections',
    });

    // Pricing Block
    blockManager.add('pricing', {
      label: 'Pricing Table',
      content: `
        <section style="padding: 80px 20px; background-color: #f8f9fa;">
          <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 42px; margin-bottom: 20px; color: #333;">Simple Pricing</h2>
            <p style="font-size: 18px; color: #666; margin-bottom: 60px;">Choose the plan that fits your needs</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
              <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="font-size: 24px; margin-bottom: 10px; color: #333;">Starter</h3>
                <div style="font-size: 48px; font-weight: bold; color: #667eea; margin-bottom: 20px;">$9<span style="font-size: 24px;">/mo</span></div>
                <ul style="list-style: none; padding: 0; margin-bottom: 30px; text-align: left;">
                  <li style="margin-bottom: 10px; color: #666;">✓ 5 Websites</li>
                  <li style="margin-bottom: 10px; color: #666;">✓ Basic Templates</li>
                  <li style="margin-bottom: 10px; color: #666;">✓ Email Support</li>
                </ul>
                <a href="#" style="display: inline-block; padding: 12px 24px; background-color: #667eea; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">Get Started</a>
              </div>
              <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: 3px solid #667eea; position: relative;">
                <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #667eea; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold;">POPULAR</div>
                <h3 style="font-size: 24px; margin-bottom: 10px; color: #333;">Professional</h3>
                <div style="font-size: 48px; font-weight: bold; color: #667eea; margin-bottom: 20px;">$29<span style="font-size: 24px;">/mo</span></div>
                <ul style="list-style: none; padding: 0; margin-bottom: 30px; text-align: left;">
                  <li style="margin-bottom: 10px; color: #666;">✓ Unlimited Websites</li>
                  <li style="margin-bottom: 10px; color: #666;">✓ Premium Templates</li>
                  <li style="margin-bottom: 10px; color: #666;">✓ Priority Support</li>
                  <li style="margin-bottom: 10px; color: #666;">✓ Custom Domain</li>
                </ul>
                <a href="#" style="display: inline-block; padding: 12px 24px; background-color: #667eea; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">Get Started</a>
              </div>
              <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="font-size: 24px; margin-bottom: 10px; color: #333;">Enterprise</h3>
                <div style="font-size: 48px; font-weight: bold; color: #667eea; margin-bottom: 20px;">$99<span style="font-size: 24px;">/mo</span></div>
                <ul style="list-style: none; padding: 0; margin-bottom: 30px; text-align: left;">
                  <li style="margin-bottom: 10px; color: #666;">✓ Everything in Pro</li>
                  <li style="margin-bottom: 10px; color: #666;">✓ White-label</li>
                  <li style="margin-bottom: 10px; color: #666;">✓ 24/7 Support</li>
                  <li style="margin-bottom: 10px; color: #666;">✓ API Access</li>
                </ul>
                <a href="#" style="display: inline-block; padding: 12px 24px; background-color: #667eea; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">Contact Sales</a>
              </div>
            </div>
          </div>
        </section>
      `,
      category: 'Sections',
    });

    // Contact Form Block
    blockManager.add('contact-form', {
      label: 'Contact Form',
      content: `
        <section style="padding: 80px 20px; background-color: white;">
          <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 42px; margin-bottom: 20px; color: #333;">Get Started Today</h2>
            <p style="font-size: 18px; color: #666; margin-bottom: 40px;">Ready to build amazing websites? Let's get you started!</p>
            <form style="display: grid; gap: 20px; max-width: 500px; margin: 0 auto;">
              <input type="text" placeholder="Your Name" style="padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
              <input type="email" placeholder="Your Email" style="padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
              <textarea placeholder="Tell us about your project" rows="4" style="padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; resize: vertical;"></textarea>
              <button type="submit" style="padding: 15px 30px; background-color: #667eea; color: white; border: none; border-radius: 8px; font-size: 18px; font-weight: bold; cursor: pointer;">Send Message</button>
            </form>
          </div>
        </section>
      `,
      category: 'Forms',
    });

    // Call-to-Action Block
    blockManager.add('cta', {
      label: 'Call to Action',
      content: `
        <section style="padding: 80px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center;">
          <div style="max-width: 800px; margin: 0 auto;">
            <h2 style="font-size: 42px; margin-bottom: 20px;">Ready to Get Started?</h2>
            <p style="font-size: 18px; margin-bottom: 40px; opacity: 0.9;">Join thousands of users building amazing websites with our platform.</p>
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
              <a href="#" style="display: inline-block; padding: 16px 32px; background-color: white; color: #667eea; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px;">Start Free Trial</a>
              <a href="#" style="display: inline-block; padding: 16px 32px; background-color: transparent; color: white; text-decoration: none; border-radius: 8px; border: 2px solid white; font-weight: bold; font-size: 18px;">Learn More</a>
            </div>
          </div>
        </section>
      `,
      category: 'Sections',
    });

    // Image Gallery Block
    blockManager.add('gallery', {
      label: 'Image Gallery',
      content: `
        <section style="padding: 80px 20px; background-color: #f8f9fa;">
          <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 42px; margin-bottom: 20px; color: #333;">Our Work</h2>
            <p style="font-size: 18px; color: #666; margin-bottom: 60px;">Check out some of our recent projects</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
              <img src="https://via.placeholder.com/300x200" alt="Project 1" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <img src="https://via.placeholder.com/300x200" alt="Project 2" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <img src="https://via.placeholder.com/300x200" alt="Project 3" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <img src="https://via.placeholder.com/300x200" alt="Project 4" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <img src="https://via.placeholder.com/300x200" alt="Project 5" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <img src="https://via.placeholder.com/300x200" alt="Project 6" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            </div>
          </div>
        </section>
      `,
      category: 'Media',
    });

    // Stats/Counter Block
    blockManager.add('stats', {
      label: 'Statistics',
      content: `
        <section style="padding: 80px 20px; background-color: white;">
          <div style="max-width: 1200px; margin: 0 auto;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; text-align: center;">
              <div>
                <div style="font-size: 48px; font-weight: bold; color: #667eea; margin-bottom: 10px;">10K+</div>
                <div style="font-size: 18px; color: #666;">Happy Customers</div>
              </div>
              <div>
                <div style="font-size: 48px; font-weight: bold; color: #667eea; margin-bottom: 10px;">500K+</div>
                <div style="font-size: 18px; color: #666;">Websites Built</div>
              </div>
              <div>
                <div style="font-size: 48px; font-weight: bold; color: #667eea; margin-bottom: 10px;">99.9%</div>
                <div style="font-size: 18px; color: #666;">Uptime</div>
              </div>
              <div>
                <div style="font-size: 48px; font-weight: bold; color: #667eea; margin-bottom: 10px;">24/7</div>
                <div style="font-size: 18px; color: #666;">Support</div>
              </div>
            </div>
          </div>
        </section>
      `,
      category: 'Components',
    });

    // Team Block
    blockManager.add('team', {
      label: 'Team Section',
      content: `
        <section style="padding: 80px 20px; background-color: #f8f9fa;">
          <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 42px; margin-bottom: 20px; color: #333;">Meet Our Team</h2>
            <p style="font-size: 18px; color: #666; margin-bottom: 60px;">The people behind our amazing platform</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px;">
              <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <img src="https://via.placeholder.com/150x150" alt="Team Member" style="border-radius: 50%; margin-bottom: 20px;">
                <h3 style="font-size: 24px; margin-bottom: 10px; color: #333;">John Doe</h3>
                <div style="color: #667eea; font-weight: bold; margin-bottom: 15px;">CEO & Founder</div>
                <p style="color: #666; line-height: 1.6;">Passionate about creating tools that empower everyone to build beautiful websites.</p>
              </div>
              <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <img src="https://via.placeholder.com/150x150" alt="Team Member" style="border-radius: 50%; margin-bottom: 20px;">
                <h3 style="font-size: 24px; margin-bottom: 10px; color: #333;">Jane Smith</h3>
                <div style="color: #667eea; font-weight: bold; margin-bottom: 15px;">Head of Design</div>
                <p style="color: #666; line-height: 1.6;">Designing intuitive interfaces that make web creation accessible to all.</p>
              </div>
              <div style="background: white; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <img src="https://via.placeholder.com/150x150" alt="Team Member" style="border-radius: 50%; margin-bottom: 20px;">
                <h3 style="font-size: 24px; margin-bottom: 10px; color: #333;">Mike Johnson</h3>
                <div style="color: #667eea; font-weight: bold; margin-bottom: 15px;">Lead Developer</div>
                <p style="color: #666; line-height: 1.6;">Building robust and scalable solutions for modern web development.</p>
              </div>
            </div>
          </div>
        </section>
      `,
      category: 'Sections',
    });
  };

  const handleExportCode = () => {
    if (editorRef.current) {
      console.log('HTML:', editorRef.current.getHtml());
      console.log('CSS:', editorRef.current.getCss());
      alert('Code exported to browser console (press F12 to view)');
    }
  };

  return (
    <GjsEditor
      grapesjs={grapesjs}
      options={{
        height: '100vh',
        storageManager: false,
        plugins: [gjsPresetWebpage],
        canvas: {
          styles: [
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
          ],
        },
      }}
      onEditor={onEditor}
    >
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col">
          <div className="gjs-top-panel p-1 border-b">
            <div className="flex gap-2">
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleExportCode}
              >
                Export Code
              </button>
            </div>
          </div>
          <Canvas className="flex-1" />
        </div>
        <div className="w-64 border-l overflow-y-auto">
          <BlocksProvider>
            {(props) => (
              <div className="p-2">
                <div className="text-sm font-bold mb-2">Blocks</div>
                <div className="grid grid-cols-2 gap-2">
                  {props.blocks.map((block) => (
                    <div
                      key={block.getId()}
                      className="border p-2 rounded cursor-pointer hover:bg-gray-100 text-center text-xs"
                      draggable
                      onDragStart={(ev) => props.dragStart(block, ev.nativeEvent)}
                      onDragEnd={() => props.dragStop(false)}
                    >
                      <div className="mb-1">{block.getLabel()}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </BlocksProvider>
          <StylesProvider>
            {(props) => (
              <div className="p-2 border-t">
                <div className="text-sm font-bold mb-2">Styles</div>
                <div className="text-xs">
                  {props.sectors.map((sector) => (
                    <div key={sector.getId()} className="mb-2">
                      <div className="font-semibold mb-1">{sector.getName()}</div>
                      {sector.getProperties().map((prop) => (
                        <div key={prop.getId()} className="mb-1">
                          {prop.getLabel()}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </StylesProvider>
        </div>
      </div>
    </GjsEditor>
  );
}
