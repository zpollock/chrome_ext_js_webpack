# Chrome Extension Template

This project is a JavaScript template coupled with Webpack for creating a Chrome extension. It provides a basic structure and functionality to kickstart your Chrome extension development process.

## Features

- Ready-to-use JavaScript template for a Chrome extension.
- Integration with Webpack for bundling and packaging the extension.
- Example files showcasing how to run code both on the backend service worker thread and on the client-side.

## Getting Started

To get started with the Chrome Extension Template, follow these steps:

1. Clone the repository:

git clone https://github.com/zpollock/chrome_ext_js_webpack.git

2. Navigate to the project directory:

cd chrome_ext_js_webpack

3. Install the project dependencies:

npm install

4. Build the extension using Webpack:

make webpack


5. Load the extension in Chrome:

- Open Google Chrome and go to `chrome://extensions` in the address bar.
- Enable the "Developer mode" toggle at the top-right corner.
- Click on "Load unpacked" and select the `dist` directory of the project.

6. The Chrome extension is now loaded and ready to use!

## Project Structure

The project structure is organized as follows:

- `src/`: Contains the source code of the Chrome extension.
- `manifest.json`: Defines the extension's metadata and configuration.
- `background.js`: Example file demonstrating how to write code that runs in the background.
- `content.js`: Example file demonstrating how to write code that interacts with web pages.
- `dist/`: Contains the bundled and packaged extension files generated by Webpack.
- `webpack.config.js`: Configuration file for Webpack, specifying the entry point and output directory.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Resources

- [Chrome Extensions Developer Guide](https://developer.chrome.com/docs/extensions/)
- [Webpack Documentation](https://webpack.js.org/)
- [Chrome Extension Samples](https://developer.chrome.com/docs/extensions/samples/)
- [Chrome Extension API Reference](https://developer.chrome.com/docs/extensions/reference/)
