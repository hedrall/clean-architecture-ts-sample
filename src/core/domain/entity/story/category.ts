export const STORY_CATEGORY = {
  SOCIAL: 'social',
  INTERNATIONAL: 'international',
} as const;
export type StoryCategory = (typeof STORY_CATEGORY)[keyof typeof STORY_CATEGORY];
