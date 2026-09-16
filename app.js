// State Management
const state = {
    is24Hour: localStorage.getItem('is24Hour') === 'true' || false,
    selectedTimezone: localStorage.getItem('selectedTimezone') || 'local',
    theme: localStorage.getItem('theme') || 'cyber-dark',
    userName: localStorage.getItem('userName') || 'Lin Jin De',
    userBio: localStorage.getItem('userBio') || 'Full-Stack Engineer & Tech Enthusiast. Building aesthetic web experiences.',
    userStatus: localStorage.getItem('userStatus') || 'Online & Creating',
    userAvatar: localStorage.getItem('userAvatar') || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    focusGoal: localStorage.getItem('focusGoal') || 'Design & deploy awesome personal clock app',
    focusDone: localStorage.getItem('focusDone') === 'true' || false,
    quickNote: localStorage.getItem('quickNote') || ''
};

// DOM Elements
const clockHoursEl = document.getElementById('clock-hours');
const clockMinutesEl = document.getElementById('clock-minutes');
const clockSecondsEl = document.getElementById('clock-seconds');
const clockAmPmEl = document.getElementById('clock-ampm');
const clockFullDateEl = document.getElementById('clock-full-date');

const heroClockDisplayEl = document.getElementById('hero-clock-display');
const heroDateDisplayEl = document.getElementById('hero-date-display');

const hourHandEl = document.getElementById('hour-hand');
const minuteHandEl = document.getElementById('minute-hand');
const secondHandEl = document.getElementById('second-hand');

const greetingIconEl = document.getElementById('greeting-icon');
const greetingTextEl = document.getElementById('greeting-text');

const solarPercentEl = document.getElementById('solar-percent');
const solarBarFillEl = document.getElementById('solar-bar-fill');

const timezoneSelectEl = document.getElementById('timezone-select');
const tzOffsetBadgeEl = document.getElementById('tz-offset-badge');

const formatToggleBtn = document.getElementById('format-toggle-btn');
const formatLabelEl = document.getElementById('format-label');

const themeBtn = document.getElementById('theme-btn');
const themeLabelEl = document.getElementById('theme-label');
const themeMenu = document.getElementById('theme-menu');

const userNameEl = document.getElementById('user-name');
const editNameBtn = document.getElementById('edit-name-btn');
const userBioEl = document.getElementById('user-bio');
const statusTextEl = document.getElementById('status-text');
const avatarImgEl = document.getElementById('avatar-img');
const footerNameEl = document.getElementById('footer-name');
const footerYearEl = document.getElementById('footer-year');

const focusInputEl = document.getElementById('focus-input');
const focusCheckboxEl = document.getElementById('focus-checkbox');
const quickNoteEl = document.getElementById('quick-note');

const changeAvatarBtn = document.getElementById('change-avatar-btn');
const avatarModal = document.getElementById('avatar-modal');
const avatarUrlInput = document.getElementById('avatar-url-input');
const avatarCancelBtn = document.getElementById('avatar-cancel-btn');
const avatarSaveBtn = document.getElementById('avatar-save-btn');

// Initialize App
function initApp() {
    // Apply saved state
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeLabel(state.theme);

    timezoneSelectEl.value = state.selectedTimezone;
    formatLabelEl.textContent = state.is24Hour ? '24H' : '12H';

    userNameEl.textContent = state.userName;
    userBioEl.textContent = state.userBio;
    statusTextEl.textContent = state.userStatus;
    if (avatarImgEl) avatarImgEl.src = state.userAvatar;
    if (footerNameEl) footerNameEl.textContent = state.userName;
    if (footerYearEl) footerYearEl.textContent = new Date().getFullYear();

    focusInputEl.value = state.focusGoal;
    focusCheckboxEl.checked = state.focusDone;
    quickNoteEl.value = state.quickNote;

    // Start Live Clock
    updateClock();
    setInterval(updateClock, 100);

    // Event Listeners setup
    setupEventListeners();
}

// Get Date object according to target timezone
function getTZDate(timezone) {
    const now = new Date();
    if (timezone === 'local') return now;
    try {
        const invDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
        const diff = now.getTime() - invDate.getTime();
        return new Date(now.getTime() - diff);
    } catch (e) {
        return now;
    }
}

// Format Offset Badge (e.g. UTC+8)
function updateOffsetBadge(timezone, dateObj) {
    if (timezone === 'local') {
        const offsetMin = -dateObj.getTimezoneOffset();
        const hrs = Math.floor(Math.abs(offsetMin) / 60);
        const mins = Math.abs(offsetMin) % 60;
        const sign = offsetMin >= 0 ? '+' : '-';
        tzOffsetBadgeEl.textContent = `UTC${sign}${hrs}${mins > 0 ? ':' + mins : ''}`;
    } else {
        try {
            const parts = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                timeZoneName: 'shortOffset'
            }).formatToParts(dateObj);
            const tzPart = parts.find(p => p.type === 'timeZoneName');
            tzOffsetBadgeEl.textContent = tzPart ? tzPart.value : timezone;
        } catch (e) {
            tzOffsetBadgeEl.textContent = timezone;
        }
    }
}

// Clock Core Logic
function updateClock() {
    const tzDate = getTZDate(state.selectedTimezone);
    const hours24 = tzDate.getHours();
    const minutes = tzDate.getMinutes();
    const seconds = tzDate.getSeconds();
    const milliseconds = tzDate.getMilliseconds();

    // 12 vs 24 Format Digital
    let displayHours = hours24;
    let ampm = '';

    if (!state.is24Hour) {
        ampm = hours24 >= 12 ? 'PM' : 'AM';
        displayHours = hours24 % 12 || 12;
        clockAmPmEl.style.display = 'inline-block';
        clockAmPmEl.textContent = ampm;
    } else {
        clockAmPmEl.style.display = 'none';
    }

    clockHoursEl.textContent = String(displayHours).padStart(2, '0');
    clockMinutesEl.textContent = String(minutes).padStart(2, '0');
    clockSecondsEl.textContent = String(seconds).padStart(2, '0');

    // Date String
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const dateStr = tzDate.toLocaleDateString('en-US', options);
    clockFullDateEl.textContent = dateStr;

    if (heroClockDisplayEl) {
        heroClockDisplayEl.textContent = `${String(displayHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`.trim();
    }
    if (heroDateDisplayEl) {
        heroDateDisplayEl.textContent = dateStr;
    }

    // Analog Clock Hands (Smooth rotation)
    const secDeg = ((seconds + milliseconds / 1000) / 60) * 360;
    const minDeg = ((minutes + seconds / 60) / 60) * 360;
    const hourDeg = (((hours24 % 12) + minutes / 60) / 12) * 360;

    secondHandEl.style.transform = `rotate(${secDeg}deg)`;
    minuteHandEl.style.transform = `rotate(${minDeg}deg)`;
    hourHandEl.style.transform = `rotate(${hourDeg}deg)`;

    // Solar Progress
    const totalSecondsInDay = hours24 * 3600 + minutes * 60 + seconds;
    const percentOfDay = ((totalSecondsInDay / 86400) * 100).toFixed(1);
    solarPercentEl.textContent = `${percentOfDay}%`;
    solarBarFillEl.style.width = `${percentOfDay}%`;

    // Dynamic Greeting
    updateGreeting(hours24);

    // Update Offset Badge
    updateOffsetBadge(state.selectedTimezone, tzDate);
}

// Dynamic Greeting based on time
function updateGreeting(hour) {
    let icon = '☀️';
    let text = 'Good Morning';

    if (hour >= 5 && hour < 12) {
        icon = '🌅';
        text = 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
        icon = '☀️';
        text = 'Good Afternoon';
    } else if (hour >= 17 && hour < 22) {
        icon = '🌆';
        text = 'Good Evening';
    } else {
        icon = '🌙';
        text = 'Late Night Mode';
    }

    greetingIconEl.textContent = icon;
    greetingTextEl.textContent = text;
}

// Event Listeners
function setupEventListeners() {
    // 12/24H Format Toggle
    formatToggleBtn.addEventListener('click', () => {
        state.is24Hour = !state.is24Hour;
        localStorage.setItem('is24Hour', state.is24Hour);
        formatLabelEl.textContent = state.is24Hour ? '24H' : '12H';
        updateClock();
    });

    // Timezone Selector
    timezoneSelectEl.addEventListener('change', (e) => {
        state.selectedTimezone = e.target.value;
        localStorage.setItem('selectedTimezone', state.selectedTimezone);
        updateClock();
    });

    // Theme Toggle Menu
    themeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        themeMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
        themeMenu.classList.add('hidden');
    });

    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', () => {
            const selectedTheme = option.getAttribute('data-theme');
            state.theme = selectedTheme;
            localStorage.setItem('theme', selectedTheme);
            document.documentElement.setAttribute('data-theme', selectedTheme);
            updateThemeLabel(selectedTheme);

            document.querySelectorAll('.theme-option').forEach(op => op.classList.remove('active'));
            option.classList.add('active');
        });
    });

    // Editable User Information Persistence
    userNameEl.addEventListener('blur', saveUserInfo);
    userNameEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); userNameEl.blur(); } });

    editNameBtn.addEventListener('click', () => {
        userNameEl.focus();
    });

    userBioEl.addEventListener('blur', saveUserInfo);
    statusTextEl.addEventListener('blur', saveUserInfo);

    // Focus & Notepad Persistence
    focusInputEl.addEventListener('input', () => {
        state.focusGoal = focusInputEl.value;
        localStorage.setItem('focusGoal', state.focusGoal);
    });

    focusCheckboxEl.addEventListener('change', () => {
        state.focusDone = focusCheckboxEl.checked;
        localStorage.setItem('focusDone', state.focusDone);
    });

    quickNoteEl.addEventListener('input', () => {
        state.quickNote = quickNoteEl.value;
        localStorage.setItem('quickNote', state.quickNote);
    });


}

function saveUserInfo() {
    state.userName = userNameEl.textContent.trim() || 'Lin Jin De';
    state.userBio = userBioEl.textContent.trim();
    state.userStatus = statusTextEl.textContent.trim();

    localStorage.setItem('userName', state.userName);
    localStorage.setItem('userBio', state.userBio);
    localStorage.setItem('userStatus', state.userStatus);

    if (footerNameEl) footerNameEl.textContent = state.userName;
}

function updateThemeLabel(themeKey) {
    const labels = {
        'cyber-dark': 'Cyber Dark',
        'aurora-glass': 'Aurora Glass',
        'sunset-glow': 'Sunset Glow',
        'minimal-light': 'Minimal Light'
    };
    themeLabelEl.textContent = labels[themeKey] || 'Cyber Dark';
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', initApp);
