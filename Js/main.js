const milestoneData = JSON.parse(data).data;

function loadMilestones() {
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML = `${milestoneData.map(mileston =>{
        return`
        <div class="milestone border-b">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" /></div>
          <div>
            <p>
              ${mileston.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
          ${mileston.modules.map(module =>{
              return `
              <div class="module border-b">
            <p>${module.name}</p>
          </div>
              `
          })}
        </div>
      </div>
        `
    }).join('')}`
}
loadMilestones();