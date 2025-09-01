'use server';

/**
 * @fileOverview This flow verifies the responsive layout of a website, ensuring elements do not overflow their containers on various screen sizes.
 *
 * - verifyResponsiveLayout - A function that handles the responsive layout verification process.
 * - VerifyResponsiveLayoutInput - The input type for the verifyResponsiveLayout function.
 * - VerifyResponsiveLayoutOutput - The return type for the verifyResponsiveLayout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VerifyResponsiveLayoutInputSchema = z.object({
  websiteUrl: z
    .string()
    .url()
    .describe('The URL of the website to verify the responsive layout for.'),
  elementSelectors: z
    .string()
    .describe(
      'CSS selectors for the elements to check, separated by commas if multiple.  Example: ".container, .content > p"'
    ),
  screenSizes: z
    .string()
    .describe(
      'A comma separated list of screen widths (in pixels) to check the website at. Example: 320, 768, 1024, 1440'
    ),
});
export type VerifyResponsiveLayoutInput = z.infer<typeof VerifyResponsiveLayoutInputSchema>;

const VerifyResponsiveLayoutOutputSchema = z.object({
  results: z.array(
    z.object({
      selector: z.string().describe('The CSS selector of the element checked.'),
      screenWidth: z.number().describe('The screen width at which the element was checked.'),
      overflowing: z
        .boolean()
        .describe('Whether the element is overflowing its container at the given screen width.'),
      details: z
        .string()
        .optional()
        .describe('Additional details about the overflow, if any.'),
    })
  ).describe('An array of results for each element and screen size checked.'),
  summary: z
    .string()
    .describe('A summary of the responsive layout verification, including any potential issues found.'),
});
export type VerifyResponsiveLayoutOutput = z.infer<typeof VerifyResponsiveLayoutOutputSchema>;

export async function verifyResponsiveLayout(
  input: VerifyResponsiveLayoutInput
): Promise<VerifyResponsiveLayoutOutput> {
  return verifyResponsiveLayoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'verifyResponsiveLayoutPrompt',
  input: {schema: VerifyResponsiveLayoutInputSchema},
  output: {schema: VerifyResponsiveLayoutOutputSchema},
  prompt: `You are an expert web developer specializing in responsive design. You will be given a website URL, a list of CSS selectors for elements to check, and a list of screen sizes to check at.

Your task is to visit the website at each of the specified screen sizes and determine if any of the specified elements are overflowing their containers. For each element and screen size, you should output whether the element is overflowing or not, and provide any relevant details about the overflow.

Website URL: {{{websiteUrl}}}
Element Selectors: {{{elementSelectors}}}
Screen Sizes: {{{screenSizes}}}

Please provide the results in JSON format, following the schema defined in the output schema.
`,
});

const verifyResponsiveLayoutFlow = ai.defineFlow(
  {
    name: 'verifyResponsiveLayoutFlow',
    inputSchema: VerifyResponsiveLayoutInputSchema,
    outputSchema: VerifyResponsiveLayoutOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
