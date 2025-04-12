# Background Image Instructions

The website currently uses a placeholder SVG background (`placeholder.svg`). For production, you should replace it with a real image.

## How to change the background image:

1. Find or create a yellowish image you'd like to use as the background
2. Rename it to `background.jpg` 
3. Place it in this `/images` directory
4. Update the CSS in `styles.css` to use `background.jpg` instead of `placeholder.svg`
5. The image should be high quality (recommended minimum 1920x1080px)

For best results, choose an image that:
- Has a predominantly yellow/golden tone
- Is not too busy with details (as text will be displayed over it)
- Has good contrast to make the content readable

If your image is not naturally yellowish, the CSS includes a yellow overlay that will add a yellow tint to any image.
