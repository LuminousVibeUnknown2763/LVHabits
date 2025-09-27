//getIconParent
const homeAnchor = document.getElementById('homeAnchor');
const checkListAnchor = document.getElementById('checkListAnchor');
const rankAnchor = document.getElementById('rankAnchor');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');

//getIcon
const checkListIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 28px; height: 24px; flex-shrink: 0;">
  <path fill-rule="evenodd" d="M6 4.75A.75.75 0 0 1 6.75 4h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 4.75ZM6 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 10Zm0 5.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM1.99 4.75a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 15.25a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 10a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1V10Z" clip-rule="evenodd" />
</svg>
`;

const homeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width: 28px; height: 24px; flex-shrink: 0;">
  <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
</svg>
`;

const rankIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width: 28px; height: 24px; flex-shrink: 0;">
  <path fill-rule="evenodd" d="M12 1.69a.494.494 0 0 0-.438-.494 32.352 32.352 0 0 0-7.124 0A.494.494 0 0 0 4 1.689v.567c-.811.104-1.612.24-2.403.406a.75.75 0 0 0-.595.714 4.5 4.5 0 0 0 4.35 4.622A3.99 3.99 0 0 0 7 8.874V10H6a1 1 0 0 0-1 1v2h-.667C3.597 13 3 13.597 3 14.333c0 .368.298.667.667.667h8.666a.667.667 0 0 0 .667-.667c0-.736-.597-1.333-1.333-1.333H11v-2a1 1 0 0 0-1-1H9V8.874a3.99 3.99 0 0 0 1.649-.876 4.5 4.5 0 0 0 4.35-4.622.75.75 0 0 0-.596-.714A30.897 30.897 0 0 0 12 2.256v-.567ZM4 3.768c-.49.066-.976.145-1.458.235a3.004 3.004 0 0 0 1.64 2.192A3.999 3.999 0 0 1 4 5V3.769Zm8 0c.49.066.976.145 1.458.235a3.004 3.004 0 0 1-1.64 2.192C11.936 5.818 12 5.416 12 5V3.769Z" clip-rule="evenodd" />
</svg>
`;

const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width: 28px; height: 24px; flex-shrink: 0;">
  <path d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z" />
</svg>
`;

const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width: 25px; height: 25px; flex-shrink: 0;">
  <path d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z" />
</svg>
`;

//addIcon
homeAnchor.innerHTML = homeIcon + 'Home';
checkListAnchor.innerHTML = checkListIcon + 'Tasks';
rankAnchor.innerHTML = rankIcon + 'Rank';
toggleThemeBtn.innerHTML = sunIcon + 'Theme';

const html = document.documentElement;
const theme = localStorage.getItem('theme') || 'light';

window.onload = () => {
  html.setAttribute('data-theme', theme);
  if (theme === 'light') {
    toggleThemeBtn.innerHTML = sunIcon + 'Theme';
  } else {
    toggleThemeBtn.innerHTML = moonIcon + 'Theme';
  }
};

function toggleTheme() {
  const current = html.getAttribute('data-theme');
  html.setAttribute(
    'data-theme',
    current === 'light' ? 'dark' : 'light'
  );
  if (current === 'dark') {
    toggleThemeBtn.innerHTML = sunIcon + 'Theme';
  } else {
    toggleThemeBtn.innerHTML = moonIcon + 'Theme';
  }
  localStorage.setItem('theme', 
  current === 'light' ? 'dark' : 'light');
}

const taskHold = document.getElementById('taskHold');
let i = 0;

let xp = Number(localStorage.getItem('xp') || 0);
const tasks = JSON.parse(localStorage.getItem('task') || '[]');

const xpDs = document.getElementById('xpDs');
const levelDs = document.getElementById('levelDs');
const userIcon = document.getElementById('userIcon');

tasks.forEach((task, index) => {
  if (!task.done) addButton(task.text, index);
  i++;
});
xpDs.textContent = `xp - ${xp}`;
calcLevel();

function calcLevel() {
  let level = Math.floor(Math.sqrt(xp) / 5);
  levelDs.textContent = `Level - ${level}`;
  userIcon.setAttribute('fill', `hsl(${xp / 3}, 100%, 50%)`);
}

function addTask() {
  const textInput = document.getElementById('taskInput').value;
  addButton(textInput, i);
  i++;
  const newTask = {text: textInput, done: false};
  tasks.push(newTask);
  localStorage.setItem('task', JSON.stringify(tasks));
}

function addButton(text, index) {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.classList.add('taskBox');
  btn.onmouseover = () => {
    btn.textContent = 'Mark as done?';
  };
  btn.onmouseout = () => {
    btn.textContent = text;
  };
  btn.onclick = () => {
    tasks[index].done = true;
    xp += 5;
    calcLevel();
    xpDs.textContent = `xp - ${xp}`;
    localStorage.setItem('xp', xp);
    localStorage.setItem('task', JSON.stringify(tasks));
    if (tasks.every(task => task.done)) {
      taskHold.style.opacity = '0';
    }
    btn.remove();
  };
  taskHold.appendChild(btn);
  taskHold.style.opacity = '1';
}

//localStorage.clear();
