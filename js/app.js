const apps = [
  {
    name: "Gencabo",
    developer: "TasmaStore",
    version: "1.0",
    size: "2,7 MB",
    file: "./apks/Gencabo-v1.0.apk"
  }
];

const appGrid = document.querySelector("#app-grid");
const emptyState = document.querySelector("#empty-state");

function createAppCard(app) {
  const card = document.createElement("article");
  card.className = "app-card";
  card.innerHTML = `
    <div class="app-card-top">
      <div class="app-info">
        <h3>${app.name}</h3>
        <p class="app-developer">${app.developer}</p>
        <div class="app-meta">
          <span>Versão ${app.version}</span>
          <span class="meta-dot" aria-hidden="true"></span>
          <span>${app.size}</span>
        </div>
      </div>
      <a class="install-link" href="${app.file}" download>Baixar</a>
    </div>`;
  return card;
}

function renderApps() {
  appGrid.replaceChildren(...apps.map(createAppCard));
  emptyState.hidden = apps.length > 0;
  appGrid.hidden = apps.length === 0;
}

renderApps();
