# Cadmus Student Client

This is a small slice of the Cadmus Student client. It contains two rich text editors: a Body editor and a Notes editor.

## Running

This application is a simple `create-react-app` project. Use `yarn` as the preferred node package manager.

To install the dependencies:

    yarn install

To run the development server:

    yarn start

The `webpack-dev-server` of `create-react-app` will try to serve the client on `http://localhost:3000/ by default. If not, it will choose another port. Regardless, it should open your browser with that URL.

## Routes and Pages

This single page app literally has only 1 single page, called the
**EditingPage**. The entire page is rendered by the component `<EditingPage />` in `/src/EditingPage`. The page is rendered on the URL path:

    /work/:workId/editing

The `:workId` route parameter corresponds to a primary key value of a `Work` entry in the server DB (when there is a server).

All student/user interaction happens on this page / component.

## Layout

On the `<EditingPage />` page you will find a top header component
(called `<Shelf />`) and a bottom content component (called `<Desk
/>`).

At a given time, you can only see one editor: either the `<Body />` editor, or the `<Notes />` editor.

The `<Shelf />` contains a Tab Bar which lets you switch between showing the Notes editor and the Body editor. It also contains extra metadata display on the right.

The `<Desk />` will render the selected editor.

## Editor

We use the [`slate`](https://slatejs.org) rich text editor framework
for React to build our Rich text editor. The included `<RichTextEditor/>` component builds upon the base slate `<Editor />` by added rich text rendering.

This task doesn't involve diving into the editor internals or   extending its functionality. You should be able to use the
`RichTextEditor` component directly as if it's Slate's base `<Editor />`.
