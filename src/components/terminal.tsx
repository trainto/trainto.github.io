import { useEffect, useRef, useState } from 'react';
import { processCommand } from '../lib/terminal-helper';
import GlobalStore from '../store/global-store';
import './terminal.css';

const STORAGE_KEY = 'last.login';

const Terminal = () => {
  const [lastLogin, setLastLogin] = useState('');
  const [lines, setLines] = useState<{ command: string; result: string }[]>([]);

  const contentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const store = GlobalStore.useStore();

  useEffect(() => {
    const lastLogin = localStorage.getItem(STORAGE_KEY);
    if (lastLogin) {
      setLastLogin(lastLogin);
    }

    localStorage.setItem(STORAGE_KEY, new Date().toString());

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  });

  // const handleReturnClicked = () => {
  //   const aboutSection = document.getElementById('about');
  //   const nav = document.getElementById('nav-top');
  //   if (!aboutSection || !nav) {
  //     return;
  //   }
  //   const navHeight = nav.getBoundingClientRect().height;
  //   const aboutSectionTop = aboutSection.getBoundingClientRect().top;
  //   window.scrollTo({
  //     top: aboutSectionTop - navHeight + window.pageYOffset,
  //     left: 0,
  //     behavior: 'smooth'
  //   });
  // };

  const handleInputHeight = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const input = e.currentTarget;
    input.style.height = input.scrollHeight + 'px';
  };

  const handleCommand = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const result = processCommand(e.currentTarget.value, store);
    setLines([...lines, { command: e.currentTarget.value, result }]);

    e.currentTarget.value = '';
  };

  return (
    <div className="terminal shadow">
      <div className="terminal-header d-flex">
        <div className="terminal-button-group">
          <span className="terminal-button red" />
          <span className="terminal-button yellow ml-1" />
          <span className="terminal-button green ml-1" />
        </div>
        <div className="terminal-title text-center">heyjoon: ~ (zsh)</div>
      </div>

      <div className="terminal-content" ref={contentRef} onClick={() => inputRef.current?.focus()}>
        <div className="text-center py-5">
          <h1>
            Hello, I&apos;m <span className="highlite-color">Hakjoon Sim.</span>
            <br />
            I'm a developer.
          </h1>
        </div>
        <div className="mt-4 ml-3">
          <div>Welcome to you.heyjoon.dev</div>
          <br />

          <div className="text-truncate">
            {' '}
            * Source:{' '}
            <a href="https://github.com/trainto/trainto.github.io" target="_blank" rel="noopener noreferrer">
              https://github.com/trainto/trainto.github.io
            </a>
          </div>
          <div className="text-truncate">
            {' '}
            * Blog: &nbsp;&nbsp;<a href="https://heyjoon.dev">https://heyjoon.dev</a>
          </div>
          <div className="text-truncate">
            {' '}
            * Email: &nbsp;<a href="mailto:you@heyjoon.dev">you (at) heyjoon.dev</a>
          </div>
          <br />

          {lastLogin !== '' && (
            <>
              <div className="text-truncate mt-3">Last login: {lastLogin}</div>
              <br />
            </>
          )}
        </div>

        {lines.map((line, i) => (
          <div key={i}>
            <div className="ml-3 d-flex">
              <div className="directory-color font-bigger-2">~</div>
              <div className="point-color font-bigger-2">&raquo;</div>
              <div className="ml-1 position-relative">
                <div className="terminal-command-history">{line.command}</div>
              </div>
            </div>
            <div className="terminal-command-result ml-3" dangerouslySetInnerHTML={{ __html: line.result }}></div>
          </div>
        ))}

        <div className="ml-3 d-flex mr-3">
          <div className="directory-color font-bigger-2">~</div>
          <div className="point-color font-bigger-2">&raquo;</div>
          <div className="ml-1 flex-grow-1 position-relative">
            <textarea
              className="terminal-input"
              rows={1}
              onKeyPress={(e) => e.key === 'Enter' && handleCommand(e)}
              onInput={handleInputHeight}
              ref={inputRef}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
