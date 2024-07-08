# [POC] Cryostat Plugin for OpenShift Console

## Idea

This directory provides some starter code for interacting with the OpenShift plugin, with the idea of providing a way of using cryostat-web from within the console.

The routes, perspectives, and navigation are handled in `console-extensions.json`.

The json listed above requires that the components are shared as exposed modules, which can be found within the `"consolePlugin"` portion of `package.json`.

## How to use

### Quickstart
Log in to your OpenShift cluster, or local CRC
```sh
oc login [..]
```

Start a local instance of the OpenShift Console
```sh
yarn run start-console
```

In a separate terminal, install the root project and start the dynamic plugin in development mode
```sh
yarn install;
yarn run start-plugin;
```

Optional: at the moment there is a page that has an iframe looking at localhost:9001. You can run the cryostat-web preview in another terminal and interact with it from within the Cryostat perspective provided by this plugin.
```sh
yarn run start:dev:preview
```