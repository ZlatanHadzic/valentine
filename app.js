const phrases = [
    "No 🙉",
    "Are you sure?",
    "Really Sure😢",
    "I'll be very sad😕",
    " Please🥺",
    "Don't do this to me🫤",
    "I'm gonna cry..😭",
    "You are breaking my heart😭💔",
  ];
  
  function handleYesClick() {
    document.querySelector('.kiss').src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
    document.querySelector('.text').innerText = "Yayyy !!!";
  }
  
  function handleNoClick() {
    const noCount = parseInt(document.querySelector('.NoButton').dataset.noCount);
    const nextCount = noCount + 1;
    document.querySelector('.NoButton').dataset.noCount = nextCount;
    document.querySelector('.NoButton').innerText = phrases[Math.min(nextCount, phrases.length - 1)];
  }
  
  document.getElementById('root').innerHTML = `
    <div class='valentine-container'>
      <img class='kiss' src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="bear with heart">
      <div class='text'>Will you be my valentine 🌹?</div>
      <div class='both-Button'>
        <button class='yesButton' style="font-size: 16px; background-color: rgb(248, 229, 89);" onclick="handleYesClick()">
          Yes 🙈
        </button>
        <button class='NoButton' data-no-count="0" onclick="handleNoClick()">
          ${phrases[0]}
        </button>
      </div>
    </div>
  `;
  