export type Service = {
  id: number;
  iconName?: string;
  title: string;
  subtitle: string;
  isFeatured?: boolean;
  image: string;
  description?: {
    id: number;
    text: string;
  }[];
  steps: {
    id: number;
    text: string;
  }[];
};

const services: Service[] = [
  {
    id: 1,
    iconName: 'RiBrush4Line',
    title: 'Custom Illustration',
    subtitle: 'Bring Your Vision to Life with Our Unique Custom Illustrations.',
    isFeatured: true,
    image:
      'https://images.unsplash.com/photo-1554139681-1adb48e035cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80',
    description: [
      {
        id: 1,
        text: 'Sketching: Rough drafts of the idea are created',
      },
      {
        id: 2,
        text: 'Refinement: Sketches are revised and improved for feedback',
      },
      {
        id: 3,
        text: 'Finalization: Final illustration is crafted and polished',
      },
    ],
    steps: [
      {
        id: 1,
        text: 'Sketching: Rough drafts of the idea are created',
      },
      {
        id: 2,
        text: 'Refinement: Sketches are revised and improved',
      },
      {
        id: 3,
        text: 'Finalization: Final illustration is crafted',
      },
      {
        id: 4,
        text: 'Color Scheme: Determining the appropriate color palette for the illustration',
      },
      {
        id: 5,
        text: 'Style Selection: Choosing a specific illustration style',
      },
      {
        id: 6,
        text: 'Delivery: Final illustration files delivered',
      },
    ],
  },
  {
    id: 2,
    iconName: 'RxCube',
    title: '3D Modeling',
    subtitle: 'Bring Your Vision to Life with Our Unique 3D Models.',
    isFeatured: false,
    image:
      'https://images.unsplash.com/photo-1512540452972-baac55d40ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80',
    description: [
      {
        id: 1,
        text: 'Sketching & Conceptualizing: Developing ideas and concepts for the 3D models',
      },
      {
        id: 2,
        text: '3D Modeling: Creating accurate and detailed 3D models',
      },
      {
        id: 3,
        text: 'Post-Production: Editing and enhancing the final images',
      },
    ],
    steps: [
      {
        id: 1,
        text: 'Sketching & Conceptualizing: Developing ideas and concepts for the 3D models',
      },
      {
        id: 2,
        text: '3D Modeling: Creating accurate 3D models',
      },
      {
        id: 3,
        text: 'Texturing & Lighting: Adding colors, textures, and lighting effects to the models',
      },
      {
        id: 4,
        text: 'Animation: Animating the models',
      },
      {
        id: 5,
        text: 'Rendering: Converting the 3D models into 2D images or videos',
      },
      {
        id: 6,
        text: 'Post-Production: Enhancing the final images',
      },
    ],
  },
  {
    id: 3,
    title: 'Graphic Design',
    subtitle:
      'Creative Graphic Design Services, Let us Bring Your Ideas to Life.',
    isFeatured: false,
    image:
      'https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1924&q=80',
    steps: [
      {
        id: 1,
        text: 'Design concept and brainstorming session',
      },
      {
        id: 2,
        text: 'Research and analysis of current market trends and demand',
      },
      {
        id: 3,
        text: 'Design development and mockups',
      },
      {
        id: 4,
        text: 'Incorporating up to four rounds of revision feedback',
      },
      {
        id: 5,
        text: 'Final designs and file preparation',
      },
      {
        id: 6,
        text: 'Delivery of completed design files with file formats and specifications',
      },
    ],
  },
  {
    id: 4,
    title: 'Branding Design',
    subtitle: 'Building a Strong Visual Identity for Your Brand.',
    isFeatured: false,
    image:
      'https://images.unsplash.com/photo-1519011985187-444d62641929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
    steps: [
      {
        id: 1,
        text: 'Research and analysis of brand values and audience',
      },
      {
        id: 2,
        text: 'Development of brand identity design concepts',
      },
      {
        id: 3,
        text: 'Presentation and selection of final design direction',
      },
      {
        id: 4,
        text: 'Refinement of chosen design through multiple revisions',
      },
      {
        id: 5,
        text: 'Application of brand identity to various collateral',
      },
      {
        id: 6,
        text: 'Delivery of final design assets in multiple formats',
      },
    ],
  },
  {
    id: 5,
    title: 'UI/UX Design',
    subtitle: 'Enhancing User Experience Through Intuitive Design.',
    isFeatured: true,
    image:
      'https://images.unsplash.com/photo-1598495494482-172d89ff078c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80',
    description: [
      {
        id: 1,
        text: 'Sketching & Conceptualizing: Developing ideas and concepts for the 3D models',
      },
      {
        id: 2,
        text: '3D Modeling: Creating accurate and detailed 3D models',
      },
      {
        id: 3,
        text: 'Post-Production: Editing and enhancing the final images',
      },
    ],
    steps: [
      {
        id: 1,
        text: 'Discovery of user needs and pain points',
      },
      {
        id: 2,
        text: 'Design of user interface and user experience flow',
      },
      {
        id: 3,
        text: 'Testing and iteration of design concepts',
      },
      {
        id: 4,
        text: 'Thorough development of high-fidelity wireframes and interactive prototypes',
      },
      {
        id: 5,
        text: 'Collaboration with developers to ensure feasibility',
      },
      {
        id: 6,
        text: 'Delivery of design assets',
      },
    ],
  },
];

export const featuredServices = services.filter(
  (service) => service.isFeatured
);
export const allServices = services;
