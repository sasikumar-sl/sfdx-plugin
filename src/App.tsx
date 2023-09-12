import React, { useState, useEffect, useRef } from 'react'
import { JSONTree } from 'react-json-tree';
import { AppContainer, Title, InputWrapper, Card } from './App.styles';


const theme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633',
};

export default function App() {
  const [iframeData, setIframeData] = useState({});
  const [inputValue, setInputValue] = useState('');

  const iframeRef: any = useRef(null);
  const count: any = useRef(1);
  const inputRef = useRef(null);
  

  // const url = 'http://localhost:3006/';
  // const url = 'https://tnq27s.csb.app';
  const url = 'https://sasikumar-sl.github.io/sfdx-iframe-plugin';
  // This hook is listening an event that came from the Iframe
  useEffect(() => {
    const handler = (ev: MessageEvent<{ methodName: string, data: string }>) => {
      // console.log('ev', ev)

      if (typeof ev.data !== 'object') return
      if (!ev.data.methodName) return
      if (ev.data.methodName !== 'button-click') return
      if (!ev.data.data) return

      setIframeData(ev.data)
    }

    window.addEventListener('message', handler)

    // Don't forget to remove addEventListener
    return () => window.removeEventListener('message', handler);
  }, []);

  const sendToIframe = (payload: any = {}) => {
    if(!iframeRef?.current) return;
    iframeRef?.current?.contentWindow.postMessage(payload, '*');
  }

  useEffect(() => {

    setInterval(() => {
      sendToIframe({methodName: 'parent-counter',  data: count.current++});
    }, 1000);
  }, []);

  const handleSendClick = () => {
    sendToIframe({methodName: 'parent-input',  data: inputValue});
    setInputValue('');
  };

  return (
    <AppContainer>
      <Title>Parent</Title>
      <Card>
        <InputWrapper>
          <input
            type="text"
            placeholder="Type something to Iframe.."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
          />
          <button onClick={handleSendClick}>Send to Iframe</button>
        </InputWrapper>
        <JSONTree data={iframeData} theme={theme} />
      </Card>
      <Title>Iframe</Title>
      <Card>
        <iframe src={url} title="Demo Iframe" ref={iframeRef}/>
      </Card>

    </AppContainer>
  )
};



