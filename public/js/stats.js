let time_stats = { hunger: 100, happiness: 100, entertainment: 100, energy: 100, health: 100, vitality: 100, xp: 100 };
let train_stats = { intelligence: 0, athleticism: 0, discipline: 0, metabolism: 0 };
const timeStatsContainer = document.getElementById('time_stats_container');
const trainStatsContainer = document.getElementById('train_stats_container');
timeStatsContainer.textContent = JSON.stringify(time_stats);
trainStatsContainer.textContent = JSON.stringify(train_stats);

// Replace with sockets
function updateTimeStats() {
    Object.keys(time_stats).forEach((stat) => {
        time_stats[stat] = Math.max(0, time_stats[stat] - 1);
    });
    timeStatsContainer.textContent = JSON.stringify(time_stats);
}
setInterval(updateTimeStats, 60 * 1000);


document.getElementById('play').addEventListener('click', () => {
    // Should restore happiness
});
document.getElementById('feed').addEventListener('click', () => {
    // Should restore hunger
});
document.getElementById('train').addEventListener('click', () => {
    // Should increase train stats
});