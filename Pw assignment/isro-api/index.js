const mainContainer = document.querySelector(".mainContainer");
const rocketContainer = document.querySelector('.rocketContainer');


async function fetchData(location) {
    const response = await fetch(`https://isro.vercel.app/api/${location}`);
    const data = await response.json();
    return data;
}

async function showSpaceCraft() {

    const data = await fetchData("spacecrafts");
    
    if(data!==null) {
        mainContainer.innerHTML = data.spacecrafts.map(item => {
            return `
                <div class="spaceCraft">
                    ${item.name}
                </div>
            `
        }).join("");
    }
}

async function showRockets() {
    const data = await fetchData("launchers");

    if(data!==null) {
        rocketContainer.innerHTML = data.launchers.map(item => {
            return `
                <div class="spaceCraft">
                    ${item.id}
                </div>
            `
        }).join("");
    }
}
showRockets();
showSpaceCraft();
