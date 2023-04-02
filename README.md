# Flows for the Future - Micro Frontend Proof of Concept

This is an open-source platform that allows users to create complex workflows by connecting different nodes together. The app is built on a plugin-based architecture, which means that users can create custom plugins or flows and integrate them into the app seamlessly. The app also provides a set of built-in integrations with popular services like Google Drive, Dropbox, and Slack.

# Proof of Concept
The application is an open-source platform based on nodes and workflows that provides users with a wide range of customization options and the ability to integrate with any third-party service. The platform is designed to be completely extendable and plugin-based, which allows users to develop their own custom plugins or flows and integrate them seamlessly into the app.

The application is built around a node-based system, which allows users to create complex workflows by connecting different nodes together. Each node represents a specific task or operation, and users can connect them to create a flow that performs a specific set of actions. The app comes with a library of pre-built nodes, which can be easily combined to create workflows without any coding skills.

One of the key features of this application is its ability to integrate with any third-party service. The app provides a set of built-in integrations with popular services like Google Drive, Dropbox, and Slack, but users can also create their own custom integrations using the plugin-based architecture. This means that users can connect the app to any service they want, regardless of whether it's included in the pre-built integrations or not.

The app's plugin-based architecture also means that users can create their own custom plugins or flows. These can be created using a simple scripting language, and can be shared with other users in the app's plugin marketplace. This allows users to extend the functionality of the app beyond what's provided by the built-in nodes and integrations.

Overall, this application is a powerful tool for anyone who needs to automate workflows and integrate with third-party services. Its node-based system and plugin-based architecture provide users with a high degree of flexibility and customization, while its open-source nature ensures that it will continue to evolve and improve over time.

## Creating Workflows
The app comes with a library of pre-built nodes, which can be easily combined to create workflows without any coding skills. To create a workflow, simply drag and drop nodes from the sidebar onto the canvas and connect them by dragging the arrows between them.

## Creating Custom Plugins
The app's plugin-based architecture allows users to create their own custom plugins or flows. These can be created using a simple scripting language and can be shared with other users in the app's plugin marketplace.

## Current plugins
1. Flow Navbar UI (written in react)
2. Flow Fetch Service (written in vanillajs)

## Code splitting
Trying to implement code splitting, which is a complicated topic. 
[Webpacks docs for that](https://webpack.js.org/guides/code-splitting/).

In our project code splitting is further complicated because webpack's module format expects to load more modules from 
the website root, which will always fail in this project unless webpack is told where to load additional modules.

--- 

## Knowledge base
1. [SystemJS](https://github.com/systemjs/systemjs)
2. [SingleSpa](https://single-spa.js.org/)

## Prerequisites
- go v1.19.7
- node v16.17.1
- yarn v1.22.19

## Installation and setup
1. Clone the repo
2. run `yarn install` then `yarn build`
3. build all the plugins separately by running `yarn build` in each plugin directory  (e.g. `cd plugins/<plugin-name> && yarn build`)
4. Open running code at `http://localhost:3000/`

## Deployment
Todo: write deployment instructions maybe D:
- With docker
- With kubernetes
- With heroku
- With netlify

--- 

## Integrating with Third-party Services
The app provides a set of built-in integrations with popular services like Google Drive, Dropbox, and Slack. To use one of these integrations, simply connect the corresponding node to your workflow and follow the on-screen instructions to authenticate your account.


## Contributing
Contributions are welcome! Please open a pull request with your changes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for