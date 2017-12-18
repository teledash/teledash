An open source, React.js based, highly extendable, composable telemetry dashboard, that allows you to create a dashboard without programming.

**Setting up the project**


Create a postgres database called `teledash-config`

Run `yarn setup` to setup server and client dependencies

Seed the database with `yarn seed`

Add a google maps API key to `./api-keys` and export it as a named export called `googleKey`

Enter `yarn start` from the project root folder in a terminal.
