import React, {useState} from 'react';
import {FormattedMessage} from "react-intl";
import './App.css';

import { I18nPropvider, LOCALES } from './i18nProvider';
import translate from "./i18nProvider/translate";
import Input from './input';

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  return (
    <I18nPropvider locale={locale}>
      <div className="App">
        <header className="App-header">
          <h1>
            <FormattedMessage id="hello" />
          </h1>
          <h2>
            Not translated part. {translate('hello')}
          </h2>
          <p>
            {translate('edit-file', {file: <code>src/App.js</code>})}
            <hr/>
            Edit <code>src/App.js</code> and save to reload.
          </p>


          <div className='THIS sample does not work'>
            <input type="text" placeholder={translate('demo-placeholder')} />
            <input type="text" placeholder={<FormattedMessage id="demo-placeholder" />} />
          </div>

          <Input />
          <FormattedMessage id="demo-placeholder" defaultMessage="search">
            {placeholder=>
                <input placeholder={placeholder}/>
            }
          </FormattedMessage>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <hr/>

          <button onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
          <button onClick={() => setLocale(LOCALES.FRENCH)}>French</button>
          <button onClick={() => setLocale(LOCALES.GERMAN)}>German</button>
        </header>
      </div>
    </I18nPropvider>
  );
}

export default App;
