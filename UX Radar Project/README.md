# 📊 UX Radar – Lightweight User Behavior Tracker

# 

**UX Radar** is a lightweight, privacy-conscious tool designed to help UX designers and developers track user interaction on web pages.  
It helps identify **scroll behavior**, **click zones**, and **user engagement patterns** in real-time, without relying on third-party analytics tools.

## 🔍 What It Does

# 

*   Tracks **scroll depth** and logs it as percentage
    
*   Captures **click events** and identifies clicked elements (tag, class, ID)
    
*   Logs interaction data directly in the browser console
    
*   Optional: Can be extended to store or visualize data via `localStorage` or backend APIs
    

## 🧪 Use Cases

# 

*   Internal UX testing and behavior observation
    
*   Micro-analytics without heavy frameworks
    
*   Early-stage usability experiments for MVPs or prototypes
    

## ⚙️ How It Works

# 

Simply include the `ux-radar.js` script in any web page you want to track.

`<script src="ux-radar.js"></script>`

Interaction logs (scroll and click) will appear in the browser's developer console.

Example output:

`[UXRadar] Scroll: 63% [UXRadar] Clicked → <BUTTON>.id=ctaBtn .class=cta-button`

## 📁 Files

# 

*   `ux-radar.js`: Core script handling scroll & click tracking
    
*   `index.html`: Sample test page to demonstrate UX Radar
    
*   `styles.css`: Basic styling for test interface (optional)
    
*   `README.md`: This documentation
    

## 🧠 Future Ideas

# 

*   Add hover tracking and idle time detection
    
*   Visual overlay heatmap for click zones
    
*   Export logs as JSON or CSV
    
*   Build a minimal UI widget to show live stats
    

## ✅ License

# 

MIT – Free to use, modify, and contribute.  
Let’s improve UX through data-driven design — the ethical and efficient way!
