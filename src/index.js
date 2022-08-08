import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode
  // App이 두번 render되는 이유
  // 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구
  // 개발 모드에서만 활성화 되기 때문에 빌드에는 영향을 미치지 않음
  // Link to 사용 시, 화면 갱신이 안되는 문제 발생
  <App />
);