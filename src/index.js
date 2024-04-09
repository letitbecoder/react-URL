import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Outlet,Route } from 'react-router-dom';
import About from './About';
import Body from './Body';
import { useEffect, useState } from 'react';

const Layout = () => {
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    loadCommonElements(
      '',
      '',
      'newProject.css'
    );
  }, []);

  function loadCommonElements(commonPath, commonCssPath, productCss) {
    const head = document.head;

    const polyfillses5 = document.createElement('script');
    polyfillses5.noModule = true;
    polyfillses5.defer = true;
    polyfillses5.src = `${commonPath}/polyfills-es5.js`;

    const maines5 = document.createElement('script');
    maines5.noModule = true;
    maines5.defer = true;
    maines5.src = `${commonPath}/main-es5.js`;

    const polyfillses2015 = document.createElement('script');
    polyfillses2015.type = 'module';
    polyfillses2015.src = `${commonPath}/polyfills-es2015.js`;

    const main2015 = document.createElement('script');
    main2015.type = 'module';
    main2015.src = `${commonPath}/main-es2015.js`;

    const commonStyle = document.createElement('link');
    commonStyle.rel = 'stylesheet';
    commonStyle.href = `${commonCssPath}`;
    commonStyle.type = 'text/css';

    const productStyle = document.createElement('link');
    productStyle.rel = 'stylesheet';
    productStyle.href = productCss;
    productStyle.type = 'text/css';
    productStyle.onload = () => {
      setIsLoader(true);
    };

    head.appendChild(polyfillses5);
    head.appendChild(maines5);
    head.appendChild(polyfillses2015);
    head.appendChild(main2015);
    head.appendChild(commonStyle);
    head.appendChild(productStyle);
  }

  return isLoader ? (
    <>
      <tagic-left-menu></tagic-left-menu>
      <tagic-header></tagic-header>
      <div className="fw-100">
        <div className="center-container product-inner-page w-100">
          <Outlet />
        </div>
      </div>
    </>
  ) : <h1>Nothing loads</h1>;
};

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="body" element={<Body />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
