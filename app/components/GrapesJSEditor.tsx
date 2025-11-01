'use client';

import GjsEditor, { AssetsProvider, Canvas, LayersProvider, PagesProvider, SelectorsProvider, StylesProvider, TraitsProvider, BlocksProvider } from '@grapesjs/react';
import type { Editor } from 'grapesjs';
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import 'grapesjs/dist/css/grapes.min.css';

export default function GrapesJSEditor() {
  const onEditor = (editor: Editor) => {
    // Add initial content to the canvas
    editor.setComponents(`
      <section style="padding: 50px 20px; text-align: center; background-color: #f8f9fa;">
        <h1 style="font-size: 36px; margin-bottom: 20px; color: #333;">GrapesJS Website Editor Demo</h1>
        <p style="font-size: 18px; color: #666; max-width: 800px; margin: 0 auto 30px;">
          This is a demonstration of GrapesJS with React. Drag blocks from the right panel, 
          click on elements to edit them, and see the power of visual website building!
        </p>
        <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
          <a href="#" style="display: inline-block; padding: 12px 24px; background-color: #007bff; 
          color: white; text-decoration: none; border-radius: 5px; font-weight: 500;">Start Building</a>
          <a href="#" style="display: inline-block; padding: 12px 24px; background-color: transparent; 
          color: #007bff; text-decoration: none; border-radius: 5px; border: 2px solid #007bff; font-weight: 500;">Learn More</a>
        </div>
      </section>
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
  };

  return (
    <GjsEditor
      grapesjs={grapesjs}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
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
                onClick={() => {
                  const editor = (window as any).editor;
                  if (editor) {
                    console.log('HTML:', editor.getHtml());
                    console.log('CSS:', editor.getCss());
                  }
                }}
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
