# Ecstatic Dance Events Website

A simple static website for promoting Ecstatic Dance events and collecting email signups for a newsletter.

## Features

- Clean, responsive landing page
- Event information section
- Newsletter signup form
- Easy-to-customize yellowish background

## How to Use

1. Simply open `index.html` in a web browser to view the site locally
2. To deploy, upload all files to your web hosting provider

## Customization

### Changing the Event Information

To update the event details, edit the `index.html` file and modify the content in the `event-card` div:

```html
<div class="event-card">
    <h3>Ecstatic Dance</h3>
    <p class="location">Main St Yoga Studio, <address>123 Main St, City, State</address></p>
    <p class="date-time">12-2pm April 13th, Sunday</p>
    <a href="#" class="btn">Register Now</a>
</div>
```

### Changing the Background Image

1. Replace the file at `images/background.jpg` with your preferred yellowish image
2. Make sure to keep the same filename or update the reference in `css/styles.css`

### Newsletter Functionality

The current implementation simulates a successful signup. To connect it to a real email service:

1. Edit the JavaScript in `js/main.js`
2. Add code to submit the form data to your email service provider's API

## File Structure

- `index.html` - Main HTML file
- `css/styles.css` - All styling for the website
- `js/main.js` - JavaScript for form handling
- `images/` - Directory for the background image and any other images
