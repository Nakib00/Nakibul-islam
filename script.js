function showContent(category) {
  alert("Showing content for: " + category);
}


// Change container in protfolio container
function showContent(type) {
  const contentDiv = document.getElementById("main-contain");

  if (type === "development") {
    contentDiv.innerHTML = `
      <div class="main-contain" id="main-contain">
      <h1>Development</h1>
      <div class="contain">
        <div class="grid1">
          <div class="grid__item">
            <div class="card1">
              <img class="card__img" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="Snowy Mountains">
              <div class="card__content">
                <h1 class="card__header">A starry night</h1>
                <p class="card__text">Look up at the night sky, and find yourself <strong>immersed</strong>dddeeee fddadf .</p>
              </div>
            </div>
          </div>
      
          <div class="grid__item">
            <div class="card1">
              <img class="card__img" src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="Desert">
              <div class="card__content">
                <h1 class="card__header">Misty mornings</h1>
                <p class="card__text">Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.</p>
              </div>
            </div>
          </div>
      
          <div class="grid__item">
            <div class="card1">
              <img class="card__img" src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" alt="Canyons">
              <div class="card__content">
                <h1 class="card__header">Utah sunsets</h1>
                <p class="card__text">Sunsets over the <strong>stunning</strong> Utah Canyonlands, is truly something much more than incredible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="explor-button">
        <div class="see-more">
          <button class="card__btn">Seemore <span>&rarr;</span></button>
        </div>
      </div>
    </div> 
      `;
  } else if (type === "creative") {
    contentDiv.innerHTML = `
      <div class="main-contain" id="main-contain">
      <h1>Creative</h1>
      <div class="contain">
        <div class="grid1">
          <div class="grid__item">
            <div class="card1">
              <img class="card__img" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="Snowy Mountains">
              <div class="card__content">
                <h1 class="card__header">A starry night</h1>
                <p class="card__text">Look up at the night sky, and find yourself <strong>immersed</strong>dddeeee fddadf .</p>
              </div>
            </div>
          </div>
      
          <div class="grid__item">
            <div class="card1">
              <img class="card__img" src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="Desert">
              <div class="card__content">
                <h1 class="card__header">Misty mornings</h1>
                <p class="card__text">Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.</p>
              </div>
            </div>
          </div>
      
          <div class="grid__item">
            <div class="card1">
              <img class="card__img" src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" alt="Canyons">
              <div class="card__content">
                <h1 class="card__header">Utah sunsets</h1>
                <p class="card__text">Sunsets over the <strong>stunning</strong> Utah Canyonlands, is truly something much more than incredible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="explor-button">
        <div class="see-more">
          <button class="card__btn">Seemore <span>&rarr;</span></button>
        </div>
      </div>
    </div> 
      `;
  } else if (type === "youtube") {
    contentDiv.innerHTML = `
      <div class="main-contain" id="main-contain">
      <h1>YouTube</h1>
      <div class="contain">
        <div class="grid1">
          <div class="grid__item">
            <div class="card1">
              <img class="card__img" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="Snowy Mountains">
              <div class="card__content">
                <h1 class="card__header">A starry night</h1>
                <p class="card__text">Look up at the night sky, and find yourself <strong>immersed</strong>dddeeee fddadf .</p>
              </div>
            </div>
          </div>
      
          <div class="grid__item">
            <div class="card1">
              <img class="card__img" src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="Desert">
              <div class="card__content">
                <h1 class="card__header">Misty mornings</h1>
                <p class="card__text">Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.</p>
              </div>
            </div>
          </div>
      
          <div class="grid__item">
            <div class="card1">
              <img class="card__img" src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" alt="Canyons">
              <div class="card__content">
                <h1 class="card__header">Utah sunsets</h1>
                <p class="card__text">Sunsets over the <strong>stunning</strong> Utah Canyonlands, is truly something much more than incredible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="explor-button">
        <div class="see-more">
          <button class="card__btn">Seemore <span>&rarr;</span></button>
        </div>
      </div>
    </div> 
      `;
  }
}
