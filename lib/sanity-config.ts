export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'q0pwph59',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-09-04',
};