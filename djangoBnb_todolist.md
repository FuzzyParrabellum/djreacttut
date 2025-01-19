1. FRONTEND

- Install and setup Next.js, create project
- Code for navbar
- Add categories logos on homepage
- List properties on the front page (static) (par ex en induqant avec du texte
  pour chaque card de maison, image, coeur en haut à droite, description etc.)
- Detail page for properties (static)
- Landlord page (static), on peut donc cliquer sur le host ou le landlord et
  voir plus d'infos sur lui.
- Create a page for "my reservations" - (static)
- Create a page for "My properties" - (static)
- Create l'inbox page pour voir les conversations entre loueurs et proprios
  (static)
- Detail page for chat (static)
- User menu popup
- Create reusable modal window
- Log in modal (remember error codes)
- Sign up modal (remember error codes)

2. BACKEND

- Set up docker for django with postgresql etc.
  -- install DRF, cors headers etc.
- Create user modal / config (par ex pr login with email, ou rajouter photo user)
- create app for properties
- create model and serializers for properties
- get properties in the frontend and list them

3. Authentification

- Implement authentification
  -- Log in
  -- Sign up
  -- Log out

4. Ajout intégration backend-frontend

- Add properties from nextjs
  -- create modal
  -- API endpoint
  -- Send data

- Detail page for properties
- Book property
- Landlord page dynamic
- My properties dynamic
- My reservations dynamic
- Make it possible to set a property as a favorite
- My favorite pages (with listings)
- Make conversations dynamic

5. Ajout websockets et live chat

- Set up websockets in the backend
- Make it possible to connect
- to send/receive messages
- store and load messages from backend
- fonctionnality to Start new conversation

6. Ajout fonctionnalité de recherche

- Set up search filters
  -- modal for searh filter
  -- country search
  -- calendar for check-in / check-out dates
  -- Search details (number of persons, bedrooms etc.)
  -- Api endpoints
  -- make it possible to choose between categories

7. DÉPLOIEMENT

- Deployment
  -- Setting up git/github
  -- create server on digitalocean and set it up
  -- set backend on server
  --- create environment
  --- get code from git
  --- rest of serveur stuff
  -- set frontend onf server
  --- Node, nginx
  --- get code from git
