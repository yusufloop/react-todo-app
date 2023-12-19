import React from 'react';
import App from './App';
import About from './Pages/About';
import NavigationBar from './NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import BlogPost from './Pages/BlogPost';
import NoMatch from './Pages/NoMatch';

export default function Root() {
  const routes = [
    { path: '/', name: 'Home', Component: App, exact: true },
    { path: '/about', name: 'About', Component: About, exact: false },
    { path: '/contact', name: 'Contact', Component: Contact, exact: false },
    { path: '/blog', name: 'Blog', Component: Blog, exact: true },
    { path: '/blog/:id', name: 'Post', Component: BlogPost, exact: false },
    { path: '/*', name: 'No Match', Component: NoMatch, exact: false },
  ];
  return (
    <div className="todo-app-container">
      <Router>
        <NavigationBar />
        <div className="content">
          <Switch>
            {/* {routes.map(({ path, Component, exact }) => (
              <Route key={path} path={path} exact={exact}>
                <Component />
              </Route>
            ))} */}
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <BlogPost />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}