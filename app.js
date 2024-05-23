const phrases = [
    "Ne 🙉",
    
  ];
  
  function handleYesClick() {
    document.querySelector('.kiss').src = "";
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
      <img class='kiss' src="https://tenor.com/view/prom-to-all-the-boys-always-and-forever-netflix-pancakes-gif-19966607" alt="bear with heart">
      <div class='text'>Farah, hoćeš li sa mnom na maturu? 🌹?</div>
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
  
