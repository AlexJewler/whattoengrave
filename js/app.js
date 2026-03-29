// WhatToEngrave — App Logic

const IDEAS = [
  // Romantic
  { text: "Still the one", category: "romantic", chars: 12 },
  { text: "Always & forever", category: "romantic", chars: 16 },
  { text: "You are my person", category: "romantic", chars: 18 },
  { text: "My favorite hello", category: "romantic", chars: 18 },
  { text: "I choose you, always", category: "romantic", chars: 20 },
  { text: "Every moment with you", category: "romantic", chars: 21 },
  { text: "My heart, always yours", category: "romantic", chars: 22 },
  { text: "You are my home", category: "romantic", chars: 15 },
  { text: "In a world full of people, I choose you", category: "romantic", chars: 39 },
  { text: "I love you more", category: "romantic", chars: 15 },
  { text: "My greatest adventure", category: "romantic", chars: 21 },
  { text: "You & me, always", category: "romantic", chars: 17 },
  { text: "Together is my favorite place", category: "romantic", chars: 29 },
  { text: "My forever person", category: "romantic", chars: 17 },
  { text: "Soulmates", category: "romantic", chars: 9 },

  // Family
  { text: "Always my greatest adventure", category: "family", chars: 28 },
  { text: "Home is wherever mom is", category: "family", chars: 23 },
  { text: "Her love, my anchor", category: "family", chars: 20 },
  { text: "My first forever friend", category: "family", chars: 23 },
  { text: "Grateful for you every day", category: "family", chars: 26 },
  { text: "My whole heart", category: "family", chars: 14 },
  { text: "Loved beyond measure", category: "family", chars: 20 },
  { text: "The one who loves me most", category: "family", chars: 25 },
  { text: "Forever my mom, forever my friend", category: "family", chars: 33 },
  { text: "She believed she could, so she did", category: "family", chars: 34 },
  { text: "My strongest woman", category: "family", chars: 18 },
  { text: "Raised by the best", category: "family", chars: 18 },
  { text: "Her love is my foundation", category: "family", chars: 25 },
  { text: "My number one always", category: "family", chars: 20 },
  { text: "Because of her, I am", category: "family", chars: 20 },

  // Friendship
  { text: "My person", category: "friendship", chars: 9 },
  { text: "Partners in everything", category: "friendship", chars: 22 },
  { text: "Side by side or miles apart", category: "friendship", chars: 27 },
  { text: "You make life better", category: "friendship", chars: 20 },
  { text: "Friends become family", category: "friendship", chars: 21 },
  { text: "Better together", category: "friendship", chars: 15 },
  { text: "My ride or die", category: "friendship", chars: 14 },
  { text: "Found family", category: "friendship", chars: 12 },
  { text: "True friend, always", category: "friendship", chars: 19 },
  { text: "You are my sunshine", category: "friendship", chars: 19 },

  // Motivational
  { text: "She believed she could", category: "motivational", chars: 22 },
  { text: "Begin anywhere", category: "motivational", chars: 14 },
  { text: "Dream big, work hard", category: "motivational", chars: 20 },
  { text: "The best is yet to come", category: "motivational", chars: 23 },
  { text: "Brave enough", category: "motivational", chars: 12 },
  { text: "You are enough", category: "motivational", chars: 14 },
  { text: "Keep going", category: "motivational", chars: 10 },
  { text: "Born to shine", category: "motivational", chars: 13 },
  { text: "This is your year", category: "motivational", chars: 17 },
  { text: "Stronger than you know", category: "motivational", chars: 22 },
  { text: "She is fierce", category: "motivational", chars: 13 },
  { text: "Go get it", category: "motivational", chars: 9 },
  { text: "Fear nothing", category: "motivational", chars: 12 },
  { text: "Rise", category: "motivational", chars: 4 },
  { text: "Unbothered, thriving", category: "motivational", chars: 20 },

  // Funny
  { text: "Still like you", category: "funny", chars: 14 },
  { text: "Technically your fault", category: "funny", chars: 22 },
  { text: "My favorite weirdo", category: "funny", chars: 18 },
  { text: "You owe me", category: "funny", chars: 10 },
  { text: "Chief Chaos Officer", category: "funny", chars: 19 },
  { text: "Worth the trouble", category: "funny", chars: 17 },
  { text: "Send coffee", category: "funny", chars: 11 },
  { text: "Plot twist: still here", category: "funny", chars: 22 },
  { text: "Feral but make it fashion", category: "funny", chars: 25 },
  { text: "Not a morning person", category: "funny", chars: 20 },

  // Memorial
  { text: "Forever in my heart", category: "memorial", chars: 19 },
  { text: "Always with me", category: "memorial", chars: 14 },
  { text: "Not lost, just gone before", category: "memorial", chars: 26 },
  { text: "Your memory lives on", category: "memorial", chars: 20 },
  { text: "Until we meet again", category: "memorial", chars: 19 },
  { text: "Gone but never forgotten", category: "memorial", chars: 24 },
  { text: "In loving memory", category: "memorial", chars: 16 },
  { text: "Always in my heart", category: "memorial", chars: 18 },
  { text: "Wings and roots", category: "memorial", chars: 15 },
  { text: "You are still here", category: "memorial", chars: 18 },

  // Religious
  { text: "Faith over fear", category: "religious", chars: 15 },
  { text: "She is clothed in strength", category: "religious", chars: 26 },
  { text: "Be still", category: "religious", chars: 8 },
  { text: "Trust in Him", category: "religious", chars: 12 },
  { text: "Blessed", category: "religious", chars: 7 },
  { text: "With God all things are possible", category: "religious", chars: 32 },
  { text: "I can do all things", category: "religious", chars: 19 },
  { text: "Walk by faith", category: "religious", chars: 13 },
  { text: "His grace is enough", category: "religious", chars: 19 },
  { text: "Chosen, loved, redeemed", category: "religious", chars: 23 },
];

let activeFilter = 'all';
let searchQuery = '';

function renderIdeas() {
  const grid = document.getElementById('ideasGrid');
  const noResults = document.getElementById('noResults');

  const filtered = IDEAS.filter(idea => {
    const matchFilter = activeFilter === 'all' || idea.category === activeFilter;
    const matchSearch = !searchQuery || idea.text.toLowerCase().includes(searchQuery) || idea.category.includes(searchQuery);
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  grid.innerHTML = filtered.map(idea => `
    <div class="idea-card" onclick="copyIdea(this, '${idea.text.replace(/'/g, "\\'")}')">
      <div class="idea-text">"${idea.text}"</div>
      <div class="idea-meta">
        <span class="idea-tag">${idea.category}</span>
        <span class="idea-chars">${idea.chars} chars</span>
      </div>
      <div class="copy-hint">Click to copy</div>
    </div>
  `).join('');
}

function copyIdea(el, text) {
  navigator.clipboard.writeText(text).catch(() => {});
  el.classList.add('copied');
  el.querySelector('.copy-hint').textContent = 'Copied!';
  setTimeout(() => {
    el.classList.remove('copied');
    el.querySelector('.copy-hint').textContent = 'Click to copy';
  }, 2000);
}

function setFilter(filter, btn) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderIdeas();
}

function filterIdeas() {
  searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
  renderIdeas();
}

document.addEventListener('DOMContentLoaded', () => {
  renderIdeas();
});
