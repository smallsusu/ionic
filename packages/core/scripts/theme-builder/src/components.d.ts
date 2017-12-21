/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


import {
  AppPreview as AppPreview
} from './components/app-preview/app-preview';

declare global {
  interface HTMLAppPreviewElement extends AppPreview, HTMLElement {
  }
  var HTMLAppPreviewElement: {
    prototype: HTMLAppPreviewElement;
    new (): HTMLAppPreviewElement;
  };
  interface HTMLElementTagNameMap {
    "app-preview": HTMLAppPreviewElement;
  }
  interface ElementTagNameMap {
    "app-preview": HTMLAppPreviewElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-preview": JSXElements.AppPreviewAttributes;
    }
  }
  namespace JSXElements {
    export interface AppPreviewAttributes extends HTMLAttributes {
      cssText?: string;
      demoMode?: string;
      demoUrl?: string;
    }
  }
}


import {
  ColorSelector as ColorSelector
} from './components/color-selector/color-selector';

declare global {
  interface HTMLColorSelectorElement extends ColorSelector, HTMLElement {
  }
  var HTMLColorSelectorElement: {
    prototype: HTMLColorSelectorElement;
    new (): HTMLColorSelectorElement;
  };
  interface HTMLElementTagNameMap {
    "color-selector": HTMLColorSelectorElement;
  }
  interface ElementTagNameMap {
    "color-selector": HTMLColorSelectorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "color-selector": JSXElements.ColorSelectorAttributes;
    }
  }
  namespace JSXElements {
    export interface ColorSelectorAttributes extends HTMLAttributes {
      isRgb?: boolean;
      property?: string;
      value?: string;
    }
  }
}


import {
  CssText as CssText
} from './components/css-text/css-text';

declare global {
  interface HTMLCssTextElement extends CssText, HTMLElement {
  }
  var HTMLCssTextElement: {
    prototype: HTMLCssTextElement;
    new (): HTMLCssTextElement;
  };
  interface HTMLElementTagNameMap {
    "css-text": HTMLCssTextElement;
  }
  interface ElementTagNameMap {
    "css-text": HTMLCssTextElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "css-text": JSXElements.CssTextAttributes;
    }
  }
  namespace JSXElements {
    export interface CssTextAttributes extends HTMLAttributes {
      cssText?: string;
      themeName?: string;
    }
  }
}


import {
  DemoSelection as DemoSelection
} from './components/demo-selection/demo-selection';

declare global {
  interface HTMLDemoSelectionElement extends DemoSelection, HTMLElement {
  }
  var HTMLDemoSelectionElement: {
    prototype: HTMLDemoSelectionElement;
    new (): HTMLDemoSelectionElement;
  };
  interface HTMLElementTagNameMap {
    "demo-selection": HTMLDemoSelectionElement;
  }
  interface ElementTagNameMap {
    "demo-selection": HTMLDemoSelectionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "demo-selection": JSXElements.DemoSelectionAttributes;
    }
  }
  namespace JSXElements {
    export interface DemoSelectionAttributes extends HTMLAttributes {
      demoData?: { name: string, url: string }[];
      demoMode?: string;
      demoUrl?: string;
    }
  }
}


import {
  ThemeBuilder as ThemeBuilder
} from './components/theme-builder/theme-builder';

declare global {
  interface HTMLThemeBuilderElement extends ThemeBuilder, HTMLElement {
  }
  var HTMLThemeBuilderElement: {
    prototype: HTMLThemeBuilderElement;
    new (): HTMLThemeBuilderElement;
  };
  interface HTMLElementTagNameMap {
    "theme-builder": HTMLThemeBuilderElement;
  }
  interface ElementTagNameMap {
    "theme-builder": HTMLThemeBuilderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "theme-builder": JSXElements.ThemeBuilderAttributes;
    }
  }
  namespace JSXElements {
    export interface ThemeBuilderAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  ThemeSelector as ThemeSelector
} from './components/theme-selector/theme-selector';

declare global {
  interface HTMLThemeSelectorElement extends ThemeSelector, HTMLElement {
  }
  var HTMLThemeSelectorElement: {
    prototype: HTMLThemeSelectorElement;
    new (): HTMLThemeSelectorElement;
  };
  interface HTMLElementTagNameMap {
    "theme-selector": HTMLThemeSelectorElement;
  }
  interface ElementTagNameMap {
    "theme-selector": HTMLThemeSelectorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "theme-selector": JSXElements.ThemeSelectorAttributes;
    }
  }
  namespace JSXElements {
    export interface ThemeSelectorAttributes extends HTMLAttributes {
      themeData?: { name: string }[];
    }
  }
}

