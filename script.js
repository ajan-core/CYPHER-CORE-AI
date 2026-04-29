let coins = 50;

function login() {
    alert("Redirecting to Google Login...");
}

function watchAd() {
    let console = document.getElementById('output-console');
    console.innerText = "Watching Ad... (30s remaining)";
    
    setTimeout(() => {
        coins += 20;
        document.getElementById('coin-count').innerText = coins;
        console.innerText = "Success! 20 Coins added to your account.";
    }, 5000); // 5 seconds for demo, real ad would be 30s
}

function buildProject() {
    if (coins < 10) {
        alert("Not enough coins! Watch an ad to earn more.");
        return;
    }
    coins -= 10;
    document.getElementById('coin-count').innerText = coins;
    let console = document.getElementById('output-console');
    console.innerText = "AI is building your app... Please wait.";
    
    setTimeout(() => {
        console.innerText = "Build Complete! File generated: project_v1.zip";
    }, 3000);
}

function fixBugs() {
    if (coins < 5) {
        alert("Not enough coins!");
        return;
    }
    coins -= 5;
    document.getElementById('coin-count').innerText = coins;
    document.getElementById('output-console').innerText = "AI is scanning code for bugs... Errors fixed!";
}
