import React from 'react';

function ThemeToggle({ toggleTheme, theme }) {
  return (
    <div>
      <button onClick={toggleTheme} className="btn">
        Toggle to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </div>
  );
}

export default ThemeToggle;
