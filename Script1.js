fetch('https://api.github.com/users/davigguedes')
    .then(res => res.json())
    .then(data => {
        document.getElementById('name').innerHTML = data.name
        document.getElementById('bio').innerHTML = data.bio
        document.getElementById('name2').innerHTML = data.name
        document.getElementById('avatar').innerHTML = `<img src="${data.avatar_url}" class="img-thumbnail" alt="Foto/avatar">`
        document.getElementById('location').innerHTML = data.location
        document.getElementById('blog').innerHTML = data.html_url
        document.getElementById('seguidores').innerHTML = data.followers
        document.getElementById('quantidadeRepos').innerHTML = data.public_repos
    })

fetch('db/db.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('instagram').innerHTML = `<a href="${data.social[0].instagram}" target=_blank><i class="fa-brands fa-instagram"></i></a>`
        document.getElementById('facebook').innerHTML = `<a href="${data.social[0].facebook}" target=_blank><i class="fa-brands fa-facebook"></i></a>`
        document.getElementById('linkedin').innerHTML = `<a href="${data.social[0].linkedin}" target=_blank><i class="fa-brands fa-linkedin"></i></a>`
    })

fetch('https://api.github.com/users/davigguedes/repos')
    .then(res => res.json())
    .then(data => {
        let str = '';
        data.forEach(repositorio => {
            str += `<div class="col">
                  <div class="card h-100">
                    <img src="https://github.com/davigguedes/${repositorio.name}/raw/main/banner.png" class="card-img-top" alt="Imagem do repositório">
                    <div class="card-body">
                      <h5 class="card-title">${repositorio.name.split('-').join('')}</h5>
                      <p class="card-text">${repositorio.description}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${repositorio.updated_at.substring(0, 10)}${repositorio.updated_at.substring(11).split('Z').join('')}</small>
                    </div>
                  </div>
                </div>`;
        });
        document.getElementById('repositorios').innerHTML = str;
    })

