// Protfolio button show 
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
              <img class="card__img" src="https://raw.githubusercontent.com/Nakib00/University_Analysis_System/main/Repost%20File/Websit%20overview/7.PNG" alt="">
              <div class="card__content">
                <h1 class="card__header">
                University classroom management system</h1>
                <p class="card__text">The project aims to optimize classroom allocation in a university, efficiently assigning classrooms to departmental sections across different shifts.</p>
              </div>
            </div>
          </div>
      
          <div class="grid__item">
            <div class="card1">
              <img class="card__img" src="https://media.licdn.com/dms/image/sync/D5627AQF07He6hMVNKA/articleshare-shrink_800/0/1695924332277?e=1696669200&v=beta&t=j2HDoO2aWhn-BUYtCI-BR42PEHXaylQECap0Mwn5uco" alt="">
              <div class="card__content">
                <h1 class="card__header">Invoice Web Application</h1>
                <p class="card__text">Invoice Web App facilitates easy creation and management of business invoices.</p>
              </div>
            </div>
          </div>
      
          <div class="grid__item">
            <div class="card1">
              <img class="card__img" src="https://raw.githubusercontent.com/Nakib00/BMI-Calculator-apps-flutter/main/Screenshot/Dashbord5.png" alt="">
              <div class="card__content">
                <h1 class="card__header">
                BMI Calculator apps Flutter</h1>
                <p class="card__text">This is a straightforward BMI (Body Mass Index) calculator app in Flutter for users to calculate BMI using weight in kilograms and height in feet/inches.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="explor-button">
        <div class="see-more">
          <a href="https://github.com/Nakib00"><button class="card__btn">Seemore<span>&rarr;</span></button></a>
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
              <iframe class="card__img" src="https://www.youtube.com/embed/aUaX_P7Il_U" frameborder="0" allowfullscreen></iframe>
              <div class="card__content">
                <h1 class="card__header">Avash | Camera</h1>
                <p class="card__text">I edited a visual video for Avash, a renowned music brand in Bangladesh.</p>
              </div>
            </div>
          </div>
      
          <div class="grid__item">
            <div class="card1">
            <iframe class="card__img" src="https://youtu.be/ZZpp4WMokZ0?si=QxbVZ3fOFPicgLV1" frameborder="0" allowfullscreen></iframe>
              <div class="card__content">
                <h1 class="card__header">FENI GOVERNMENT COLLEGE Documentary</h1>
                <p class="card__text">I created documentary videos for Feni Government College.</p>
              </div>
            </div>
          </div>
      
          <div class="grid__item">
            <div class="card1">
            <iframe class="card__img" src="https://youtu.be/GjnC-ZXZ9rQ?si=qa5gw2a5CWN_pVOy" frameborder="0" allowfullscreen></iframe>
              <div class="card__content">
                <h1 class="card__header">Shoes commercial</h1>
                <p class="card__text">I directed the production of this commercial video.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="explor-button">
        <div class="see-more">
          <a href="https://www.youtube.com/@mdnakibulislam8183"><button class="card__btn">Seemore<span>&rarr;</span></button></a>
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
            <iframe class="card__img" src="https://youtu.be/83SNcoBW9Qc?si=wOrFaqx_kXfZgv1t" frameborder="0" allowfullscreen></iframe>
              <div class="card__content">
                <h1 class="card__header">Database Management System (DBMS)</h1>
                <p class="card__text">In this video, I provide a comprehensive overview of Database Management Systems.</p>
              </div>
            </div>
          </div>
      
          <div class="grid__item">
            <div class="card1">
            <iframe class="card__img" src="https://youtu.be/IhgulKrqN8M?si=D-_NScRG3ZQayNHP" frameborder="0" allowfullscreen></iframe>
              <div class="card__content">
                <h1 class="card__header">Python Complete Course</h1>
                <p class="card__text">This video covers the basics of Python programming.</p>
              </div>
            </div>
          </div>
      
          <div class="grid__item">
            <div class="card1">
            <iframe class="card__img" src="https://youtu.be/zrPiJaZYhG0?si=nucM2ubq4KvxoFyW" frameborder="0" allowfullscreen></iframe>
              <div class="card__content">
                <h1 class="card__header">C++ Complete Course for Beginners</h1>
                <p class="card__text">In this video, I cover the fundamentals of C++ programming in one comprehensive tutorial.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="explor-button">
        <div class="see-more">
          <a href="https://www.youtube.com/@Nakibulislam/videos"><button class="card__btn">Seemore<span>&rarr;</span></button></a>
        </div>
      </div>
    </div> 
      `;
  }
}
